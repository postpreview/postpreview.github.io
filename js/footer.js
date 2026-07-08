// ============ FOOTER COMPONENT ============
class FooterComponent {
    constructor() {
        this.footerId = 'site-footer';
        this.init();
    }

    createFooterHTML() {
        const currentYear = new Date().getFullYear();
        
        return `
            <footer class="site-footer" role="contentinfo">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-brand">
                            <a href="/" class="footer-logo">
                                <span class="footer-logo-icon">&lt;/&gt;</span>
                                <span class="footer-logo-text">PostPreview</span>
                            </a>
                            <p class="footer-brand-desc">
                                Preview your social media posts across 8+ platforms before you publish. 
                                Free, fast, and developer-friendly.
                            </p>
                            <div class="footer-newsletter">
                                <p class="newsletter-text">Get updates on new platforms and features</p>
                                <form class="newsletter-form" id="newsletterForm">
                                    <input 
                                        type="email" 
                                        placeholder="your@email.com" 
                                        class="newsletter-input"
                                        aria-label="Email for newsletter"
                                        required
                                    >
                                    <button type="submit" class="newsletter-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        
                        <div class="footer-col">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#preview-apps">Preview Apps</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#how-it-works">How It Works</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#">Changelog</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-col">
                            <h4>Platforms</h4>
                            <ul>
                                <li><a href="#" data-platform="facebook">Facebook Preview</a></li>
                                <li><a href="#" data-platform="x">X / Twitter Preview</a></li>
                                <li><a href="#" data-platform="linkedin">LinkedIn Preview</a></li>
                                <li><a href="#" data-platform="instagram">Instagram Preview</a></li>
                                <li><a href="#" data-platform="tiktok">TikTok Preview</a></li>
                                <li><a href="#" data-platform="reddit">Reddit Preview</a></li>
                            </ul>
                        </div>    
                        
                        
                        <div class="footer-col">
                            <h4>Pages</h4>
                            <ul>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/terms">Terms of Service</a></li>
                                <li><a href="/cookies">Cookie Policy</a></li>                                
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <span>&copy; ${currentYear} PostPreview. Built with ❤️ for content creators.</span>
                        </div>
                        <div class="footer-social">
                            <a href="https://github.com/postpreview" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/postpreview" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/company/postpreview" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    init() {
        const footerContainer = document.getElementById(this.footerId);
        
        if (footerContainer) {
            footerContainer.innerHTML = this.createFooterHTML();
            this.bindEvents();
        }
    }

    bindEvents() {
        // Newsletter form submission
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                const email = emailInput?.value;
                
                if (email) {
                    this.handleNewsletterSubmit(email);
                    emailInput.value = '';
                }
            });
        }

        // Platform links tracking
        const platformLinks = document.querySelectorAll('[data-platform]');
        platformLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = link.getAttribute('data-platform');
                this.handlePlatformClick(platform);
            });
        });
    }

    handleNewsletterSubmit(email) {
        // Placeholder for newsletter API integration
        console.log(`[Footer] Newsletter subscription: ${email}`);
        
        // Show success feedback
        const form = document.getElementById('newsletterForm');
        if (form) {
            const originalHTML = form.innerHTML;
            form.innerHTML = '<p style="color: #1a7f37; font-weight: 500;">✓ Subscribed successfully!</p>';
            
            setTimeout(() => {
                form.innerHTML = originalHTML;
                this.bindEvents();
            }, 3000);
        }
    }

    handlePlatformClick(platform) {
        // Navigate or trigger platform preview
        console.log(`[Footer] Platform selected: ${platform}`);
        // Could trigger a custom event or navigate to the preview section
        window.dispatchEvent(new CustomEvent('platformSelected', { 
            detail: { platform } 
        }));
    }

    // Method to update footer dynamically
    updateFooterContent(content) {
        const footerContainer = document.getElementById(this.footerId);
        if (footerContainer && content) {
            footerContainer.innerHTML = content;
            this.bindEvents();
        }
    }
}

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', () => {
    window.footerComponent = new FooterComponent();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FooterComponent;
}
