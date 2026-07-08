// ============ MAIN SITE FUNCTIONALITY ============
// This file contains core site-wide functionality
// Header, Footer, and Preview Apps are handled by their respective component files

const PostPreview = {
    // ============ SCROLL ANIMATIONS ============
    initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));

        // Also observe stat numbers for counting animation
        const statNumbers = document.querySelectorAll('.stat-number');
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'none';
                    entry.target.offsetHeight; // Trigger reflow
                    entry.target.style.animation = '';
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => statObserver.observe(el));
    },

    // ============ FAQ ACCORDION ============
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const questionBtn = item.querySelector('.faq-question');
            
            if (!questionBtn) return;
            
            questionBtn.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                
                // Close all FAQ items
                faqItems.forEach(i => {
                    i.classList.remove('open');
                    const btn = i.querySelector('.faq-question');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                });
                
                // Open clicked item (if it wasn't already open)
                if (!isOpen) {
                    item.classList.add('open');
                    questionBtn.setAttribute('aria-expanded', 'true');
                }
            });
            
            // Add keyboard support
            questionBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    questionBtn.click();
                }
            });
        });
    },

    // ============ SMOOTH SCROLL FOR ALL ANCHOR LINKS ============
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                // Skip if it's just "#" or empty
                if (!targetId || targetId === '#') return;
                
                const target = document.querySelector(targetId);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // ============ BACK TO TOP BUTTON ============
    initBackToTop() {
        // Create back to top button
        const backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        backToTopBtn.style.cssText = `
            position: fixed;
            bottom: 24px;
            left: 24px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: var(--accent-blue);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 700;
            box-shadow: 0 4px 12px rgba(9, 105, 218, 0.3);
            z-index: 998;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(backToTopBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        }, { passive: true });
        
        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effect
        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.transform = 'translateY(-3px)';
            backToTopBtn.style.boxShadow = '0 8px 24px rgba(9, 105, 218, 0.4)';
        });
        
        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.transform = 'translateY(0)';
            backToTopBtn.style.boxShadow = '0 4px 12px rgba(9, 105, 218, 0.3)';
        });
    },

    // ============ KEYBOARD NAVIGATION ENHANCEMENTS ============
    initKeyboardNav() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link sr-only';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -100%;
            left: 0;
            background: var(--accent-blue);
            color: white;
            padding: 12px 24px;
            z-index: 9999;
            font-weight: 600;
            text-decoration: none;
            border-radius: 0 0 var(--radius-md) var(--radius-md);
            transition: top 0.3s ease;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-100%';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    },

    // ============ PERFORMANCE OBSERVER ============
    initPerformanceObserver() {
        // Lazy load images if any
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    },

    // ============ ERROR HANDLING ============
    handleError(error, context = '') {
        console.error(`[PostPreview Error] ${context}:`, error);
        
        // In production, you might want to send this to an error tracking service
        // if (window.errorTracker) {
        //     window.errorTracker.captureException(error, { context });
        // }
    },

    // ============ COMPONENT HEALTH CHECK ============
    checkComponents() {
        const components = {
            header: window.headerComponent,
            footer: window.footerComponent,
            previewApps: window.previewAppsComponent
        };
        
        Object.entries(components).forEach(([name, component]) => {
            if (component) {
                console.log(`%c[PostPreview] ${name} component loaded successfully`, 'color: #1a7f37;');
            } else {
                console.warn(`%c[PostPreview] ${name} component not found. Make sure ${name}.js is loaded.`, 'color: #bf8700;');
            }
        });
        
        return components;
    },

    // ============ GLOBAL EVENT LISTENERS ============
    initGlobalListeners() {
        // Listen for platform selection events from preview apps
        window.addEventListener('previewAppSelected', (event) => {
            const { platform, name, color } = event.detail;
            console.log(`[PostPreview] Platform selected: ${name} (${platform})`);
            
            // You could trigger analytics, modals, or navigation here
            // Example: Google Analytics event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'platform_selected', {
                    'platform': platform,
                    'platform_name': name
                });
            }
        });
        
        // Handle window resize for responsive adjustments
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                console.log('[PostPreview] Window resized');
                // Add any resize-specific logic here
            }, 250);
        });
        
        // Handle online/offline status
        window.addEventListener('online', () => {
            console.log('[PostPreview] Back online');
        });
        
        window.addEventListener('offline', () => {
            console.log('[PostPreview] Went offline');
        });
    },

    // ============ INITIALIZATION ============
    init() {
        try {
            console.log(
                '%c🚀 PostPreview %c v2.0 %cInitializing...',
                'font-weight:bold;color:#0969da;',
                'color:#656d76;',
                'color:#1a7f37;font-weight:bold;'
            );
            
            // Initialize core features
            this.initScrollAnimations();
            this.initFAQ();
            this.initSmoothScroll();
            this.initBackToTop();
            this.initKeyboardNav();
            this.initPerformanceObserver();
            this.initGlobalListeners();
            
            // Check component health
            const components = this.checkComponents();
            
            // Set initial header state
            const siteHeader = document.getElementById('siteHeader');
            if (siteHeader && window.pageYOffset > 50) {
                siteHeader.classList.add('scrolled');
            }
            
            // Add loaded class to body for CSS transitions
            document.body.classList.add('loaded');
            
            console.log(
                '%c✅ PostPreview %c v2.0 %cReady',
                'font-weight:bold;color:#0969da;',
                'color:#656d76;',
                'color:#1a7f37;font-weight:bold;'
            );
            console.log('%cPreview your posts before they go live.', 'color:#8b949e;font-style:italic;');
            
        } catch (error) {
            this.handleError(error, 'Initialization');
        }
    }
};

// ============ START THE APPLICATION ============
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        PostPreview.init();
    });
} else {
    // DOM already loaded
    PostPreview.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PostPreview;
}
