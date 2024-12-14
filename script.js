document.addEventListener("DOMContentLoaded", () => {
  const exploreButton = document.getElementById("explore-button");
  const productMenu = document.querySelector('a[href="#products"]');
  const aboutMenu = document.querySelector('a[href="#about-me"]');
  const menuHiddenItems = document.querySelectorAll(".menu-hidden");

  // Initially hide menu items except "Home"
  menuHiddenItems.forEach(item => {
    item.style.display = "none";
  });

  // Show Products and About Me menu when clicking Explore Now
  exploreButton.addEventListener("click", () => {
    productMenu.style.display = "block";
    aboutMenu.style.display = "block";
    window.location.href = "#products";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const exploreButton = document.getElementById("explore-button");
  const productsMenu = document.getElementById("products-menu");
  const aboutMenu = document.getElementById("about-menu");
  const homeSection = document.getElementById("home");
  const productsSection = document.getElementById("products");

  // Initially hide Products and About Me menu items and sections
  productsMenu.style.display = "none";
  aboutMenu.style.display = "none";
  productsSection.classList.add("hidden");

  // Show products section and menu when "Explore Now" is clicked
  exploreButton.addEventListener("click", () => {
    homeSection.classList.remove("active");
    homeSection.classList.add("hidden");

    productsSection.classList.remove("hidden");
    productsSection.classList.add("active");

    productsMenu.style.display = "block";
    aboutMenu.style.display = "block";
  });
});