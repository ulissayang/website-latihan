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

//slider
let currentSlideID = 1;
let sliderElement = document.getElementById("slider");
let totalSlides = sliderElement.childElementCount;
let slideInterval;

function next() {
  currentSlideID++;
  if (currentSlideID > totalSlides) {
    currentSlideID = 1;
  }
  showSlide();
}

function prev() {
  currentSlideID--;
  if (currentSlideID < 1) {
    currentSlideID = totalSlides;
  }
  showSlide();
}

function showSlide() {
  slides = document.getElementById("slider").getElementsByTagName("li");
  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (currentSlideID === index + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
}

slideInterval = setInterval(next, 10000); // ganti slide setiap 5 detik

document.getElementById("nextBtn").addEventListener("click", function () {
  clearInterval(slideInterval);
  next();
  slideInterval = setInterval(next, 10000);
});

document.getElementById("prevBtn").addEventListener("click", function () {
  clearInterval(slideInterval);
  prev();
  slideInterval = setInterval(next, 10000);
});

// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");
// const images = document.querySelectorAll(".flex > div");

// let index = 0;
// let length = images.length;
// let visible = 3;

// const shiftImages = (direction) => {
//   if (direction === "left") {
//     if (index > 0) {
//       images[index - 1].classList.add("pr-3");
//       images[index + visible - 1].classList.remove("pr-3");
//       index--;
//     }
//   } else if (direction === "right") {
//     if (index < length - visible) {
//       images[index].classList.remove("pr-3");
//       images[index + visible].classList.add("pr-3");
//       index++;
//     }
//   }
// };

// prevBtn.addEventListener("click", () => {
//   shiftImages("left");
// });

// nextBtn.addEventListener("click", () => {
//   shiftImages("right");
// });
