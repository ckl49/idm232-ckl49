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