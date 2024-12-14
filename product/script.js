document.addEventListener("DOMContentLoaded", () => {
    const loadingSection = document.getElementById("loading");
    const productGrid = document.querySelector(".product-grid");
    const footer = document.querySelector("footer");
    
    // Make footer stick to bottom during loading
    footer.classList.add("fixed");
    
    // Simulate loading process
    setTimeout(() => {
      loadingSection.style.display = "none"; // Hide loading section
      productGrid.classList.remove("hidden"); // Show product grid
      footer.classList.remove("fixed"); // Remove fixed positioning after loading
    }, 3000); // 3 seconds loading time
  });  