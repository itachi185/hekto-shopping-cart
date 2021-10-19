// Header navbar event handler
const headerNav = document.querySelector(".header-bottom__nav");
const overlay = document.querySelector(".overlay");
const btnNavBars = document.querySelector(".header-bottom__nav-bars");
const btnCloseNav = document.querySelector(".header-bottom__nav-close");

const openNav = () => {
  headerNav.classList.add("active");
  overlay.classList.remove("hidden");
};

const closeNav = () => {
  headerNav.classList.remove("active");
  overlay.classList.add("hidden");
};

btnNavBars.addEventListener("click", openNav);
btnCloseNav.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
