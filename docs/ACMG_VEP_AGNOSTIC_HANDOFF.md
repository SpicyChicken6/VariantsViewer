# ACMG Engine (Annotator-Agnostic) + VEP-First Handoff Plan

## Branch and objective
- **Working branch:** `feature/acmg-vep-agnostic-plan`
- **Feature goal:** Build an ACMG grading engine that is annotation-provider agnostic while using VEP as the primary annotation backend.
- **Non-goal for first iteration:** Full automation of all ACMG criteria requiring manual/case-level evidence.

---

## 1) Product requirements

### Functional
1. Accept variants (`build`, `chrom`, `pos`, `ref`, `alt`) in batch.
2. Annotate via VEP and normalize outputs into an internal schema.
3. Evaluate ACMG criteria from normalized evidence.
4. Combine criteria into final ACMG class.
5. Return criterion-level explanations and data provenance.
6. Render results in the existing ACMG tab in the VariantsViewer UI.

### Non-functional
1. Deterministic/reproducible outputs under fixed versions.
2. Scalable processing for large cohorts (queue + batch + caching).
3. Full version tracking for annotation resources and rules.
4. Easy swap-in of additional annotators without rewriting ACMG logic.

---

## 2) Architecture overview

### A. Adapter pattern for annotation
Create an `AnnotatorAdapter` interface:

```ts
interface AnnotatorAdapter {
  name: string;
  version(): Promise<string>;
  annotate(variants: VariantInput[]): Promise<RawAnnotationBatch>;
  normalize(raw: RawAnnotationBatch): Promise<NormalizedVariantEvidence[]>;
}
```

Implementations:
- `VepAdapter` (primary)
- `MockAdapter` (tests)
- `NirvanaAdapter` (optional future parity)

### B. ACMG engine independent from annotation source
- ACMG criteria consume only `NormalizedVariantEvidence`.
- No criterion code should parse raw VEP JSON directly.

### C. Explainability and provenance
Each criterion result must include:
- fired/not fired,
- strength,
- rationale text,
- evidence references (field paths),
- blockers (why not fired),
- source versions used.

---

## 3) Data contracts

### A. NormalizedVariantEvidence (minimum)
- Variant identity: `build`, `chrom`, `pos`, `ref`, `alt`, HGVSg/c/p
- Gene/transcript: `gene`, `transcript_id`, consequence, exon/intron, transcript policy tags
- Population: AF global/popmax, AC/AN
- Clinical: ClinVar significance/review stars
- In silico: REVEL, CADD, SpliceAI, conservation (phyloP/GERP), optional AlphaMissense
- Region context: domains/hotspots/critical regions where available
- Case context (optional): de novo/segregation placeholders
- Provenance: annotator version, plugin versions, resource versions, timestamp

### B. CriterionResult
```ts
type CriterionResult = {
  code: string;
  fired: boolean;
  strength?: 'Supporting' | 'Moderate' | 'Strong' | 'VeryStrong';
  reasons: string[];
  evidenceRefs: string[];
  blockers?: string[];
}
```

### C. ClassificationResult
```ts
type ClassificationResult = {
  classification: 'Pathogenic' | 'Likely pathogenic' | 'VUS' | 'Likely benign' | 'Benign';
  criteria: CriterionResult[];
  conflicts?: string[];
  points?: number;
  version: {
    acmg_ruleset_version: string;
    transcript_policy_version: string;
  };
}
```

---

## 4) VEP-first annotation plan

1. Containerized VEP execution with pinned release.
2. Fixed transcript policy:
   - MANE Plus Clinical
   - else MANE Select
   - else canonical protein-coding
   - else deterministic fallback
3. Enable required plugin/custom resources for ACMG evidence:
   - ClinVar,
   - gnomAD AF,
   - REVEL,
   - SpliceAI,
   - optional AlphaMissense.
4. Parse VEP JSON into normalized schema.
5. Persist raw + normalized records (for debugging and replay).

---

## 5) ACMG implementation milestones

## Milestone 1 (v1 criteria, automatable)
Pathogenic-side:
- PVS1
- PS1
- PM1
- PM2
- PP3

Benign-side:
- BA1
- BS1
- BP4
- BP7

Deliverables:
- Per-criterion evaluator modules
- Deterministic combiner
- Final class + explanation output

## Milestone 2 (extended automation)
- PM5
- PS4 (if cohort statistics available)
- BP1/BP3
- Optional points output

## Milestone 3 (semi-manual evidence support)
- PS2/PM6/PP1 and others requiring family/case evidence
- Curator override with audit trail

---

## 6) API endpoints

- `POST /api/annotations/vep` -> normalized evidence for input variants
- `POST /api/acmg/classify` -> classification for one variant
- `POST /api/acmg/classify-batch` -> paged batch classification
- `GET /api/acmg/versions` -> all relevant versions/resources

---

## 7) UI integration in VariantsViewer

1. Keep existing tab shell and prediction panel.
2. Replace static ACMG bullet list with dynamic API response rendering:
   - final ACMG badge,
   - criterion chips + strengths,
   - expandable rationale per criterion,
   - provenance footer (annotator/ruleset versions).
3. Maintain current tab-switch mechanics and avoid regression for inheritance/IGV tabs.

---

## 8) Validation plan

1. Unit tests per criterion.
2. Golden fixtures for known pathogenic/benign/VUS variants.
3. Transcript-policy sensitivity test set.
4. Snapshot tests for ACMG UI section.
5. Reproducibility tests using fixed version bundle.

---

## 9) Versioning policy (must-have)

Attach the following to every classification output:
- `annotator_name`
- `annotator_version`
- `resource_bundle_version`
- `acmg_ruleset_version`
- `transcript_policy_version`
- `classifier_build_id`

Any change to thresholds, resources, transcript rules, or plugin versions must bump versions and trigger regression checks.

---

## 10) Subagent execution checklist

1. Scaffold backend modules:
   - `backend/annotation/adapters/`
   - `backend/acmg/criteria/`
   - `backend/acmg/combiner/`
   - `backend/acmg/types/`
2. Implement `VepAdapter` + normalization.
3. Implement v1 criteria + combiner.
4. Add API endpoints.
5. Wire frontend ACMG tab to API payload.
6. Add fixture tests + CI checks.
7. Add docs for deployment/versioning/rollback.

---

## 11) Acceptance criteria

- Given a variant, app displays final ACMG class and criterion evidence breakdown.
- Output includes provenance/version metadata.
- Re-running same input with same versions yields identical result.
- Engine can theoretically switch annotator adapters with no criterion code rewrite.

