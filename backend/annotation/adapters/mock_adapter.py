from __future__ import annotations

from backend.acmg.types.models import NormalizedVariantEvidence, VariantInput
from .base import AnnotatorAdapter


class MockAdapter(AnnotatorAdapter):
    name = 'mock'

    def __init__(self, evidence: list[NormalizedVariantEvidence]):
        self._evidence = evidence

    def version(self) -> str:
        return 'mock-1'

    def annotate(self, variants: list[VariantInput]) -> list[dict]:
        keys = {variant.variant_key for variant in variants}
        return [{'variant_key': ev.variant_key, 'raw': ev} for ev in self._evidence if ev.variant_key in keys]

    def normalize(self, raw_batch: list[dict]) -> list[NormalizedVariantEvidence]:
        return [entry['raw'] for entry in raw_batch]
