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
        <a href="https://github.com/postpreview/postpreview.github.io" class="social-btn" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
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
        <li><a href="pinterest-pin-preview">Pinterest Pin Preview</a></li>
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
        <li><a href="content-calendar">Content Calendar</a></li>
        <li><a href="hashtag-guide">Hashtag Guide</a></li>
      </ul>
    </div>
    <div class="footer-widget">
      <h4>Pages</h4>
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
    <span>© 2026 PostPreview. All rights reserved.</span>
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
