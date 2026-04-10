// header.js
const headerHTML = `
<header>
  <a href="/" class="logo">
    <div class="logo-icon">👁</div>
    Post<span>Preview</span>
  </a>
  
  <button class="menu-toggle" id="mobile-menu-btn" aria-label="Toggle Menu">☰</button>

  <nav id="nav-menu">
    <a href="/">Home</a>
    <a href="/#tools">Tools</a>
    <a href="/#preview">Preview</a>
    <a href="/#features">Features</a>
    <a href="/#how">How It Works</a>
    <a href="/#faq">FAQ</a>
    <a href="/guides">Guides</a>
    <a href="/blog">Blog</a>
  </nav>
  <a href="/#preview" class="btn btn-primary">Try Free ↗</a>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerElem = document.getElementById('header-component');
  if (headerElem) {
    headerElem.innerHTML = headerHTML;

    // Add logic to handle the mobile menu click
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
      menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Switch between hamburger and close icon
        menuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
      });
    }
  }
});
