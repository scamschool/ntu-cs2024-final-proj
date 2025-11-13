document.addEventListener("DOMContentLoaded", function () {
  // --- 0. Element Selectors ---
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.querySelector(".menu-toggle");
  const navItems = document.querySelectorAll(".nav-item");

  const video = document.getElementById("heroVideo");
  const heroContent = document.getElementById("heroContent");
  const videoOverlay = document.getElementById("videoOverlay");

  // Feature Card elements
  const featureCards = document.querySelectorAll(".feature-card");
  const cards = featureCards; // Alias used by navigation buttons
  let currentExpanded = null;
  let currentIndex = 0; // For navigation buttons

  // --- 1. Mobile Menu Toggle (Primary Fix) ---
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      if (navLinks.classList.contains("open")) {
        menuToggle.innerHTML = "✕"; // Close icon
        document.body.style.overflow = "hidden"; // Lock background scrolling
      } else {
        menuToggle.innerHTML = "☰"; // Hamburger icon
        document.body.style.overflow = "";
      }
    });
  }

  // --- 2. Mobile Dropdown Toggle (Nested Menus) ---
  navItems.forEach((item) => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown");

    if (dropdown) {
      link.addEventListener("click", (e) => {
        // Only enable dropdown toggle on mobile/tablet view (<= 1024px)
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();

          const isExpanded = dropdown.classList.contains("active");

          // Collapse all other dropdowns
          navItems.forEach((otherItem) => {
            const otherDropdown = otherItem.querySelector(".dropdown");
            if (otherDropdown && otherDropdown !== dropdown) {
              otherDropdown.classList.remove("active");
            }
          });

          // Toggle the clicked dropdown
          if (!isExpanded) {
            dropdown.classList.add("active");
          } else {
            dropdown.classList.remove("active");
          }
        }
      });
    }
  });

  // --- 3. Hero Video and Content Fade (FIXED: Uses 'ended' event) ---
  if (video) {
    // Start video immediately
    video.play();

    // Listen specifically for when the video playback finishes
    video.addEventListener("ended", function () {
      console.log("Video ended. Fading in content.");
      if (videoOverlay) videoOverlay.style.opacity = "1";
      if (heroContent) {
        // Remove the initial opacity: 0 set in CSS and apply fade-in
        heroContent.style.opacity = "1";
        heroContent.style.animation = "fadeIn 1s ease-in forwards";
      }
    });

    // Add robust fallback: if the video is ready/already played (e.g., on reload),
    // trigger the fade-in instantly.
    if (video.readyState >= 3 || video.paused) {
      if (videoOverlay) videoOverlay.style.opacity = "1";
      if (heroContent) {
        heroContent.style.opacity = "1";
        heroContent.style.animation = "fadeIn 1s ease-in forwards";
      }
    }
  }

  // --- 4. Trust Bar Ripple Effect ---
  // Add CSS animation for ripple once
  if (!document.getElementById("ripple-style")) {
    const style = document.createElement("style");
    style.id = "ripple-style";
    style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }

  document.querySelectorAll(".trust-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      const ripple = document.createElement("div");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255, 255, 255, 0.6)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s ease-out";
      ripple.style.pointerEvents = "none";

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // --- 5. Feature Card Expansion (Consolidated User Logic) ---
  featureCards.forEach((card) => {
    const expandBtn = card.querySelector(".expand-btn");

    expandBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (currentExpanded === card) {
        card.classList.remove("expanded");
        expandBtn.classList.remove("active");
        currentExpanded = null;
      } else {
        if (currentExpanded) {
          currentExpanded.classList.remove("expanded");
          currentExpanded
            .querySelector(".expand-btn")
            .classList.remove("active");
        }

        card.classList.add("expanded");
        expandBtn.classList.add("active");
        currentExpanded = card;

        // Animate stat bars
        setTimeout(() => {
          card.querySelectorAll(".stat-bar-fill").forEach((bar) => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
          });
        }, 300);

        // Smooth scroll to card
        setTimeout(() => {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    });
  });

  // --- 6. Navigation buttons ---
  if (document.getElementById("prevBtn")) {
    document.getElementById("prevBtn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      cards[currentIndex].querySelector(".expand-btn").click();
    });
  }

  if (document.getElementById("nextBtn")) {
    document.getElementById("nextBtn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].querySelector(".expand-btn").click();
    });
  }

  // --- 7. Close expanded card when clicking outside ---
  document.addEventListener("click", (e) => {
    if (currentExpanded && !currentExpanded.contains(e.target)) {
      currentExpanded.classList.remove("expanded");
      currentExpanded.querySelector(".expand-btn").classList.remove("active");
      currentExpanded = null;
    }
  });

  // --- 8. Parallax effect on scroll (Gallery) ---
  window.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".big-image");
    const scrolled = window.pageYOffset;

    items.forEach((item, index) => {
      const speed = ((index % 3) + 1) * 0.0095;
      const yPos = -(scrolled * speed);
      item.style.transform = `translateY(${yPos}px)`;
    });
  });

  // --- 9. Hover Interaction (Gallery: image-group) ---
  document.querySelectorAll(".image-group").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.querySelector(".big-image").style.zIndex = "100";
    });

    item.addEventListener("mouseleave", function () {
      this.querySelector(".big-image").style.zIndex = "1";
    });
  });
});
