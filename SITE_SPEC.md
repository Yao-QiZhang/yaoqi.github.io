# Yao-Qi Zhang Academic Website

## Objective

静态、简洁、正式的个人学术网站，部署目标为 GitHub Pages。网站突出研究方向、论文、履历和学术链接，同时保留一个独立的兴趣页，暂含 whisky、Quenya、theater。

## Verified content boundary

- Source profile: INSPIRE-HEP author record 1981598.
- Name: Yao-Qi Zhang / 张耀奇.
- Current position: Postdoc, University of Hertfordshire, 2026–2028.
- Previous education: Institute of Theoretical Physics, Chinese Academy of Sciences, 2020–2025; Beijing Normal University, 2016–2020.
- ORCID: 0000-0001-9211-1952.
- Publications: 14 records returned by the author query on 2026-08-26.
- Additional CV facts: Song He as PhD advisor, one 2022 presentation, and 2021/2022 Shu-Guang Awards of ITP-CAS.

Unconfirmed items remain omitted rather than invented. The original `my_CV 2` files are preserved unchanged.

## Tech stack and commands

- Plain HTML, CSS, and JavaScript; no runtime framework or external dependency.
- Preview: `python3 -m http.server 8000`
- Check: `python3 check_site.py`
- Python syntax check: `python3 -m py_compile check_site.py`

## Pages

- `index.html`: short profile and selected work.
- `research.html`: research themes.
- `publications.html`: all 14 publication records.
- `cv.html`: verified education, position, presentation, and awards.
- `interests.html`: whisky, Quenya, and theater.

## Boundaries

- Always preserve INSPIRE-HEP / CV provenance, distinguish published papers from preprints, and keep the site deployable as static files.
- Ask first before publishing, adding a portrait, exposing new personal information, or adding a framework or dependency.
- Never invent biography, awards, talks, or research claims.

## Confirmed release decisions

- First release: English-only.
- Home page: show both `Yao-Qi Zhang` and `张耀奇`.
- Public email: `y.zhang59@herts.ac.uk`.
- Current institutional affiliation: University of Hertfordshire.
- No portrait in the first release.
- The three interests begin with text-only introductory copy; images can be added later.
- Target GitHub account: `Phatom`; likely personal-site repository: `Phatom.github.io`.
- Publish publicly after local review.

## Future inputs

- Add a finalized downloadable CV PDF when available.
- Add personal prose or images for the three interests when supplied.
