from backend.acmg.types.models import VariantInput
from backend.api.acmg_service import classify_one


def test_pathogenic_variant_classification():
    result = classify_one(VariantInput(build='GRCh38', chrom='2', pos=104856069, ref='T', alt='TG'))
    assert result.classification in {'Pathogenic', 'Likely pathogenic'}
    fired_codes = {criterion.code for criterion in result.criteria if criterion.fired}
    assert 'PVS1' in fired_codes


def test_benign_variant_classification():
    result = classify_one(VariantInput(build='GRCh38', chrom='7', pos=104856328, ref='G', alt='A'))
    assert result.classification in {'Likely benign', 'Benign'}
    fired_codes = {criterion.code for criterion in result.criteria if criterion.fired}
    assert 'BS1' in fired_codes or 'BA1' in fired_codes
