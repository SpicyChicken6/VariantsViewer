# Protein Structure + AlphaMissense Module Implementation Plan

## Goal
Add one **new function module** to the VariantsViewer web app that:
1. Shows the **AlphaFold predicted protein structure** for the currently selected gene/variant.
2. Shows the **AlphaMissense score** and interpretation for the selected missense mutation.
3. Keeps the current selection model (gene row + variant row) as the single source of truth.

---

## External data & tooling decisions (research-backed)

### 1) Structure viewer library
- Use **Mol\*** (web component / plugin style integration) for rendering structures.
- Reason: production-grade protein viewer, widely used by PDB resources, supports CIF/PDB, residue selection, and custom coloring.
- References:
  - Mol* docs: https://molstar.org/viewer-docs/
  - Integration section: https://molstar.org/viewer-docs/integrations/

### 2) AlphaFold structure source
- Primary source: **AlphaFold DB** entries by UniProt accession.
- Access pattern:
  - Resolve metadata via AlphaFold API route pattern (e.g., `/api/prediction/{uniprot}`) when accessible.
  - Fallback to deterministic AlphaFold DB entry URL if metadata endpoint is not accessible in browser environment.
- References:
  - AlphaFold DB: https://alphafold.ebi.ac.uk/
  - Downloads/API navigation: https://alphafold.ebi.ac.uk/download and https://alphafold.ebi.ac.uk/api-docs

### 3) AlphaMissense score source
- Use **precomputed AlphaMissense predictions** (major transcripts/isoforms) as a pre-indexed local table for fast lookup.
- Recommended operational approach:
  - Build offline artifact for your cohort genes/variants (JSON or parquet slice), not full all-human table on client.
  - Join key: `gene + transcript + protein_position + ref_aa + alt_aa`.
- Reference:
  - DeepMind AlphaMissense repo (contains links to hosted predictions and VEP plugin context): https://github.com/google-deepmind/alphamissense

---

## Current-code integration points

### Existing UI/logic anchors
- `index.html` currently has a right-column prediction card (`.predictions-card`) suitable for adding a protein/score module region.
- `app.js` already drives selected-gene and selected-variant state for table interactions.
- Data files under `data/` are already fetched and normalized by the app bootstrap.

### Non-breaking integration strategy
- Add a new card under existing right-column stack (or split current predictions card into tabs).
- Keep all feature code in a dedicated module namespace in `app.js` first (later can be split into `modules/protein.js`).

---

## Proposed data contract

Add new data source `data/protein_annotations.json` (or generated from backend):

```json
{
  "MECP2": {
    "uniprot": "P51608",
    "alphafold": {
      "entryId": "AF-P51608-F1",
      "modelUrl": "https://alphafold.ebi.ac.uk/files/AF-P51608-F1-model_v4.cif"
    },
    "variants": {
      "p.Arg106Trp": {
        "transcript": "ENST00000303391",
        "proteinPosition": 106,
        "refAa": "R",
        "altAa": "W",
        "alphamissense": {
          "score": 0.93,
          "class": "likely_pathogenic",
          "source": "AlphaMissense precomputed"
        }
      }
    }
  }
}
```

### Why this contract
- Enables deterministic front-end rendering without multi-hop API calls.
- Allows backend replacement later without front-end redesign.
- Encodes residue number so viewer can highlight mutated position.

---

## UI/UX specification

## New card: `PROTEIN STRUCTURE & ALPHAMISSENSE`

### Layout
- Left (~70%): Mol* canvas.
- Right (~30%): mutation panel.

### Mutation panel fields
- Gene symbol
- Protein change (e.g., `p.Arg106Trp`)
- Transcript
- AlphaMissense score (0-1)
- Classification badge (`likely benign`, `ambiguous`, `likely pathogenic`)
- Data provenance links (AlphaFold entry, AlphaMissense source)

### Visual logic
- Color structure by pLDDT (default AlphaFold style).
- Highlight mutated residue in contrasting color (e.g., magenta sphere/stick).
- If selected variant is not missense, show explicit empty-state text:
  - “AlphaMissense is available for missense substitutions only.”

