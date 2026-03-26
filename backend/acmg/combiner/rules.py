from __future__ import annotations

from backend.acmg.types.models import ClassificationResult, ClassificationVersion, CriterionResult


def _count(criteria: list[CriterionResult], strength: str) -> int:
    return sum(1 for c in criteria if c.fired and c.strength == strength and c.code.startswith('P'))


def classify(criteria: list[CriterionResult], acmg_ruleset_version: str, transcript_policy_version: str) -> ClassificationResult:
    fired = [c for c in criteria if c.fired]
    benign = [c for c in fired if c.code.startswith('B')]
    pathogenic = [c for c in fired if c.code.startswith('P')]

    benign_strong = sum(1 for c in benign if c.strength == 'Strong')
    benign_supporting = sum(1 for c in benign if c.strength == 'Supporting')
    has_ba1 = any(c.code == 'BA1' for c in benign)

    classification = 'VUS'
    if has_ba1:
        classification = 'Benign'
    elif benign_strong >= 2 or (benign_strong >= 1 and benign_supporting >= 1):
        classification = 'Likely benign'
    elif _count(pathogenic, 'VeryStrong') >= 1 and (
        _count(pathogenic, 'Strong') >= 1
        or _count(pathogenic, 'Moderate') >= 2
        or (_count(pathogenic, 'Moderate') >= 1 and _count(pathogenic, 'Supporting') >= 1)
    ):
        classification = 'Pathogenic'
    elif (
        (_count(pathogenic, 'VeryStrong') >= 1 and _count(pathogenic, 'Moderate') >= 1)
        or (_count(pathogenic, 'Strong') >= 1 and _count(pathogenic, 'Moderate') >= 1)
        or _count(pathogenic, 'Strong') >= 2
        or _count(pathogenic, 'Moderate') >= 3
        or (_count(pathogenic, 'Moderate') >= 2 and _count(pathogenic, 'Supporting') >= 2)
    ):
        classification = 'Likely pathogenic'

    points = (
        _count(pathogenic, 'VeryStrong') * 8
        + _count(pathogenic, 'Strong') * 4
        + _count(pathogenic, 'Moderate') * 2
        + _count(pathogenic, 'Supporting')
        - benign_strong * 4
        - benign_supporting
    )

    return ClassificationResult(
        classification=classification,
        criteria=criteria,
        points=points,
        version=ClassificationVersion(
            acmg_ruleset_version=acmg_ruleset_version,
            transcript_policy_version=transcript_policy_version,
        ),
    )
