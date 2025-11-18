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
  const filterBtn = document.getElementById("filter-btn");
  const modal = document.getElementById("filters-modal");
  const searchBtn = document.getElementById("search-filters-btn");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");
  const form = document.getElementById("filters-form");

  // open modal
  filterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    overlay.classList.add("active");
  });

  // close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.classList.remove("active");
  });

  // validate filters before submitting
  searchBtn.addEventListener("click", (e) => {
    const checked = form.querySelectorAll("input[name='filter[]']:checked");

    if (checked.length === 0) {
      e.preventDefault();
      e.stopPropagation();

      const errorBox = document.querySelector(".filter-error");
      if (errorBox) errorBox.style.display = "block";
    }
  });
});