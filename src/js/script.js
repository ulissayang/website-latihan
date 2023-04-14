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

// sub menu program study ketika di hovver
const dropdownToggle = document.querySelector("#dropdown-toggle");
const dropdownMenu = document.querySelector("#dropdown-menu");
const dropdownContent = document.querySelector("#dropdown-content");

dropdownToggle.addEventListener("mouseenter", () => {
  if (window.innerWidth >= 768) {
    dropdownMenu.style.display = "block";
  }
});

dropdownContent.addEventListener("mouseleave", () => {
  if (window.innerWidth >= 768) {
    dropdownMenu.style.display = "none";
  }
});

// toggle mode dark and white
// const checkbox = document.querySelector("#toggle");
// const html = document.querySelector("html");

// checkbox.addEventListener("click", function () {
//   checkbox.click ? html.classList.add("dark") : html.classList.remove("dark");
//   if (checkbox.click) {
//     localStorage.theme = "dark";
//   } else {
//     localStorage.theme = "light";
//   }
// });

// // pindahkan posisi toggle sesuia mode
// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   checkbox.checked = true;
// } else {
//   checkbox.checked = false;
// }

const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
const darkIcon = document.querySelector("#toggle svg:first-child");
const lightIcon = document.querySelector("#toggle svg:last-child");

checkbox.addEventListener("click", function () {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
    localStorage.theme = "dark";
  }
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
  darkIcon.classList.add("hidden");
  lightIcon.classList.remove("hidden");
  checkbox.checked = true;
} else {
  html.classList.remove("dark");
  darkIcon.classList.remove("hidden");
  lightIcon.classList.add("hidden");
  checkbox.checked = false;
}