### Accessibility
- Card title and status text exposed as plain DOM text (not canvas only).
- Keyboard focus ring on viewer container and source links.

---

## Detailed implementation phases

## Phase 0 — Branching + scaffolding (0.5 day)
1. Create branch: `protein/alphabet-structure-alphamissense-module`.
2. Add placeholder card markup and skeleton CSS.
3. Add feature flag constant in JS (`ENABLE_PROTEIN_MODULE`).

Deliverable: UI placeholder rendered with no runtime errors.

## Phase 1 — Data plumbing (1 day)
1. Add loader for `data/protein_annotations.json`.
2. Build selector helper:
   - Input: selected gene object + selected variant object.
   - Output: `proteinModuleState` with `{status, uniprot, modelUrl, score, class, residue}`.
3. Add robust null-handling and explicit status enum:
   - `no_gene`, `no_variant`, `non_missense`, `missing_structure`, `missing_alphamissense`, `ready`.

Deliverable: right panel updates text correctly for all statuses.

## Phase 2 — Mol* integration (1–1.5 days)
1. Load Mol* via CDN script or npm bundling (CDN first for fastest path).
2. Initialize viewer once and cache instance.
3. On `ready` state:
   - Load `modelUrl` (CIF).
   - Zoom to mutated residue.
   - Apply highlight representation.
4. On state change, clear/reload only when protein model changes to reduce flicker.

Deliverable: structure renders and residue highlight follows variant selection.

## Phase 3 — AlphaMissense presentation (0.5 day)
1. Score formatting to 3 decimals.
2. Classification logic (configurable thresholds):
   - `>= 0.564` likely pathogenic
   - `<= 0.34` likely benign
   - otherwise uncertain/ambiguous
3. Tooltip copy clarifying this is predictive and not standalone clinical evidence.

Deliverable: score badge and interpretation synced with selected missense variant.

## Phase 4 — Performance hardening (0.5 day)
1. Memoize per-protein structure load state.
2. Debounce rapid table selection events (100–150ms).
3. Add lazy-init: create viewer only when card enters viewport or first ready state.

Deliverable: smooth switching between variants with minimal reflow.

## Phase 5 — QA + docs (0.5 day)
1. Test matrix (below).
2. Update README with module behavior and data requirements.
3. Add screenshots/GIF for visual QA.

Deliverable: merge-ready module and documentation.

---

## Test matrix

1. **Missense variant + known AlphaFold model + score exists**
   - Structure loads, residue highlighted, score displayed.
2. **Missense variant + structure exists + no score row**
   - Structure loads, score panel says unavailable.
3. **Non-missense variant**
   - Empty-state message, no failed requests.
4. **Gene with no AlphaFold mapping**
   - Friendly “structure unavailable” state.
5. **Network failure loading CIF**
   - Error state with retry button.
6. **Rapid variant switching**
   - No stale residue highlight after switch.

---

## Risks and mitigations

- **Large structure file load latency**
  - Mitigation: load spinner + cache + avoid unnecessary reload.
- **Transcript/protein mismatch for residue index**
  - Mitigation: store transcript-specific protein position in annotation table.
- **Client memory growth in repeated model loads**
  - Mitigation: reuse single viewer instance; clear old representations before new load.

---

## Sub-agent execution packet (for implementation branch)

Use this exact handoff:

1. Checkout branch:
   - `git checkout -b protein/alphabet-structure-alphamissense-module`
2. Implement files:
   - `index.html`: add module card markup.
   - `styles.css`: add responsive module styles.
   - `app.js`: add `proteinModule` state machine + Mol* glue.
   - `data/protein_annotations.json`: seed demo mappings.
3. Acceptance criteria:
   - No console errors on load.
   - Selecting variant updates score and residue highlight.
   - Non-missense variants show proper explanatory state.
4. Commit message template:
   - `feat(protein): add AlphaFold structure viewer with AlphaMissense panel`

---

## Recommended next step
Start with a thin vertical slice (single gene + 2 variants in `protein_annotations.json`) to validate end-to-end wiring before scaling to cohort-wide annotations.
