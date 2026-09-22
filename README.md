# Yao-Qi Zhang · Academic Website

Static GitHub Pages site for Yao-Qi Zhang. It contains a formal academic profile, research themes, the publication list, a compact CV, and a separate interests page for whisky, Quenya, and theater. The first release is English-only, with 张耀奇 shown alongside the English name on the home page.

## Local preview

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Checks

```bash
python3 -m py_compile check_site.py
python3 check_site.py
```

## GitHub Pages

The public repository is [Yao-QiZhang/yao-qizhang.github.io](https://github.com/Yao-QiZhang/yao-qizhang.github.io), and the site is published at <https://yao-qizhang.github.io/>. GitHub Pages serves the `main` branch from `/(root)`. The `.nojekyll` file keeps this dependency-free static site unchanged when served by GitHub Pages.

## Updating publications

Edit `publications.js`. Each record includes the title, authors, year, venue or preprint status, and INSPIRE-HEP / arXiv / DOI links. Re-run `python3 check_site.py` after changes.

## Provenance

The current publication and profile metadata were checked against INSPIRE-HEP author record [1981598](https://inspirehep.net/authors/1981598?ui-citation-summary=true) on 26 August 2026. Education, presentation, and awards were taken from the supplied `my_CV 2/paciorek-cv.tex`. The original CV files are not modified by the website.
