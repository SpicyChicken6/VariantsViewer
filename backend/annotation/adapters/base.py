from __future__ import annotations

from abc import ABC, abstractmethod

from backend.acmg.types.models import NormalizedVariantEvidence, VariantInput


class AnnotatorAdapter(ABC):
    name: str

    @abstractmethod
    def version(self) -> str:
        raise NotImplementedError

    @abstractmethod
    def annotate(self, variants: list[VariantInput]) -> list[dict]:
        raise NotImplementedError

    @abstractmethod
    def normalize(self, raw_batch: list[dict]) -> list[NormalizedVariantEvidence]:
        raise NotImplementedError
