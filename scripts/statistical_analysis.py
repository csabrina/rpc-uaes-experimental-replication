#!/usr/bin/env python3
"""Summarize UAES/Markup results using the application as the sampling unit."""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path

import numpy as np


REFERENCE_RATE = 0.7981


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, default=Path("results_csv"))
    parser.add_argument("--output", type=Path, default=Path("statistical_analysis"))
    parser.add_argument("--bootstrap-repetitions", type=int, default=100_000)
    parser.add_argument("--seed", type=int, default=20_260_716)
    return parser.parse_args()


def load_rows(input_dir: Path) -> list[dict[str, int | str | float]]:
    rows: list[dict[str, int | str | float]] = []
    for path in sorted(input_dir.glob("*-opensource.csv")):
        with path.open(newline="", encoding="utf-8") as source:
            raw = next(csv.DictReader(source))

        same = int(raw["equal"])
        missed = int(raw["minus"])
        new = int(raw["plus"])
        baseline = same + missed
        union = same + missed + new
        rows.append(
            {
                "project": path.name.removesuffix("-result-opensource.csv"),
                "same": same,
                "new": new,
                "missed": missed,
                "markup_baseline": baseline,
                "uaes_total": same + new,
                "union_total": union,
                "baseline_recovery_pct": 100 * same / baseline,
                "new_union_pct": 100 * new / union,
            }
        )
    if not rows:
        raise RuntimeError(f"No *-opensource.csv files found in {input_dir}")
    return rows


def cluster_bootstrap(
    same: np.ndarray,
    missed: np.ndarray,
    rates: np.ndarray,
    repetitions: int,
    seed: int,
) -> tuple[np.ndarray, np.ndarray]:
    """Resample whole applications and retain within-application dependence."""
    rng = np.random.default_rng(seed)
    app_count = len(same)
    pooled = np.empty(repetitions)
    macro = np.empty(repetitions)

    # Batching avoids allocating repetitions x applications for large B values.
    batch_size = 10_000
    for start in range(0, repetitions, batch_size):
        stop = min(start + batch_size, repetitions)
        indexes = rng.integers(0, app_count, size=(stop - start, app_count))
        sampled_same = same[indexes].sum(axis=1)
        sampled_missed = missed[indexes].sum(axis=1)
        pooled[start:stop] = sampled_same / (sampled_same + sampled_missed)
        macro[start:stop] = rates[indexes].mean(axis=1)

    return pooled, macro


def write_project_metrics(output_dir: Path, rows: list[dict[str, object]]) -> None:
    with (output_dir / "project_metrics.csv").open(
        "w", newline="", encoding="utf-8"
    ) as target:
        writer = csv.DictWriter(target, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)


def main() -> None:
    args = parse_args()
    if args.bootstrap_repetitions <= 0:
        raise ValueError("--bootstrap-repetitions must be positive")

    rows = load_rows(args.input)
    args.output.mkdir(parents=True, exist_ok=True)

    same = np.array([row["same"] for row in rows], dtype=np.int64)
    new = np.array([row["new"] for row in rows], dtype=np.int64)
    missed = np.array([row["missed"] for row in rows], dtype=np.int64)
    rates = same / (same + missed)

    pooled_bootstrap, macro_bootstrap = cluster_bootstrap(
        same, missed, rates, args.bootstrap_repetitions, args.seed
    )
    pooled_rate = same.sum() / (same.sum() + missed.sum())
    macro_rate = rates.mean()

    summary = {
        "analysis_unit": "application",
        "application_count": len(rows),
        "bootstrap": {
            "method": "nonparametric percentile bootstrap clustered by application",
            "repetitions": args.bootstrap_repetitions,
            "seed": args.seed,
            "confidence_level": 0.95,
        },
        "counts": {
            "same": int(same.sum()),
            "new": int(new.sum()),
            "missed": int(missed.sum()),
            "markup_baseline": int((same + missed).sum()),
            "uaes_total": int((same + new).sum()),
            "union_total": int((same + new + missed).sum()),
        },
        "pooled_baseline_recovery": {
            "estimate_pct": 100 * pooled_rate,
            "cluster_bootstrap_ci_95_pct": [
                100 * float(np.quantile(pooled_bootstrap, 0.025)),
                100 * float(np.quantile(pooled_bootstrap, 0.975)),
            ],
        },
        "application_level_baseline_recovery": {
            "mean_pct": 100 * macro_rate,
            "median_pct": 100 * float(np.median(rates)),
            "sample_standard_deviation_pp": 100 * float(np.std(rates, ddof=1)),
            "iqr_pct": [
                100 * float(np.quantile(rates, 0.25)),
                100 * float(np.quantile(rates, 0.75)),
            ],
            "range_pct": [100 * float(rates.min()), 100 * float(rates.max())],
            "bootstrap_ci_95_for_mean_pct": [
                100 * float(np.quantile(macro_bootstrap, 0.025)),
                100 * float(np.quantile(macro_bootstrap, 0.975)),
            ],
        },
        "historical_open_source_reference": {
            "original_study_pct": 100 * REFERENCE_RATE,
            "pooled_difference_percentage_points": 100
            * (pooled_rate - REFERENCE_RATE),
            "interpretation": (
                "Fixed historical reference for contextual comparison; it is not an "
                "equivalence or similarity margin."
            ),
        },
        "new_elements": {
            "count": int(new.sum()),
            "share_of_union_pct": 100 * new.sum() / (same + new + missed).sum(),
            "interpretation": (
                "Candidates found only by UAES; do not interpret this share as precision "
                "or false-positive rate without systematic manual validation."
            ),
        },
    }

    write_project_metrics(args.output, rows)
    with (args.output / "summary.json").open("w", encoding="utf-8") as target:
        json.dump(summary, target, ensure_ascii=False, indent=2)
        target.write("\n")

    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
