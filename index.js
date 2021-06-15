/* Mobile Nav function */

function showMenu() {
  var menu = document.getElementById("links");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("shown");
  } else {
    menu.classList.remove("shown");
    menu.classList.add("hidden");
  }
}

var burger = document.getElementById("hamburger");

burger.addEventListener("click", showMenu);

/* function to fade in sections */

let sections = document.querySelectorAll(".content__container");
window.onscroll = function fadeIn() {
  sections.forEach((section) => {
    let sectionSize = section.getBoundingClientRect();
    let bottomPart = sectionSize.bottom;
    if (window.scrollY > bottomPart - 500) {
      section.style.opacity = "1";
      section.style.transform = "translateX(0)";
      section.style.transition = "600ms ease-in-out";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateX(-40px)";
      section.style.transition = "600ms ease-in-out";
    }
  });
};
