from __future__ import annotations

from backend.acmg.types.models import CriterionResult, NormalizedVariantEvidence


def pvs1(ev: NormalizedVariantEvidence) -> CriterionResult:
    lof = {'frameshift_variant', 'stop_gained', 'splice_acceptor_variant', 'splice_donor_variant'}
    fired = ev.consequence in lof and ev.lof_known_mechanism
    return CriterionResult(
        code='PVS1',
        fired=fired,
        strength='VeryStrong' if fired else None,
        reasons=['Predicted LoF variant in a disease gene with known LoF mechanism.'] if fired else [],
        evidence_refs=['consequence', 'lof_known_mechanism'],
        blockers=[] if fired else ['Not a canonical LoF context or LoF mechanism is unknown.'],
    )


def ps1(_: NormalizedVariantEvidence) -> CriterionResult:
    return CriterionResult(
        code='PS1',
        fired=False,
        evidence_refs=['clinvar_significance'],
        blockers=['Amino-acid same-change pathogenic reference is unavailable in this release.'],
    )


def pm1(ev: NormalizedVariantEvidence) -> CriterionResult:
    fired = ev.in_critical_domain or ev.is_hotspot
    return CriterionResult(
        code='PM1',
        fired=fired,
        strength='Moderate' if fired else None,
        reasons=['Located in critical domain or hotspot with low benign variation.'] if fired else [],
        evidence_refs=['in_critical_domain', 'is_hotspot'],
        blockers=[] if fired else ['No critical-domain/hotspot signal.'],
    )


def pm2(ev: NormalizedVariantEvidence) -> CriterionResult:
    fired = ev.af_popmax <= 0.0001
    return CriterionResult(
        code='PM2',
        fired=fired,
        strength='Moderate' if fired else None,
        reasons=[f'Popmax AF {ev.af_popmax} <= 0.0001 threshold.'] if fired else [],
        evidence_refs=['af_popmax'],
        blockers=[] if fired else [f'Popmax AF {ev.af_popmax} above rarity threshold.'],
    )


def pp3(ev: NormalizedVariantEvidence) -> CriterionResult:
    votes = int((ev.revel or 0) >= 0.7) + int((ev.cadd_phred or 0) >= 20) + int((ev.spliceai_max or 0) >= 0.2)
    fired = votes >= 2
    return CriterionResult(
        code='PP3',
        fired=fired,
        strength='Supporting' if fired else None,
        reasons=['Multiple computational signals suggest damaging effect.'] if fired else [],
        evidence_refs=['revel', 'cadd_phred', 'spliceai_max'],
        blockers=[] if fired else ['Computational evidence did not reach threshold.'],
    )


def ba1(ev: NormalizedVariantEvidence) -> CriterionResult:
    fired = ev.af_popmax >= 0.05
    return CriterionResult(
        code='BA1',
        fired=fired,
        reasons=[f'Popmax AF {ev.af_popmax} >= 0.05 stand-alone benign threshold.'] if fired else [],
        evidence_refs=['af_popmax'],
        blockers=[] if fired else ['Population AF below BA1.'],
    )


def bs1(ev: NormalizedVariantEvidence) -> CriterionResult:
    fired = ev.af_popmax >= 0.005
    return CriterionResult(
        code='BS1',
        fired=fired,
        strength='Strong' if fired else None,
        reasons=[f'Popmax AF {ev.af_popmax} >= 0.005 strong benign threshold.'] if fired else [],
        evidence_refs=['af_popmax'],
        blockers=[] if fired else ['Population AF below BS1.'],
    )


def bp4(ev: NormalizedVariantEvidence) -> CriterionResult:
    votes = int(ev.revel is not None and ev.revel < 0.3) + int(ev.cadd_phred is not None and ev.cadd_phred < 15) + int(ev.spliceai_max is not None and ev.spliceai_max < 0.1)
    fired = votes >= 2
    return CriterionResult(
        code='BP4',
        fired=fired,
        strength='Supporting' if fired else None,
        reasons=['Computational evidence supports benign impact.'] if fired else [],
        evidence_refs=['revel', 'cadd_phred', 'spliceai_max'],
        blockers=[] if fired else ['Benign computational evidence did not reach threshold.'],
    )


def bp7(ev: NormalizedVariantEvidence) -> CriterionResult:
    noncoding = ev.consequence in {'synonymous_variant', 'intron_variant', 'splice_region_variant'}
    low_splice = ev.spliceai_max is not None and ev.spliceai_max < 0.1
    low_cons = (ev.phylop is not None and ev.phylop < 2) or (ev.gerp is not None and ev.gerp < 2)
    fired = noncoding and low_splice and low_cons
    return CriterionResult(
        code='BP7',
        fired=fired,
        strength='Supporting' if fired else None,
        reasons=['Silent/noncoding variant with low splice and conservation signal.'] if fired else [],
        evidence_refs=['consequence', 'spliceai_max', 'phylop', 'gerp'],
        blockers=[] if fired else ['BP7 requirements not met.'],
    )


def evaluate_all(ev: NormalizedVariantEvidence) -> list[CriterionResult]:
    return [pvs1(ev), ps1(ev), pm1(ev), pm2(ev), pp3(ev), ba1(ev), bs1(ev), bp4(ev), bp7(ev)]
