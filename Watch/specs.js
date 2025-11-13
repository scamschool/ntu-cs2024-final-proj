// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Enhanced hover effects for spec rows
const specRows = document.querySelectorAll('.spec-row');

specRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
        
        // Highlight all values in the row
        const values = this.querySelectorAll('.spec-value');
        values.forEach((value, index) => {
            setTimeout(() => {
                value.style.transform = 'scale(1.02)';
            }, index * 50);
        });
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        
        const values = this.querySelectorAll('.spec-value');
        values.forEach(value => {
            value.style.transform = 'scale(1)';
        });
    });
});

// Add ripple effect to CTA buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Model card interactive effects
const modelCards = document.querySelectorAll('.model-card');

modelCards.forEach(card => {
    const colorDots = card.querySelectorAll('.color-dot');
    const modelImage = card.querySelector('.model-image');
    
    colorDots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remove active class from all dots in this card
            colorDots.forEach(d => d.classList.remove('active-color'));
            
            // Add active class to clicked dot
            this.classList.add('active-color');
            
            // Animate image change
            modelImage.style.transform = 'scale(0.9)';
            setTimeout(() => {
                modelImage.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

// Add active color styling
const colorStyle = document.createElement('style');
colorStyle.textContent = `
    .color-dot.active-color {
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(255, 105, 0, 0.2);
        transform: scale(1.2);
    }
`;
document.head.appendChild(colorStyle);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.specs-hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.5;
    }
});

// Feature icon hover sound effect (optional visual feedback)
const featureIcons = document.querySelectorAll('.feature-icon-item');

featureIcons.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.icon-circle');
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'pulse 0.5s ease';
        }, 10);
    });
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.15) rotate(10deg);
        }
        100% {
            transform: scale(1) rotate(0deg);
        }
    }
`;
document.head.appendChild(pulseStyle);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe spec categories
const specCategories = document.querySelectorAll('.spec-category');
specCategories.forEach((category, index) => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(category);
});

// Observe CTA cards
const ctaCards = document.querySelectorAll('.cta-card');
ctaCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});

// Compare button functionality (if you want to add a sticky compare button)
let selectedModels = [];

function createCompareButton() {
    const compareBtn = document.createElement('div');
    compareBtn.className = 'sticky-compare-btn';
    compareBtn.innerHTML = `
        <button class="compare-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                <path d="M8 6V4h8v2"/>
            </svg>
            <span>Compare Models</span>
        </button>
    `;
    
    const compareStyle = document.createElement('style');
    compareStyle.textContent = `
        .sticky-compare-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 999;
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.3s ease;
        }
        
        .sticky-compare-btn.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .compare-button {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--color-primary);
            color: white;
            border: none;
            padding: 16px 30px;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }
        
        .compare-button:hover {
            background: var(--color-accent);
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(255, 105, 0, 0.4);
        }
        
        .compare-button svg {
            stroke: white;
        }
    `;
    document.head.appendChild(compareStyle);
    document.body.appendChild(compareBtn);
    
    // Show button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            compareBtn.classList.add('visible');
        } else {
            compareBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to comparison section
    compareBtn.querySelector('.compare-button').addEventListener('click', () => {
        const comparisonSection = document.querySelector('.comparison-table-section');
        if (comparisonSection) {
            comparisonSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Initialize compare button
createCompareButton();

// Console log for debugging
console.log('Xiaomi Smart Band Specifications page loaded successfully!');
console.log(`Found ${specRows.length} specification rows`);
console.log(`Found ${modelCards.length} model cards`);