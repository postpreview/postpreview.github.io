// ============ PREVIEW APPS COMPONENT ============
class PreviewAppsComponent {
    constructor() {
        this.apps = [
            {
                id: 'facebook',
                name: 'Facebook',
                subtitle: 'Feed & Story Preview',
                icon: 'f',
                class: 'facebook',
                color: '#1877f2',
                category: 'social',
                isActive: true
            },
            {
                id: 'x',
                name: 'X',
                subtitle: 'formerly Twitter',
                icon: '𝕏',
                class: 'x',
                color: '#000000',
                category: 'social',
                isActive: true
            },
            {
                id: 'linkedin',
                name: 'LinkedIn',
                subtitle: 'Professional Feed',
                icon: 'in',
                class: 'linkedin',
                color: '#0a66c2',
                category: 'professional',
                isActive: true
            },
            {
                id: 'pinterest',
                name: 'Pinterest',
                subtitle: 'Pin Preview',
                icon: 'P',
                class: 'pinterest',
                color: '#e60023',
                category: 'visual',
                isActive: true
            },
            {
                id: 'threads',
                name: 'Threads',
                subtitle: 'Thread View',
                icon: '@',
                class: 'threads',
                color: '#000000',
                category: 'social',
                isActive: true
            },
            {
                id: 'instagram',
                name: 'Instagram',
                subtitle: 'Feed & Reels',
                icon: '📷',
                class: 'instagram',
                color: '#e4405f',
                category: 'visual',
                isActive: true,
                svgIcon: true
            },
            {
                id: 'reddit',
                name: 'Reddit',
                subtitle: 'Post & Comment',
                icon: '🤖',
                class: 'reddit',
                color: '#ff4500',
                category: 'community',
                isActive: true,
                svgIcon: true
            },
            {
                id: 'tiktok',
                name: 'TikTok',
                subtitle: 'Video Preview',
                icon: '🎵',
                class: 'tiktok',
                color: '#000000',
                category: 'video',
                isActive: true,
                svgIcon: true
            }
        ];

        this.containerId = 'preview-apps';
        this.onAppClick = null;
        this.init();
    }

    getInstagramSVG() {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/>
                <circle cx="17.5" cy="6.5" r="1.2"/>
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
        `;
    }

    getRedditSVG() {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
                <ellipse cx="9" cy="10" rx="1.5" ry="2" fill="currentColor"/>
                <ellipse cx="15" cy="10" rx="1.5" ry="2" fill="currentColor"/>
                <path d="M8 15c1.5 2 3.5 2.5 4 2.5s2.5-.5 4-2.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `;
    }

    getTikTokSVG() {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 6V4h-2v2h-1v2h1v6c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4v2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V6h4z" fill="currentColor"/>
            </svg>
        `;
    }

    createAppCard(app) {
        let iconHTML = '';
        
        if (app.id === 'instagram') {
            iconHTML = this.getInstagramSVG();
        } else if (app.id === 'reddit') {
            iconHTML = this.getRedditSVG();
        } else if (app.id === 'tiktok') {
            iconHTML = this.getTikTokSVG();
        } else {
            iconHTML = app.icon;
        }

        return `
            <a href="#" 
               class="app-card ${app.class}${!app.isActive ? ' disabled' : ''}" 
               data-platform="${app.id}"
               data-category="${app.category}"
               aria-label="Preview on ${app.name}"
               role="button">
                <div class="app-card-icon">${iconHTML}</div>
                <span class="app-card-name">${app.name}</span>
                <span class="app-card-subtitle">${app.subtitle}</span>
                <span class="app-card-badge">${app.isActive ? 'Preview' : 'Coming Soon'}</span>
            </a>
        `;
    }

    createSectionHTML() {
        return `
            <section class="preview-apps-section section" id="preview-apps" aria-labelledby="apps-title">
                <div class="container">
                    <div class="section-header animate-on-scroll">
                        <span class="section-label">// Preview Apps</span>
                        <h2 id="apps-title" class="section-title">Choose Your Platform</h2>
                        <p class="section-subtitle">
                            Select a social media platform to preview how your post will look. 
                            Full preview tools coming soon.
                        </p>
                    </div>
                    
                    <div class="apps-filter animate-on-scroll">
                        <button class="filter-btn active" data-filter="all">All Platforms</button>
                        <button class="filter-btn" data-filter="social">Social</button>
                        <button class="filter-btn" data-filter="professional">Professional</button>
                        <button class="filter-btn" data-filter="visual">Visual</button>
                        <button class="filter-btn" data-filter="community">Community</button>
                        <button class="filter-btn" data-filter="video">Video</button>
                    </div>
                    
                    <div class="apps-grid" id="appsGrid">
                        ${this.apps.map(app => this.createAppCard(app)).join('')}
                    </div>
                    
                    <div class="apps-footer animate-on-scroll">
                        <p class="apps-note">
                            💡 <strong>Coming soon:</strong> Full interactive preview with custom content, 
                            image upload, and multi-platform comparison.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }

