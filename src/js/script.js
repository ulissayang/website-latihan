// ketika di clik hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const home = document.querySelector("#home");

hamburger.addEventListener("click", function () {
  if (navMenu.classList.contains("hidden")) {
    // Munculkan menu
    navMenu.classList.remove("hidden");
    hamburger.classList.add("justify-between");
    hamburger.classList.remove("justify-end");
    home.classList.remove("hidden");
  } else {
    // Sembunyikan menu
    navMenu.classList.add("hidden");
    hamburger.classList.remove("justify-between");
    hamburger.classList.add("justify-end");
    home.classList.add("hidden");
  }
});
