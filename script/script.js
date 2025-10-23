document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".menu-btn");
  const overlayMenu = document.querySelector(".overlay-nav-menu");
  const closeButton = document.querySelector(".overlay-nav-menu .return label");

  // Show overlay
  hamburger.addEventListener("click", () => {
    overlayMenu.style.top = "0";
  });

  // Hide overlay
  closeButton.addEventListener("click", () => {
    overlayMenu.style.top = "-100%";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const filter_btn = document.querySelector("#filter-btn");
  const overlayFilters = document.querySelector(".filters-modal");
  const closeButton = document.querySelector("#search-filters-btn");

  // Show overlay
  hamburger.addEventListener("click", () => {
    overlayFilters.style.display = "flex";
  });

  // Hide overlay
  closeButton.addEventListener("click", () => {
    overlayFilters.style.display = "none";
  });
});