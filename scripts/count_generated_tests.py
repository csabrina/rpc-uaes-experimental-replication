import argparse
import csv
import re
from pathlib import Path


TEST_PATTERN = re.compile(r"^\s*it(?:\.(?:only|skip))?\s*\(", re.MULTILINE)


def count_tests(test_file):
    content = test_file.read_text(encoding="utf-8")
    return len(TEST_PATTERN.findall(content))


def collect_counts(data_dir):
    rows = []
    for project_dir in sorted(path for path in data_dir.iterdir() if path.is_dir()):
        test_file = project_dir / "cytestion.cy.js"
        rows.append(
            {
                "project": project_dir.name,
                "generated_tests": count_tests(test_file) if test_file.exists() else "",
                "test_file": str(test_file),
            }
        )
    return rows


def write_csv(rows, output_file):
    with output_file.open("w", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=["project", "generated_tests", "test_file"])
        writer.writeheader()
        writer.writerows(rows)


def print_summary(rows):
    project_width = max(len(row["project"]) for row in rows)
    print(f"{'project'.ljust(project_width)}  generated_tests")
    print(f"{'-' * project_width}  ---------------")
    total = 0
    for row in rows:
        count = row["generated_tests"]
        if isinstance(count, int):
            total += count
        print(f"{row['project'].ljust(project_width)}  {count}")
    print(f"{'-' * project_width}  ---------------")
    print(f"{'TOTAL'.ljust(project_width)}  {total}")


def main():
    parser = argparse.ArgumentParser(
        description="Count generated Cypress tests in data/<project>/cytestion.cy.js files."
    )
    parser.add_argument("--data-dir", default="data", type=Path)
    parser.add_argument("--output", default="generated_tests_count.csv", type=Path)
    args = parser.parse_args()

    rows = collect_counts(args.data_dir)
    write_csv(rows, args.output)
    print_summary(rows)
    print(f"\nSaved CSV to {args.output}")


if __name__ == "__main__":
    main()
