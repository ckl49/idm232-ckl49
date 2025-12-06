document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const overlayMenu = document.querySelector(".overlay-nav-menu");
  const closeButton = document.getElementById("mobile-close-btn");

  const main = document.querySelector("main");
  const main_recipes = document.querySelector(".center-content");

  if (!hamburger || !overlayMenu || !closeButton) return;

  // Always open overlay on hamburger click
  hamburger.addEventListener("click", () => {
    overlayMenu.style.top = "0";
    main?.classList.add("overlay-active");
    main_recipes?.classList.add("overlay-active");
  });

  // Always close overlay
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    overlayMenu.style.top = "-100%";
    main?.classList.remove("overlay-active");
    main_recipes?.classList.remove("overlay-active");
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



// when page is loaded, grab all filters related components
document.addEventListener("DOMContentLoaded", () => {
  const filterBtn = document.getElementById("filter-btn");
  
  if (filterBtn) {
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
  }
});
