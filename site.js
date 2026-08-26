document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === current || (current === "" && target === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });
  document.querySelectorAll(".footer-year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
});
