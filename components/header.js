// header.js
const headerHTML = `
<header>
  <a href="/" class="logo">
    <div class="logo-icon">👁</div>
    Post<span>Preview</span>
  </a>
  <nav>
    <a href="#tools">Tools</a>
    <a href="#preview">Preview</a>
    <a href="#features">Features</a>
    <a href="#how">How It Works</a>
    <a href="#faq">FAQ</a>
    <a href="/guides">Guides</a>
  </nav>
  <a href="/#preview" class="btn btn-primary">Try Free ↗</a>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerElem = document.getElementById('header-component');
  if (headerElem) {
    headerElem.innerHTML = headerHTML;
  }
});
