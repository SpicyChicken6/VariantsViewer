# Sub-agent Brief: Protein Module Implementation

## Branch
`protein/alphabet-structure-alphamissense-module`

## Objective
Implement a new VariantsViewer module that displays:
- AlphaFold predicted structure for selected variant's gene.
- AlphaMissense score/class for the selected missense mutation.

## Required edits
- `index.html`
  - Add a new card titled `PROTEIN STRUCTURE & ALPHAMISSENSE` in the right column.
  - Include viewer container and score detail panel with loading/error/empty states.
- `styles.css`
  - Add responsive layout (desktop split, mobile stack).
  - Add score badge states (`benign`, `ambiguous`, `pathogenic`).
- `app.js`
  - Add `proteinModuleState` with status enum.
  - Load `data/protein_annotations.json` at app bootstrap.
  - Map selected gene+variant => model URL, residue index, score/class.
  - Integrate Mol* viewer lifecycle and residue highlight.
- `data/protein_annotations.json`
  - Add seed data for demo genes and selected variants.

## Acceptance criteria
1. Viewer renders AlphaFold model when selected variant has available mapping.
2. Residue highlight follows selected variant.
3. AlphaMissense score/class renders and updates correctly.
4. Non-missense variant shows explicit unsupported-state message.
5. Missing structure/score states are handled without throwing errors.

## Constraints
- Keep existing table selection behavior unchanged.
- Do not break IGV or inheritance panels.
- Keep new logic modular and well-commented.

## Suggested commit
`feat(protein): add AlphaFold viewer and AlphaMissense score module`
