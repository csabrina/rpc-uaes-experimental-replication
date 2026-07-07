import csv
from pathlib import Path

rows = []

for path in sorted(Path("results_csv").glob("*-opensource.csv")):
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        row = next(reader)

    total = int(row["total"])
    equal = int(row["equal"])
    minus = int(row["minus"])
    plus = int(row["plus"])

    baseline = equal + minus

    rows.append({
        "project": path.name.replace("-result-opensource.csv", ""),
        "total": total,
        "same": equal,
        "missed": minus,
        "new": plus,
        "uaes_found_baseline_pct": round((equal / baseline) * 100, 1) if baseline else 0,
        "new_pct": round((plus / total) * 100, 1) if total else 0,
        "missed_baseline_pct": round((minus / baseline) * 100, 1) if baseline else 0,
    })

with open("project_percentages.csv", "w", newline="", encoding="utf-8") as f:
    fieldnames = [
        "project",
        "total",
        "same",
        "missed",
        "new",
        "uaes_found_baseline_pct",
        "new_pct",
        "missed_baseline_pct",
    ]
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)