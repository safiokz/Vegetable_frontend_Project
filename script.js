const navbar = document.getElementById("mainNavbar");

  // Initially show navbar with slide-down
  navbar.classList.add("slide-down");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 400) {
      // Scroll 400px: make navbar fixed and slide-down if not already
      if (!navbar.classList.contains("fixed-top")) {
        navbar.classList.add("fixed-top", "slide-up"); // hide first
        // Allow browser to apply class, then show with animation
        setTimeout(() => {
          navbar.classList.remove("slide-up");
          navbar.classList.add("slide-down");
        }, 10);
      }
    } else {
      // Less than 400px: remove fixed and keep it normal
      navbar.classList.remove("fixed-top", "slide-down", "slide-up");
    }
  });