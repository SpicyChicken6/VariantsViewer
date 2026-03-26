from __future__ import annotations

from backend.acmg.combiner.rules import classify
from backend.acmg.criteria.v1 import evaluate_all
from backend.acmg.types.models import ClassificationResult, VariantInput
from backend.annotation.adapters.base import AnnotatorAdapter
from backend.annotation.adapters.vep_adapter import VepAdapter


def annotate_vep(variants: list[VariantInput], adapter: AnnotatorAdapter | None = None):
    adapter = adapter or VepAdapter()
    return adapter.normalize(adapter.annotate(variants))


def classify_one(variant: VariantInput, adapter: AnnotatorAdapter | None = None) -> ClassificationResult:
    evidence = annotate_vep([variant], adapter=adapter)[0]
    criteria = evaluate_all(evidence)
    return classify(criteria, evidence.acmg_ruleset_version, evidence.transcript_policy_version)


def classify_batch(variants: list[VariantInput], adapter: AnnotatorAdapter | None = None) -> list[ClassificationResult]:
    adapter = adapter or VepAdapter()
    evidence_rows = annotate_vep(variants, adapter=adapter)
    return [
        classify(evaluate_all(evidence), evidence.acmg_ruleset_version, evidence.transcript_policy_version)
        for evidence in evidence_rows
    ]


def versions(adapter: AnnotatorAdapter | None = None) -> dict:
    adapter = adapter or VepAdapter()
    return {
        'annotator_name': adapter.name,
        'annotator_version': adapter.version(),
    }
