const video = document.getElementById("heroVideo");
const heroContent = document.getElementById("heroContent");
const videoOverlay = document.getElementById("videoOverlay");

// Play video once when page loads
video.play();

// When video ends, trigger the overlay and fade-in animation
video.addEventListener("ended", function () {
  // Fade in overlay
  videoOverlay.style.opacity = "1";

  // Fade in hero content
  heroContent.style.animationDelay = "0s";
  heroContent.style.animation = "fadeIn 1s ease-in forwards";
});

// Add ripple effect on click
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

// Add CSS animation for ripple
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

let currentExpanded = null;

document.querySelectorAll(".feature-card").forEach((card) => {
  const expandBtn = card.querySelector(".expand-btn");

  expandBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (currentExpanded === card) {
      // Collapse current card
      card.classList.remove("expanded");
      expandBtn.classList.remove("active");
      currentExpanded = null;
    } else {
      // Collapse previous card if exists
      if (currentExpanded) {
        currentExpanded.classList.remove("expanded");
        currentExpanded.querySelector(".expand-btn").classList.remove("active");
      }

      // Expand new card
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

// Navigation buttons
const cards = document.querySelectorAll(".feature-card");
let currentIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  cards[currentIndex].querySelector(".expand-btn").click();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].querySelector(".expand-btn").click();
});

// Close expanded card when clicking outside
document.addEventListener("click", (e) => {
  if (currentExpanded && !currentExpanded.contains(e.target)) {
    currentExpanded.classList.remove("expanded");
    currentExpanded.querySelector(".expand-btn").classList.remove("active");
    currentExpanded = null;
  }
});

// Parallax effect on scroll
window.addEventListener("scroll", () => {
  const items = document.querySelectorAll(".big-image");
  const scrolled = window.pageYOffset;

  items.forEach((item, index) => {
    const speed = ((index % 3) + 1) * 0.0095;
    const yPos = -(scrolled * speed);
    item.style.transform = `translateY(${yPos}px)`;
  });
});

// Add hover interaction
document.querySelectorAll(".lifestyle-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.zIndex = "100";
  });

  item.addEventListener("mouseleave", function () {
    this.style.zIndex = "1";
  });
});
