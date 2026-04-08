// footer.js
const footerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="#" class="logo">
        <div class="logo-icon">👁</div>
        Post<span>Preview</span>
      </a>
      <p>The free social media post preview tool for creators, marketers, and businesses. See before you post.</p>
      <div class="footer-socials">
        <a href="#" class="social-btn" title="Twitter">𝕏</a>
        <a href="#" class="social-btn" title="LinkedIn">in</a>
        <a href="#" class="social-btn" title="Facebook">f</a>
        <a href="#" class="social-btn" title="Instagram">◎</a>
      </div>
    </div>
    <div class="footer-widget">
      <h4>Preview Tools</h4>
      <ul class="footer-links">
        <li><a href="facebook-preview">Facebook Post Preview</a></li>
        <li><a href="instagram-preview">Instagram Post Preview</a></li>
        <li><a href="twitter-preview">Twitter/X Post Preview</a></li>
        <li><a href="linkedin-preview">LinkedIn Post Preview</a></li>
        <li><a href="youtube-preview">YouTube Post Preview</a></li>
        <li><a href="tiktok-preview">TikTok Post Preview</a></li>
        <li><a href="pinterest-preview">Pinterest Post Preview</a></li>
        <li><a href="reddit-preview">Reddit Post Preview</a></li>
      </ul>
    </div>
    <div class="footer-widget">
      <h4>Resources</h4>
      <ul class="footer-links">
        <li><a href="blog">Blog</a></li>
        <li><a href="social-media-tips">Social Media Tips</a></li>
        <li><a href="character-limit-guide">Character Limits Guide</a></li>
        <li><a href="image-size-guide">Image Size Guide</a></li>
        <li><a href="platform-comparison">Platform Comparison</a></li>
        <li><a href="content-calender">Content Calendar</a></li>
        <li><a href="hashtag-guide">Hashtag Guide</a></li>
      </ul>
    </div>
    <div class="footer-widget">
      <h4>Company</h4>
      <ul class="footer-links">
        <li><a href="about">About Us</a></li>
        <li><a href="contact">Contact</a></li>
        <li><a href="privacy">Privacy Policy</a></li>
        <li><a href="terms">Terms of Service</a></li>
        <li><a href="cookies">Cookie Policy</a></li>
        <li><a href="/sitemap.xml">Sitemap</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 PostPreview. All rights reserved.</span>
    <span>Built with ❤️ for creators worldwide</span>
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const footerElem = document.getElementById('footer-component');
  if (footerElem) {
    footerElem.innerHTML = footerHTML;
  }
});