    init() {
        const container = document.getElementById(this.containerId);
        
        if (container) {
            container.innerHTML = this.createSectionHTML();
            this.bindEvents();
            this.initScrollAnimations();
        }
    }

    bindEvents() {
        // App card clicks
        const appCards = document.querySelectorAll('.app-card');
        appCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const platformId = card.getAttribute('data-platform');
                const platformData = this.apps.find(app => app.id === platformId);
                
                if (platformData && platformData.isActive) {
                    this.handleAppClick(platformData, card);
                }
            });

            // Add keyboard support
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });

        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filterApps(filter, btn);
            });
        });
    }

    handleAppClick(appData, cardElement) {
        // Add click animation
        cardElement.style.transform = 'scale(0.95)';
        setTimeout(() => {
            cardElement.style.transform = '';
        }, 200);

        // Log analytics
        console.log(`[PreviewApps] Platform selected: ${appData.name} (${appData.id})`);

        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('previewAppSelected', {
            detail: {
                platform: appData.id,
                name: appData.name,
                color: appData.color,
                category: appData.category
            }
        }));

        // Call custom click handler if set
        if (typeof this.onAppClick === 'function') {
            this.onAppClick(appData);
        }

        // Default behavior: could open preview modal or navigate
        this.showPreviewPlaceholder(appData);
    }

    showPreviewPlaceholder(appData) {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.className = 'preview-notification';
        notification.innerHTML = `
            <span class="notification-icon">🚀</span>
            <span class="notification-text">
                ${appData.name} preview is coming soon! Stay tuned.
            </span>
        `;
        notification.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: white;
            border: 2px solid ${appData.color};
            border-radius: 12px;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
            z-index: 9999;
            animation: slideInRight 0.3s ease-out;
            font-family: 'Inter', sans-serif;
            max-width: 360px;
        `;

        // Add animation styles if not present
        if (!document.getElementById('notificationStyles')) {
            const style = document.createElement('style');
            style.id = 'notificationStyles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    filterApps(filter, activeBtn) {
        const appCards = document.querySelectorAll('.app-card');
        const filterBtns = document.querySelectorAll('.filter-btn');

        // Update active button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');

        // Filter cards
        appCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = '';
                card.style.animation = 'fadeInScale 0.3s ease-out';
            } else {
                card.style.display = 'none';
            }
        });

        // Add animation styles if not present
        if (!document.getElementById('filterAnimationStyles')) {
            const style = document.createElement('style');
            style.id = 'filterAnimationStyles';
            style.textContent = `
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }

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
    }

    // Public methods for external use
    setApps(apps) {
        this.apps = apps;
        this.init(); // Re-render
    }

    setOnAppClick(handler) {
        this.onAppClick = handler;
    }

    getAppData(platformId) {
        return this.apps.find(app => app.id === platformId);
    }

    activatePlatform(platformId) {
        const app = this.apps.find(app => app.id === platformId);
        if (app) {
            app.isActive = true;
            this.init(); // Re-render
        }
    }

    deactivatePlatform(platformId) {
        const app = this.apps.find(app => app.id === platformId);
        if (app) {
            app.isActive = false;
            this.init(); // Re-render
        }
    }
}

// Auto-initialize when script loads
document.addEventListener('DOMContentLoaded', () => {
    window.previewAppsComponent = new PreviewAppsComponent();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PreviewAppsComponent;
}
