// ============================================
// LOOKBOOK JAVASCRIPT - Enhanced Interactions
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // HERO VIDEO MANAGEMENT
  // ============================================
  const heroVideo = document.querySelector('.hero-video');
  
  if (heroVideo) {
    // Force video to load and play immediately
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.autoplay = true;
    
    // Multiple attempts to play the video
    const playVideo = () => {
      const playPromise = heroVideo.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully');
          })
          .catch(error => {
            console.log('Autoplay prevented, trying again:', error);
            // Try again after a short delay
            setTimeout(() => {
              heroVideo.play().catch(e => console.log('Retry failed:', e));
            }, 500);
          });
      }
    };
    
    // Try to play immediately
    playVideo();
    
    // Also try when video metadata is loaded
    heroVideo.addEventListener('loadedmetadata', playVideo);
    
    // And when the video can play through
    heroVideo.addEventListener('canplay', playVideo);
    
    // Pause video when not in viewport (performance optimization)
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroVideo.play().catch(e => console.log('Observer play failed:', e));
        } else {
          heroVideo.pause();
        }
      });
    }, { threshold: 0.25 });
    
    videoObserver.observe(heroVideo);
    
    // Handle user interaction to start video if autoplay fails
    document.addEventListener('click', function playOnInteraction() {
      heroVideo.play()
        .then(() => {
          // Remove listener once video plays
          document.removeEventListener('click', playOnInteraction);
        })
        .catch(e => console.log('Click play failed:', e));
    }, { once: true });
  }
  
  // ============================================
  // FILTER FUNCTIONALITY
  // ============================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lookbookItems = document.querySelectorAll('.lookbook-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter items with staggered animation
      lookbookItems.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          // Show item with delay
          setTimeout(() => {
            item.style.display = 'block';
            item.style.animation = 'none';
            // Force reflow
            item.offsetHeight;
            item.style.animation = `fadeInScale 0.5s ease forwards`;
          }, index * 50);
        } else {
          // Hide item
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // ============================================
  // LAZY LOADING IMAGES
  // ============================================
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('src');
        
        // Add loading class
        img.parentElement.classList.add('loading');
        
        // Create a new image to preload
        const tempImg = new Image();
        tempImg.onload = function() {
          img.src = src;
          img.parentElement.classList.remove('loading');
          img.parentElement.classList.add('loaded');
        };
        tempImg.src = src;
        
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  // Observe all lookbook images
  document.querySelectorAll('.lookbook-image').forEach(img => {
    imageObserver.observe(img);
  });
  
  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '-50px'
  });
  
  // Observe sections for scroll animations
  document.querySelectorAll('.lookbook-section, .cta-banner').forEach(section => {
    scrollObserver.observe(section);
  });
  
  // ============================================
  // ENHANCED HOVER EFFECTS WITH PARALLAX
  // ============================================
  lookbookItems.forEach(item => {
    const image = item.querySelector('.lookbook-image');
    
    item.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;
      
      // Apply subtle parallax effect
      const moveX = percentX * 10;
      const moveY = percentY * 10;
      
      image.style.transform = `scale(1.08) translate(${moveX}px, ${moveY}px)`;
    });
    
    item.addEventListener('mouseleave', function() {
      image.style.transform = 'scale(1)';
    });
  });
  
  // ============================================
  // SMOOTH SCROLL TO GALLERY
  // ============================================
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    // Add smooth scroll behavior when internal navigation
    ctaButton.addEventListener('click', function(e) {
      // Only prevent default if it's an anchor link
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  }
  
  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  document.addEventListener('keydown', function(e) {
    // Press 'Escape' to clear filter
    if (e.key === 'Escape') {
      const allButton = document.querySelector('.filter-btn[data-filter="all"]');
      if (allButton && !allButton.classList.contains('active')) {
        allButton.click();
      }
    }
  });
  
  // ============================================
  // PERFORMANCE OPTIMIZATION
  // ============================================
  
  // Debounce function for scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Optimize scroll performance
  let ticking = false;
  window.addEventListener('scroll', debounce(function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        // Add any scroll-based animations here
        ticking = false;
      });
      ticking = true;
    }
  }, 100));
  
  // ============================================
  // FORM VALIDATION (Newsletter)
  // ============================================
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('.email-input');
      const email = emailInput.value.trim();
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (emailRegex.test(email)) {
        // Show success message (you can customize this)
        emailInput.value = '';
        emailInput.placeholder = 'Thank you for subscribing!';
        
        // Reset placeholder after 3 seconds
        setTimeout(() => {
          emailInput.placeholder = 'Your E-mail Address...';
        }, 3000);
      } else {
        // Show error message
        emailInput.style.borderColor = 'red';
        emailInput.placeholder = 'Please enter a valid email';
        
        setTimeout(() => {
          emailInput.style.borderColor = '';
          emailInput.placeholder = 'Your E-mail Address...';
        }, 2000);
      }
    });
  }
  
  // ============================================
  // ANALYTICS TRACKING (Optional)
  // ============================================
  
  // Track filter usage
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      // Example: Send to analytics
      // gtag('event', 'filter_click', { filter_category: filterValue });
      console.log(`Filter clicked: ${filterValue}`);
    });
  });
  
  // Track lookbook item clicks
  lookbookItems.forEach(item => {
    item.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      const caption = this.querySelector('.lookbook-caption')?.textContent;
      // Example: Send to analytics
      // gtag('event', 'lookbook_click', { category: category, caption: caption });
      console.log(`Lookbook item clicked: ${caption} (${category})`);
    });
  });
  
  // ============================================
  // LOADING STATE
  // ============================================
  
  // Remove loading state once everything is loaded
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });
  
  // ============================================
  // ACCESSIBILITY ENHANCEMENTS
  // ============================================
  
  // Add focus management for filter buttons
  filterButtons.forEach((button, index) => {
    button.addEventListener('keydown', function(e) {
      let nextButton;
      
      switch(e.key) {
        case 'ArrowRight':
          e.preventDefault();
          nextButton = filterButtons[index + 1] || filterButtons[0];
          nextButton.focus();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          nextButton = filterButtons[index - 1] || filterButtons[filterButtons.length - 1];
          nextButton.focus();
          break;
        case 'Home':
          e.preventDefault();
          filterButtons[0].focus();
          break;
        case 'End':
          e.preventDefault();
          filterButtons[filterButtons.length - 1].focus();
          break;
      }
    });
  });
  
  // Announce filter changes to screen readers
  const filterContainer = document.querySelector('.filter-container');
  if (filterContainer) {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';
    filterContainer.appendChild(liveRegion);
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.textContent;
        const visibleCount = document.querySelectorAll('.lookbook-item[style*="display: block"], .lookbook-item:not([style*="display: none"])').length;
        liveRegion.textContent = `Showing ${visibleCount} items in ${filterValue} category`;
      });
    });
  }
  
  // ============================================
  // CONSOLE GREETING
  // ============================================
  console.log('%cXiaomi Smart Band 10 Lookbook', 'font-size: 20px; font-weight: bold; color: #ff6900;');
  console.log('%cExploring our lifestyle collection? We love curious minds! 🚀', 'font-size: 14px; color: #53565a;');
  
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Screen reader only text (add to CSS if not present)
const srOnlyStyles = document.createElement('style');
srOnlyStyles.textContent = `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
document.head.appendChild(srOnlyStyles);
