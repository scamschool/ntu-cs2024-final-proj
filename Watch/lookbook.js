<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lookbook - Xiaomi Smart Band 10</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="lookbook.css" />
</head>
<body>
  <!-- Announcement Bar -->
  <div class="announcement-bar">
    Free strap of your choice when you buy now
  </div>

  <!-- Navigation -->
  <div class="nav-container">
    <nav>
      <div class="logo">XIAOMI</div>

      <ul class="nav-links">
        <li class="nav-item">
          <a href="#" class="nav-link">
            Shop
            <span class="arrow">▼</span>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-link">All Watches</a>
            <a href="#" class="dropdown-link">Smart Watch Pro</a>
            <a href="#" class="dropdown-link">Smart Watch Lite</a>
            <a href="#" class="dropdown-link">Accessories</a>
            <a href="#" class="dropdown-link">Bands & Straps</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            Health Features
            <span class="arrow">▼</span>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-link">Heart Rate Monitor</a>
            <a href="#" class="dropdown-link">Sleep Tracking</a>
            <a href="#" class="dropdown-link">Fitness Tracking</a>
            <a href="#" class="dropdown-link">Blood Oxygen</a>
            <a href="#" class="dropdown-link">ECG</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">
            Experience
            <span class="arrow">▼</span>
          </a>
          <div class="dropdown">
            <a href="#" class="dropdown-link">App Ecosystem</a>
            <a href="#" class="dropdown-link">Watch Faces</a>
            <a href="#" class="dropdown-link">Notifications</a>
            <a href="#" class="dropdown-link">Voice Assistant</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">For Organizations</a>
        </li>

        <li class="nav-item">
          <svg
            class="cart-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-label="Shopping cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            ></path>
          </svg>
        </li>
      </ul>
    </nav>
  </div>

  <!-- Hero Section -->
  <section class="lookbook-hero">
    <div class="hero-content-wrapper">
      <span class="hero-badge">Lifestyle Collection</span>
      <h1 class="hero-title">Life in Motion</h1>
      <p class="hero-description">
        Discover how the Xiaomi Smart Band 10 seamlessly integrates into every moment of your day.
        From morning workouts to evening wind-downs, experience wellness technology designed to move with you.
      </p>
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">150+</div>
          <div class="stat-label">Sports Modes</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">21 Days</div>
          <div class="stat-label">Battery Life</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">5ATM</div>
          <div class="stat-label">Water Resistant</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Filter Tabs -->
  <section class="filter-section">
    <div class="filter-container">
      <button class="filter-btn active" data-filter="all">All Moments</button>
      <button class="filter-btn" data-filter="fitness">Fitness</button>
      <button class="filter-btn" data-filter="lifestyle">Lifestyle</button>
      <button class="filter-btn" data-filter="work">Work</button>
      <button class="filter-btn" data-filter="wellness">Wellness</button>
    </div>
  </section>

  <!-- Lookbook Gallery -->
  <section class="lookbook-section">
    <div class="lookbook-grid" id="lookbookGrid">
      
      <!-- Item 1 -->
      <article class="lookbook-item" data-category="fitness">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80" 
            alt="Person doing morning workout wearing Xiaomi Smart Band 10" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <path d="M18 8a6 6 0 0 0-9 0v7H5l-2 3h18l-2-3h-7V8z"></path>
              </svg>
              Fitness
            </span>
            <h3 class="lookbook-caption">Morning Motivation</h3>
            <p class="lookbook-description">Track every rep, every set, every victory</p>
          </div>
        </div>
      </article>

      <!-- Item 2 -->
      <article class="lookbook-item" data-category="fitness">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=1200&q=80" 
            alt="Runner training outdoors with smart band" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Active
            </span>
            <h3 class="lookbook-caption">Outdoor Adventures</h3>
            <p class="lookbook-description">GPS tracking for every journey</p>
          </div>
        </div>
      </article>

      <!-- Item 3 -->
      <article class="lookbook-item" data-category="work">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80" 
            alt="Professional wearing smart band at work" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Work
            </span>
            <h3 class="lookbook-caption">Professional Style</h3>
            <p class="lookbook-description">Seamless notifications at your fingertips</p>
          </div>
        </div>
      </article>

      <!-- Item 4 -->
      <article class="lookbook-item lookbook-item-large" data-category="fitness">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=80" 
            alt="Swimming with waterproof smart band" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <path d="M2 15c.6.5 1.2 1 2.5 1C7 16 7 14 9.5 14c2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 2.5 0 2.5 2 2.5 2"></path>
              </svg>
              Water Sports
            </span>
            <h3 class="lookbook-caption">5ATM Water Resistant</h3>
            <p class="lookbook-description">Dive in without hesitation</p>
          </div>
        </div>
      </article>

      <!-- Item 5 -->
      <article class="lookbook-item" data-category="lifestyle">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&q=80" 
            alt="Casual everyday lifestyle with smart band" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Lifestyle
            </span>
            <h3 class="lookbook-caption">Everyday Comfort</h3>
            <p class="lookbook-description">Style that matches your vibe</p>
          </div>
        </div>
      </article>

      <!-- Item 6 -->
      <article class="lookbook-item lookbook-item-wide" data-category="wellness">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1200&q=80" 
            alt="Yoga and meditation with wellness tracking" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              Wellness
            </span>
            <h3 class="lookbook-caption">Mindful Moments</h3>
            <p class="lookbook-description">Track stress and breathing patterns</p>
          </div>
        </div>
      </article>

      <!-- Item 7 -->
      <article class="lookbook-item" data-category="fitness">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" 
            alt="Gym training session with fitness tracker" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <path d="M2 9h2v6H2zM22 9h-2v6h2zM18 9h-2.5L12 6 8.5 9H6v6h2.5l3.5 3 3.5-3H18z"></path>
              </svg>
              Training
            </span>
            <h3 class="lookbook-caption">Gym Performance</h3>
            <p class="lookbook-description">Real-time heart rate monitoring</p>
          </div>
        </div>
      </article>

      <!-- Item 8 -->
      <article class="lookbook-item" data-category="lifestyle">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80" 
            alt="Evening fashion with smart band" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              </svg>
              Fashion
            </span>
            <h3 class="lookbook-caption">Evening Elegance</h3>
            <p class="lookbook-description">Sophisticated design for any occasion</p>
          </div>
        </div>
      </article>

      <!-- Item 9 -->
      <article class="lookbook-item lookbook-item-tall" data-category="wellness">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1540206395-68808572332f?w=1200&q=80" 
            alt="Sleep tracking and night monitoring" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              Sleep
            </span>
            <h3 class="lookbook-caption">Sleep Insights</h3>
            <p class="lookbook-description">Advanced sleep stage analysis</p>
          </div>
        </div>
      </article>

      <!-- Item 10 -->
      <article class="lookbook-item" data-category="work">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" 
            alt="Business professional wearing smart band" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              </svg>
              Professional
            </span>
            <h3 class="lookbook-caption">Business Ready</h3>
            <p class="lookbook-description">Discreet alerts keep you connected</p>
          </div>
        </div>
      </article>

      <!-- Item 11 -->
      <article class="lookbook-item lookbook-item-featured" data-category="lifestyle">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&q=80" 
            alt="Weekend adventure and exploration" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              </svg>
              Adventure
            </span>
            <h3 class="lookbook-caption">Weekend Explorer</h3>
            <p class="lookbook-description">Built for life's adventures</p>
          </div>
        </div>
      </article>

      <!-- Item 12 -->
      <article class="lookbook-item" data-category="fitness">
        <div class="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&q=80" 
            alt="Cycling and outdoor sports" 
            class="lookbook-image"
            loading="lazy"
          />
        </div>
        <div class="lookbook-overlay">
          <div class="overlay-content">
            <span class="lookbook-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
                <circle cx="18.5" cy="17.5" r="3.5"></circle>
                <circle cx="5.5" cy="17.5" r="3.5"></circle>
              </svg>
              Cycling
            </span>
            <h3 class="lookbook-caption">On the Move</h3>
            <p class="lookbook-description">Route tracking and performance metrics</p>
          </div>
        </div>
      </article>

    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-banner">
    <div class="cta-content">
      <h2>Ready to Start Your Journey?</h2>
      <p>Explore our full collection of bands and accessories to personalize your experience</p>
      <a href="accessory.html" class="cta-button">
        <span>Explore The Collection</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footercontainer">
      <div class="footercol">
        <h1>SUPPORT</h1>
        <ul>
          <li><a href="#">User Guide</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="warranty.html">Warranty</a></li>
          <li><a href="#">Store Locator</a></li>
          <li><a href="#">Service Center</a></li>
        </ul>
      </div>
      <div class="footercol">
        <h1>About Us</h1>
        <ul>
          <li><a href="#">Xiaomi</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Leadership Team</a></li>
          <li><a href="#">Trust Center</a></li>
        </ul>
      </div>
      <div class="footercol">
        <h1>Follow Us</h1>
        <ul id="menu">
          <li>
            <a href="#" aria-label="Instagram">
              <img class="footer-img" src="Images/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn">
              <img class="footer-img" src="Images/linkedin.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Facebook">
              <img class="footer-img" src="Images/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="WhatsApp">
              <img class="footer-img" src="Images/whatsapp.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footercol">
        <h1>Download Our App</h1>
        <ul id="menu">
          <li>
            <a href="#">
              <img class="footer-code" src="Images/QRcode.webp" alt="Download app QR code" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footercol">
        <h1>Stay Updated</h1>
        <p class="footer-text">Subscribe to our newsletter</p>
        <form class="subscribe-form" aria-label="Newsletter subscription">
          <input
            type="email"
            placeholder="Your E-mail Address..."
            class="email-input"
            aria-label="Email address"
            required
          />
          <button type="submit" class="submit-button" aria-label="Subscribe to newsletter">
            &gt;
          </button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Copyright &copy; 2010 - 2025 Xiaomi. All Rights Reserved</p>
    </div>
  </footer>

  <script src="lookbook.js"></script>
</body>
</html>