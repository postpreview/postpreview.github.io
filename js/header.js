// ============ HEADER COMPONENT ============
class HeaderComponent {
    constructor() {
        this.headerId = 'site-header';
        this.mobileNavId = 'mobileNav';
        this.overlayId = 'mobileNavOverlay';
        this.isMenuOpen = false;
        this.lastScroll = 0;
        this.init();
    }

    createHeaderHTML() {
        return `
            <header class="site-header" id="siteHeader" role="banner">
                <div class="header-inner">
                    <a href="/" class="header-logo" aria-label="PostPreview Home">
                        <span class="header-logo-icon">&lt;/&gt;</span>
                        <span>PostPreview</span>
                    </a>
                    <nav aria-label="Main navigation">
                        <ul class="header-nav" id="headerNav">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#preview-apps">Preview Apps</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#preview-apps" class="header-cta">Start Previewing</a></li>
                        </ul>
                    </nav>
                    <button class="hamburger" id="hamburgerBtn" aria-label="Toggle navigation menu" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        `;
    }

    createMobileNavHTML() {
        return `
            <a href="#features">Features</a>
            <a href="#preview-apps">Preview Apps</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#faq">FAQ</a>
            <a href="#preview-apps" class="mobile-cta">Start Previewing</a>
        `;
    }

    init() {
        // Insert header and mobile nav into DOM
        const headerContainer = document.getElementById(this.headerId);
        const mobileNavContainer = document.getElementById(this.mobileNavId);
        
        if (headerContainer) {
            headerContainer.innerHTML = this.createHeaderHTML();
        }
        
        if (mobileNavContainer) {
            mobileNavContainer.innerHTML = this.createMobileNavHTML();
        }

        // Initialize DOM references
        this.siteHeader = document.getElementById('siteHeader');
        this.hamburgerBtn = document.getElementById('hamburgerBtn');
        this.mobileNav = document.getElementById(this.mobileNavId);
        this.mobileNavOverlay = document.getElementById(this.overlayId);

        // Bind event listeners
        this.bindEvents();
        
        // Set initial scroll state
        if (window.pageYOffset > 50) {
            this.siteHeader?.classList.add('scrolled');
        }
    }

    bindEvents() {
        // Scroll event
        window.addEventListener('scroll', () => {
            this.handleScroll();
        }, { passive: true });

        // Hamburger click
        this.hamburgerBtn?.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Overlay click
        this.mobileNavOverlay?.addEventListener('click', () => {
            this.closeMobileMenu();
        });

        // Mobile nav links click
        const mobileNavLinks = this.mobileNav?.querySelectorAll('a');
        mobileNavLinks?.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Header nav links click (also close mobile menu)
        const headerNavLinks = document.querySelectorAll('#headerNav a');
        headerNavLinks?.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Resize handler - close mobile menu on desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            this.siteHeader?.classList.add('scrolled');
        } else {
            this.siteHeader?.classList.remove('scrolled');
        }
        
        this.lastScroll = currentScroll;
    }

    toggleMobileMenu() {
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        this.isMenuOpen = true;
        this.hamburgerBtn?.classList.add('active');
        this.mobileNav?.classList.add('active');
        this.mobileNavOverlay?.classList.add('active');
        this.hamburgerBtn?.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        this.hamburgerBtn?.classList.remove('active');
        this.mobileNav?.classList.remove('active');
        this.mobileNavOverlay?.classList.remove('active');
        this.hamburgerBtn?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    // Method to update header dynamically
    updateHeaderStyle(style) {
        if (this.siteHeader) {
            Object.assign(this.siteHeader.style, style);
        }
    }

    // Method to update navigation items
    updateNavItems(items) {
        const headerNav = document.getElementById('headerNav');
        if (headerNav && items) {
            headerNav.innerHTML = items.map(item => 
                `<li><a href="${item.href}" class="${item.class || ''}">${item.text}</a></li>`
            ).join('');
            
            // Rebind events for new links
            this.bindEvents();
        }
    }
}

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', () => {
    window.headerComponent = new HeaderComponent();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeaderComponent;
}
