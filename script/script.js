document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".menu-btn");
  const overlayMenu = document.querySelector(".overlay-nav-menu");
  const closeButton = document.querySelector(".overlay-nav-menu .return label");
  const main = document.querySelector("ninety-percent-wrapper");

  // Show overlay
  hamburger.addEventListener("click", () => {
    overlayMenu.style.top = "0";
    main.classList.add("overlay-active");
  });

  // Hide overlay
  closeButton.addEventListener("click", () => {
    overlayMenu.style.top = "-100%";
    main.classList.remove("overlay-active");
  });
});


// solve that when mobile nav is open, everything else disappears

// const toggleCheckbox = document.getElementById("toggle-checkbox");
// const main = document.querySelector("main");

// toggleCheckbox.addEventListener("change", () => {
//   if (toggleCheckbox.checked) {
//     main.classList.add("overlay-open");
//   } else {
//     main.classList.remove("overlay-open")
//   }

// })


// when page is loaded, grab all filters related components

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

    //if there is nothing selected, throw error and don't refresh
    if (checked.length === 0) {
      e.preventDefault();
      e.stopPropagation();

      const errorBox = document.querySelector(".filter-error");
      if (errorBox) errorBox.style.display = "block";
    }
  });
});


// when page is loaded, watch for when an element comes into view, and fades it in
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.2 });

  elements.forEach(item => observer.observe(item));
});