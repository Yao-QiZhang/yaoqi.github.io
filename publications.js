window.PUBLICATIONS = [
  { id: "de-sitter-wavefunction", year: 2026, title: "de Sitter Wavefunction from Quadrangular Polylogarithms: Chain Graphs", authors: "Ferro, Livia; Lukowski, Tomasz; Ren, Lecheng; Spradlin, Marcus; Volovich, Anastasia; Weng, He-Chen; Zhang, Yao-Qi", status: "Preprint", arxiv: "2605.06542", inspire: "https://inspirehep.net/literature/3152782" },
  { id: "generalised-cluster-adjacency", year: 2026, title: "Generalised Cluster Adjacency for Cosmology", authors: "Capuano, Mattia; Ferro, Livia; Lukowski, Tomasz; Palazio, Alessandro; Zhang, Yao-Qi", status: "Preprint", arxiv: "2603.09965", inspire: "https://inspirehep.net/literature/3128163" },
  { id: "loops-and-legs", year: 2026, title: "Loops and legs: ABJM amplitudes from f-graphs", authors: "He, Song; Zhang, Yao-Qi", status: "JHEP 05 (2026) 218", arxiv: "2601.21980", doi: "10.1007/JHEP05(2026)218", inspire: "https://inspirehep.net/literature/3113019" },
  { id: "hidden-permutation-symmetry", year: 2025, title: "Hidden Permutation Symmetry of Squared Amplitudes in Aharony-Bergman-Jafferis-Maldacena Theory", authors: "He, Song; Shi, Canxin; Tang, Yichao; Zhang, Yao-Qi", status: "Phys. Rev. Lett. 135 (2025) 211601", arxiv: "2508.03813", doi: "10.1103/zswh-bwc9", inspire: "https://inspirehep.net/literature/2957971" },
  { id: "conformal-integrals", year: 2025, title: "Notes on conformal integrals: Coulomb branch amplitudes, magic identities, and bootstrap", authors: "He, Song; Jiang, Xuhang; Liu, Jiahao; Zhang, Yao-Qi", status: "Phys. Rev. D 112 (2025) 076012", arxiv: "2502.08871", doi: "10.1103/gmp7-r9dz", inspire: "https://inspirehep.net/literature/2879707" },
  { id: "differential-equations", year: 2025, title: "Differential equations and recursive solutions for cosmological amplitudes", authors: "He, Song; Jiang, Xuhang; Liu, Jiahao; Yang, Qinglin; Zhang, Yao-Qi", status: "JHEP 01 (2025) 001", arxiv: "2407.17715", doi: "10.1007/JHEP01(2025)001", inspire: "https://inspirehep.net/literature/2811055" },
  { id: "cusp-limit", year: 2025, title: "The cusp limit of correlators and a new graphical bootstrap for correlators/amplitudes to eleven loops", authors: "He, Song; Shi, Canxin; Tang, Yichao; Zhang, Yao-Qi", status: "JHEP 03 (2025) 192", arxiv: "2410.09859", doi: "10.1007/JHEP03(2025)192", inspire: "https://inspirehep.net/literature/2839730" },
  { id: "from-squared-amplitudes", year: 2024, title: "From squared amplitudes to energy correlators", authors: "He, Song; Jiang, Xuhang; Yang, Qinglin; Zhang, Yao-Qi", status: "Preprint", arxiv: "2408.04222", inspire: "https://inspirehep.net/literature/2816361" },
  { id: "bcj-numerators", year: 2024, title: "One-loop Bern-Carrasco-Johansson numerators on quadratic propagators from the worldsheet", authors: "Dong, Jin; Zhang, Yao-Qi; Zhang, Yong", status: "Phys. Rev. D 109 (2024) L101905", arxiv: "2312.01580", doi: "10.1103/PhysRevD.109.L101905", inspire: "https://inspirehep.net/literature/2729911" },
  { id: "emergent-unitarity", year: 2023, title: "Emergent unitarity, all-loop cuts and integrations from the ABJM amplituhedron", authors: "He, Song; Kuo, Chia-Kai; Li, Zhenjie; Zhang, Yao-Qi", status: "JHEP 07 (2023) 212", arxiv: "2303.03035", doi: "10.1007/JHEP07(2023)212", inspire: "https://inspirehep.net/literature/2638680" },
  { id: "covariant-color-kinematics", year: 2023, title: "Covariant color-kinematics duality, Hopf algebras, and permutohedra", authors: "Cao, Qu; Dong, Jin; He, Song; Zhang, Yao-Qi", status: "Phys. Rev. D 107 (2023) 026022", arxiv: "2211.05404", doi: "10.1103/PhysRevD.107.026022", inspire: "https://inspirehep.net/literature/2180446" },
  { id: "quadratic-propagators", year: 2022, title: "One-loop diagrams with quadratic propagators from the worldsheet", authors: "Feng, Bo; He, Song; Zhang, Yong; Zhang, Yao-Qi", status: "JHEP 08 (2022) 240", arxiv: "2204.13659", doi: "10.1007/JHEP08(2022)240", inspire: "https://inspirehep.net/literature/2074233" },
  { id: "all-loop-four-point", year: 2022, title: "All-Loop Four-Point Aharony-Bergman-Jafferis-Maldacena Amplitudes from Dimensional Reduction of the Amplituhedron", authors: "He, Song; Kuo, Chia-Kai; Li, Zhenjie; Zhang, Yao-Qi", status: "Phys. Rev. Lett. 129 (2022) 221604", arxiv: "2204.08297", doi: "10.1103/PhysRevLett.129.221604", inspire: "https://inspirehep.net/literature/2514326" },
  { id: "momentum-amplituhedron", year: 2022, title: "The momentum amplituhedron of SYM and ABJM from twistor-string maps", authors: "He, Song; Kuo, Chia-Kai; Zhang, Yao-Qi", status: "JHEP 02 (2022) 148", arxiv: "2111.02576", doi: "10.1007/JHEP02(2022)148", inspire: "https://inspirehep.net/literature/1960307" }
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("#publication-list");
  if (!target) return;
  target.innerHTML = window.PUBLICATIONS.map((paper) => {
    const links = [
      `<a href="https://arxiv.org/abs/${paper.arxiv}">arXiv:${paper.arxiv}</a>`,
      paper.doi ? `<a href="https://doi.org/${paper.doi}">DOI</a>` : "",
      `<a href="${paper.inspire}">INSPIRE</a>`
    ].filter(Boolean).join("");
    return `<article class="publication" id="${paper.id}"><div class="publication-year">${paper.year}</div><div><h2>${paper.title}</h2><p class="publication-authors">${paper.authors}</p><p class="publication-meta"><span class="status">${paper.status}</span></p><div class="publication-links">${links}</div></div></article>`;
  }).join("");
});
