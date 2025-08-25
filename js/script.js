// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const navbarMenu = document.querySelector("#navigation");
const hamburgerMenu = document.querySelector("#navigation .toggle");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navbarMenu.classList.toggle("active");
  CSbody.classList.toggle("open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}
