#!/usr/bin/env python3
"""Small dependency-free checks for the static academic website."""

from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys


ROOT = Path(__file__).resolve().parent
PAGES = ["index.html", "research.html", "publications.html", "cv.html", "talks.html", "interests.html"]


def main() -> int:
    errors = []
    for page in PAGES:
        path = ROOT / page
        if not path.is_file():
            errors.append(f"missing page: {page}")
            continue
        content = path.read_text(encoding="utf-8")
        if "<title>" not in content or "<main" not in content:
            errors.append(f"incomplete HTML shell: {page}")
        for attribute, value in re.findall(r"(href|src)=\"([^\"]+)\"", content):
            parsed = urlsplit(value)
            if parsed.scheme or value.startswith("//") or value.startswith("#"):
                continue
            target = ROOT / unquote(parsed.path)
            if not target.is_file():
                errors.append(f"{page}: missing local {attribute}: {value}")

    publication_source = (ROOT / "publications.js").read_text(encoding="utf-8")
    publication_count = len(re.findall(r"\{ id: ", publication_source))
    if publication_count != 14:
        errors.append(f"expected 14 publication records, found {publication_count}")
    for required in ("style.css", "site.js", "publications.js", "SITE_SPEC.md"):
        if not (ROOT / required).is_file():
            errors.append(f"missing required file: {required}")

    if errors:
        print("FAIL")
        print("\n".join(f"- {error}" for error in errors))
        return 1
    print(f"PASS: {len(PAGES)} pages, {publication_count} publication records")
    return 0


if __name__ == "__main__":
    sys.exit(main())
