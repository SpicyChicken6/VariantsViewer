import pandas as pd


# ==========================================
# 1. INHERITANCE LOOKUP DICTIONARY
# ==========================================
INHERITANCE_RULES = {
    "Autosomal_and_PAR": {
        ("0/0", "0/0", "0/0"): "Reference",
        ("0/0", "0/1", "0/0"): "Reference (Maternal Carrier)",
        ("0/0", "0/0", "0/1"): "Reference (Paternal Carrier)",
        ("0/0", "0/1", "0/1"): "Reference (Biparental Carriers)",
        ("0/1", "0/0", "0/0"): "De Novo",
        ("0/1", "0/1", "0/0"): "Maternally Inherited",
        ("0/1", "1/1", "0/0"): "Maternally Inherited",
        ("0/1", "0/0", "0/1"): "Paternally Inherited",
        ("0/1", "0/0", "1/1"): "Paternally Inherited",
        ("0/1", "0/1", "0/1"): "Inherited (Ambiguous Origin)",
        ("0/1", "1/1", "0/1"): "Maternally Inherited",
        ("0/1", "0/1", "1/1"): "Paternally Inherited",
        ("1/1", "0/1", "0/1"): "Biparental (Homozygous)",
        ("1/1", "1/1", "0/1"): "Biparental (Homozygous)",
        ("1/1", "0/1", "1/1"): "Biparental (Homozygous)",
        ("1/1", "1/1", "1/1"): "Biparental (Homozygous)",
    },
    "X_Linked_Female": {
        ("0/0", "0/0", "0/0"): "Reference",
        ("0/0", "0/1", "0/0"): "Reference (Maternal Carrier)",
        ("0/0", "0/1", "1/1"): "Mendelian Error (Father must pass Alt X)",
        ("0/1", "0/0", "0/0"): "De Novo",
        ("0/1", "0/1", "0/0"): "Maternally Inherited",
        ("0/1", "1/1", "0/0"): "Maternally Inherited",
        ("0/1", "0/0", "1/1"): "Paternally Inherited",
        ("0/1", "0/1", "1/1"): "Paternally Inherited",
        ("1/1", "0/1", "1/1"): "Biparental (Homozygous)",
        ("1/1", "1/1", "1/1"): "Biparental (Homozygous)",
    },
    "X_Linked_Male": {
        ("0/0", "0/0", "0/0"): "Reference",
        ("0/0", "0/1", "0/0"): "Reference (Maternal Carrier)",
        ("0/0", "0/0", "1/1"): "Reference (Father has X var, son gets Y)",
        ("0/0", "0/1", "1/1"): "Reference (Maternal Carrier)",
        ("1/1", "0/0", "0/0"): "De Novo",
        ("1/1", "0/1", "0/0"): "Maternally Inherited",
        ("1/1", "1/1", "0/0"): "Maternally Inherited",
        ("1/1", "0/1", "1/1"): "Maternally Inherited",
        ("1/1", "1/1", "1/1"): "Maternally Inherited",
        ("1/1", "0/0", "1/1"): "De Novo (Flag: Possible Sample Swap/XXY)",
    },
    "Y_Linked_Male": {
        ("0/0", "0/0", "0/0"): "Reference",
        ("0/0", "0/0", "1/1"): "Mendelian Error (Father has Y var, son does not)",
        ("1/1", "0/0", "0/0"): "De Novo",
        ("1/1", "0/0", "1/1"): "Paternally Inherited",
    },
}


# ==========================================
# 2. HELPER FUNCTIONS
# ==========================================
def normalize_gt(gt: str) -> str:
    """Normalizes VCF genotypes to standard diploid format for lookup."""
    if pd.isna(gt) or gt in ["./.", ".", "0", "0|0"]:
        return "0/0"
    if gt in ["1", "1|1"]:
        return "1/1"
    if gt in ["0|1", "1|0", "1/0"]:
        return "0/1"
    return gt


def is_par_region(chrom: str, pos: int) -> bool:
    """Checks if a variant falls within GRCh38 PAR1 or PAR2."""
    try:
        pos = int(pos)
    except ValueError:
        return False

    chrom = str(chrom).replace("chr", "").upper()
    if chrom in ["X", "Y"]:
        if 10001 <= pos <= 2781479:
            return True  # PAR1
        if 155701383 <= pos <= 156030895:
            return True  # PAR2 (ChrX)
        if 56887903 <= pos <= 57217415:
            return True  # PAR2 (ChrY)
    return False


# ==========================================
# 3. CORE LOGIC FUNCTION
# ==========================================
def determine_inheritance(chrom, pos, proband_sex, proband_gt, mat_gt, pat_gt) -> str:
    """
    Determines the inheritance pattern of a variant based on trio genotypes.
    """
    chrom = str(chrom).replace("chr", "").upper()
    proband_sex = str(proband_sex).capitalize()

    p_gt = normalize_gt(proband_gt)
    m_gt = normalize_gt(mat_gt)
    f_gt = normalize_gt(pat_gt)
    lookup_tuple = (p_gt, m_gt, f_gt)

    if chrom not in ["X", "Y", "MT", "M"] or is_par_region(chrom, pos):
        region_key = "Autosomal_and_PAR"
    elif chrom == "X":
        if proband_sex not in ["Male", "Female"]:
            return "Error: Invalid Sex"
        region_key = f"X_Linked_{proband_sex}"
    elif chrom == "Y":
        if proband_sex == "Female":
            return "Mendelian Error (Female with Y-linked variant)"
        region_key = "Y_Linked_Male"
    elif chrom in ["MT", "M"]:
        if p_gt != "0/0" and m_gt != "0/0":
            return "Maternally Inherited (MT)"
        if p_gt != "0/0" and m_gt == "0/0":
            return "De Novo (MT) / Heteroplasmy"
        return "Reference"
    else:
        return f"Unknown Chromosome: {chrom}"

    try:
        rules = INHERITANCE_RULES[region_key]
        return rules.get(lookup_tuple, f"Unclassified / Mendelian Error {lookup_tuple}")
    except KeyError:
        return "Configuration Error"


# ==========================================
# 4. PANDAS INTEGRATION EXAMPLE
# ==========================================
if __name__ == "__main__":
    data = {
        "CHROM": ["chr1", "chrX", "chrX", "chrY", "chrX"],
        "POS": [15000, 50000000, 2000000, 15000000, 60000000],
        "PROBAND_GT": ["0/1", "1", "0/1", "1", "0/1"],
        "MATERNAL_GT": ["0/0", "0/1", "0/1", "./.", "0/0"],
        "PATERNAL_GT": ["0/1", "0", "0/1", "1", "0/0"],
        "PROBAND_SEX": ["Male", "Male", "Female", "Male", "Female"],
    }
    df = pd.DataFrame(data)

    df["INHERITANCE_PATTERN"] = df.apply(
        lambda row: determine_inheritance(
            chrom=row["CHROM"],
            pos=row["POS"],
            proband_sex=row["PROBAND_SEX"],
            proband_gt=row["PROBAND_GT"],
            mat_gt=row["MATERNAL_GT"],
            pat_gt=row["PATERNAL_GT"],
        ),
        axis=1,
    )

    print(df[["CHROM", "POS", "PROBAND_GT", "INHERITANCE_PATTERN"]].to_string())
