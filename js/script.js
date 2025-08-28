// ===========================
// Mobile Navigation Toggle
// ===========================
var body = document.querySelector("body");
const navbarMenu = document.querySelector("#navigation");
const hamburgerMenu = document.querySelector("#navigation .toggle");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  body.classList.toggle("open");
  ariaExpanded();
});

function ariaExpanded() {
  const url = document.querySelector("#expanded");
  const expanded = url.getAttribute("aria-expanded");
  url.setAttribute("aria-expanded", expanded === "false" ? "true" : "false");
}

// ===========================
// Dynamic Active Link Handling
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const homeLink = document.querySelector(
    '.nav-link[href="index.html"], .nav-link[href="#"]'
  );

  // Detect if we're on homepage or subpage
  const currentPath = window.location.pathname.split("/").pop();
  if (
    currentPath &&
    !currentPath.includes("index.html") &&
    currentPath !== ""
  ) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  } else {
    // Ensure Home is active at page load
    if (homeLink) homeLink.classList.add("active");

    // Scroll-based highlighting (homepage only)
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY + 150;
      let anyActive = false;

      navLinks.forEach((link) => {
        const sectionId = link.getAttribute("href");
        if (sectionId.startsWith("#")) {
          const section = document.querySelector(sectionId);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (
              scrollPos >= sectionTop &&
              scrollPos < sectionTop + sectionHeight
            ) {
              navLinks.forEach((l) => l.classList.remove("active"));
              link.classList.add("active");
              anyActive = true;
            }
          }
        }
      });

      // If no section matched, highlight Home link
      if (!anyActive && homeLink) {
        navLinks.forEach((l) => l.classList.remove("active"));
        homeLink.classList.add("active");
      }
    });
  }
});
