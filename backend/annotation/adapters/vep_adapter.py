from __future__ import annotations

import json
from pathlib import Path

from backend.acmg.types.models import NormalizedVariantEvidence, VariantInput
from .base import AnnotatorAdapter


class VepAdapter(AnnotatorAdapter):
    name = 'vep'

    def __init__(self, bundle_path: str = 'data/vep_annotations.json'):
        self.bundle_path = Path(bundle_path)
        self.bundle = json.loads(self.bundle_path.read_text())

    def version(self) -> str:
        return self.bundle['annotator']['version']

    def annotate(self, variants: list[VariantInput]) -> list[dict]:
        records = self.bundle.get('variants', {})
        return [{'variant_key': variant.variant_key, 'raw': records.get(variant.variant_key)} for variant in variants]

    @staticmethod
    def _pick_tx(transcripts: list[dict]) -> dict | None:
        if not transcripts:
            return None
        return (
            next((tx for tx in transcripts if tx.get('mane_plus_clinical')), None)
            or next((tx for tx in transcripts if tx.get('mane_select')), None)
            or next((tx for tx in transcripts if tx.get('canonical') and tx.get('protein_coding')), None)
            or transcripts[0]
        )

    def normalize(self, raw_batch: list[dict]) -> list[NormalizedVariantEvidence]:
        annotator = self.bundle.get('annotator', {})
        out: list[NormalizedVariantEvidence] = []
        for batch_row in raw_batch:
            raw = batch_row.get('raw') or {}
            tx = self._pick_tx(raw.get('transcripts', [])) or {}
            inp = raw.get('input', {})
            pop = raw.get('population', {})
            clinical = raw.get('clinvar', {})
            ins = raw.get('insilico', {})
            region = raw.get('region', {})
            context = raw.get('gene_context', {})
            out.append(NormalizedVariantEvidence(
                variant_key=batch_row['variant_key'],
                build=inp.get('build', 'GRCh38'),
                chrom=str(inp.get('chrom', 'NA')),
                pos=int(inp.get('pos', 0)),
                ref=inp.get('ref', 'N'),
                alt=inp.get('alt', 'N'),
                hgvsg=tx.get('hgvsg'),
                hgvsc=tx.get('hgvsc'),
                hgvsp=tx.get('hgvsp'),
                gene=tx.get('gene', 'Unknown'),
                transcript_id=tx.get('transcript_id'),
                consequence=tx.get('consequence', 'intergenic_variant'),
                af_global=float(pop.get('af_global', 0)),
                af_popmax=float(pop.get('af_popmax', 0)),
                ac=int(pop.get('ac', 0)),
                an=int(pop.get('an', 0)),
                clinvar_significance=clinical.get('significance', 'Unknown'),
                clinvar_review_stars=int(clinical.get('review_stars', 0)),
                revel=float(ins['revel']) if ins.get('revel') is not None else None,
                cadd_phred=float(ins['cadd_phred']) if ins.get('cadd_phred') is not None else None,
                spliceai_max=float(ins['spliceai_max']) if ins.get('spliceai_max') is not None else None,
                phylop=float(ins['phylop']) if ins.get('phylop') is not None else None,
                gerp=float(ins['gerp']) if ins.get('gerp') is not None else None,
                in_critical_domain=bool(region.get('in_critical_domain', False)),
                is_hotspot=bool(region.get('is_hotspot', False)),
                lof_known_mechanism=bool(context.get('lof_known_mechanism', False)),
                annotator_name=self.name,
                annotator_version=annotator.get('version', 'unknown'),
                resource_bundle_version=annotator.get('resource_bundle_version', 'unknown'),
                acmg_ruleset_version='acmg-amp-2015-vv-v1',
                transcript_policy_version=annotator.get('transcript_policy_version', 'unknown'),
                classifier_build_id='vv-acmg-backend-build-1',
            ))
        return out
