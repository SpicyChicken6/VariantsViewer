from __future__ import annotations

from dataclasses import dataclass, field
from typing import Literal

Strength = Literal['Supporting', 'Moderate', 'Strong', 'VeryStrong']
Classification = Literal['Pathogenic', 'Likely pathogenic', 'VUS', 'Likely benign', 'Benign']


@dataclass(slots=True)
class VariantInput:
    build: str
    chrom: str
    pos: int
    ref: str
    alt: str

    @property
    def variant_key(self) -> str:
        return f"{self.chrom}-{self.pos}-{self.ref}-{self.alt}"


@dataclass(slots=True)
class CriterionResult:
    code: str
    fired: bool
    strength: Strength | None = None
    reasons: list[str] = field(default_factory=list)
    evidence_refs: list[str] = field(default_factory=list)
    blockers: list[str] = field(default_factory=list)


@dataclass(slots=True)
class ClassificationVersion:
    acmg_ruleset_version: str
    transcript_policy_version: str


@dataclass(slots=True)
class ClassificationResult:
    classification: Classification
    criteria: list[CriterionResult]
    conflicts: list[str] = field(default_factory=list)
    points: int = 0
    version: ClassificationVersion | None = None


@dataclass(slots=True)
class NormalizedVariantEvidence:
    variant_key: str
    build: str
    chrom: str
    pos: int
    ref: str
    alt: str
    hgvsg: str | None
    hgvsc: str | None
    hgvsp: str | None
    gene: str
    transcript_id: str | None
    consequence: str
    af_global: float
    af_popmax: float
    ac: int
    an: int
    clinvar_significance: str
    clinvar_review_stars: int
    revel: float | None
    cadd_phred: float | None
    spliceai_max: float | None
    phylop: float | None
    gerp: float | None
    in_critical_domain: bool
    is_hotspot: bool
    lof_known_mechanism: bool
    annotator_name: str
    annotator_version: str
    resource_bundle_version: str
    acmg_ruleset_version: str
    transcript_policy_version: str
    classifier_build_id: str
