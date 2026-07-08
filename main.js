// Main interactivity for PostPreview homepage
(function(){
  // App definitions for cards
  const apps = [
    { id: 'facebook', name: 'Facebook', color: '#1877F2', subtitle: 'Link card and feed preview' },
    { id: 'x', name: 'X (formerly Twitter)', color: '#1DA1F2', subtitle: 'Tweet style preview' },
    { id: 'linkedin', name: 'LinkedIn', color: '#0A66C2', subtitle: 'Professional post preview' },
    { id: 'pinterest', name: 'Pinterest', color: '#E60023', subtitle: 'Pin preview' },
    { id: 'threads', name: 'Threads', color: '#6A5AE0', subtitle: 'Short form preview' },
    { id: 'instagram', name: 'Instagram', color: '#E1306C', subtitle: 'Feed and story preview' },
    { id: 'reddit', name: 'Reddit', color: '#FF4500', subtitle: 'Post and comment preview' },
    { id: 'tiktok', name: 'TikTok', color: '#010101', subtitle: 'Short video card preview' }
  ];

  // Render app cards
  const grid = document.getElementById('app-grid');
  apps.forEach(app => {
    const card = document.createElement('button');
    card.className = 'app-card';
    card.setAttribute('role','listitem');
    card.setAttribute('data-app', app.id);
    card.innerHTML = `
      <div class="app-icon" style="background:${app.color}">${app.name.charAt(0)}</div>
      <div class="app-meta">
        <div class="app-name">${app.name}</div>
        <div class="app-sub">${app.subtitle}</div>
      </div>
      <div style="font-size:12px;color:var(--muted)">Coming soon</div>
    `;
    card.addEventListener('click', () => selectApp(app.id));
    grid.appendChild(card);
  });

  // Preview rendering logic
  const previewCanvas = document.getElementById('preview-canvas');
  const postText = document.getElementById('post-text');
  const postImage = document.getElementById('post-image');
  const platformSelect = document.getElementById('platform-select');
  const updateBtn = document.getElementById('update-preview');
  const copyBtn = document.getElementById('copy-text');
  const heroSample = document.getElementById('hero-sample-text');

  // Initialize with sample content
  postText.value = "Announcing our new PostPreview tool — preview posts before you publish. #preview #seo";
  postImage.value = "";
  heroSample.textContent = postText.value;

  function renderPreview(platform, text, imageUrl){
    // Basic mock templates per platform (no external APIs)
    const safeText = escapeHtml(text || '');
    const safeImage = imageUrl ? escapeHtml(imageUrl) : '';
    let html = '';

    switch(platform){
      case 'facebook':
        html = `
          <div class="device" style="max-width:520px">
            <div style="padding:12px;background:#fff;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
              <div style="display:flex;gap:10px;align-items:center">
                <div style="width:40px;height:40px;border-radius:8px;background:${apps[0].color}"></div>
                <div>
                  <div style="font-weight:700">PostPreview</div>
                  <div style="font-size:12px;color:var(--muted)">2m</div>
                </div>
              </div>
              <p style="margin:12px 0">${safeText}</p>
              ${safeImage ? `<img src="${safeImage}" alt="preview image" style="width:100%;border-radius:8px;object-fit:cover">` : ''}
            </div>
          </div>`;
        break;

      case 'x':
        html = `
          <div style="max-width:520px;background:#fff;padding:12px;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
            <div style="display:flex;gap:10px;align-items:center">
              <div style="width:36px;height:36px;border-radius:8px;background:${apps[1].color}"></div>
              <div style="font-weight:700">PostPreview</div>
            </div>
            <p style="margin:12px 0;font-family:var(--mono)">${safeText}</p>
            ${safeImage ? `<div style="margin-top:8px"><img src="${safeImage}" alt="preview image" style="width:100%;border-radius:8px;object-fit:cover"></div>` : ''}
          </div>`;
        break;

      case 'linkedin':
        html = `
          <div style="max-width:520px;background:#fff;padding:14px;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
            <div style="display:flex;gap:10px;align-items:center">
              <div style="width:40px;height:40px;border-radius:8px;background:${apps[2].color}"></div>
              <div>
                <div style="font-weight:700">PostPreview</div>
                <div style="font-size:12px;color:var(--muted)">Company • 1h</div>
              </div>
            </div>
            <p style="margin:12px 0">${safeText}</p>
            ${safeImage ? `<img src="${safeImage}" alt="preview image" style="width:100%;border-radius:8px;object-fit:cover">` : ''}
          </div>`;
        break;

      case 'pinterest':
        html = `
          <div style="max-width:360px;background:#fff;padding:12px;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
            ${safeImage ? `<img src="${safeImage}" alt="pin image" style="width:100%;height:220px;object-fit:cover;border-radius:8px">` : `<div style="height:220px;background:linear-gradient(180deg,#f3f4f6,#fff);border-radius:8px"></div>`}
            <p style="margin:10px 0;font-weight:700">${safeText}</p>
          </div>`;
        break;

      case 'threads':
        html = `
          <div style="max-width:520px;background:#fff;padding:12px;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
            <div style="display:flex;gap:10px;align-items:center">
              <div style="width:36px;height:36px;border-radius:8px;background:${apps[4].color}"></div>
              <div style="font-weight:700">PostPreview</div>
            </div>
            <p style="margin:12px 0">${safeText}</p>
          </div>`;
        break;

      case 'instagram':
        html = `
          <div style="max-width:420px;background:#fff;padding:12px;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
            ${safeImage ? `<img src="${safeImage}" alt="insta image" style="width:100%;height:320px;object-fit:cover;border-radius:8px">` : `<div style="height:320px;background:linear-gradient(180deg,#fff,#f8fafc);border-radius:8px"></div>`}
            <div style="padding-top:10px"><p style="margin:0">${safeText}</p></div>
          </div>`;
        break;

      case 'reddit':
        html = `
          <div style="max-width:520px;background:#fff;padding:12px;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
            <div style="display:flex;gap:10px;align-items:center">
              <div style="width:36px;height:36px;border-radius:8px;background:${apps[6].color}"></div>
              <div style="font-weight:700">r/PostPreview</div>
            </div>
            <p style="margin:12px 0">${safeText}</p>
            ${safeImage ? `<img src="${safeImage}" alt="preview image" style="width:100%;border-radius:8px;object-fit:cover">` : ''}
          </div>`;
        break;

      case 'tiktok':
        html = `
          <div style="max-width:360px;background:#fff;padding:12px;border-radius:10px;border:1px solid rgba(15,23,42,0.03)">
            ${safeImage ? `<div style="width:100%;height:420px;background-image:url('${safeImage}');background-size:cover;border-radius:8px"></div>` : `<div style="height:420px;background:linear-gradient(180deg,#000,#111);border-radius:8px"></div>`}
            <p style="margin-top:10px;color:var(--muted)">${safeText}</p>
          </div>`;
        break;

      default:
        html = `<div style="color:var(--muted)">Select a platform to preview</div>`;
    }

    previewCanvas.innerHTML = html;
  }

  // Escape HTML to avoid injection
  function escapeHtml(str){
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/\n/g, '<br>');
  }

  // Select app from grid
  function selectApp(appId){
    platformSelect.value = appId;
    renderPreview(appId, postText.value, postImage.value);
    // Smooth scroll to preview
    document.getElementById('live').scrollIntoView({behavior:'smooth', block:'start'});
  }

  // Update preview button
  updateBtn.addEventListener('click', () => {
    const platform = platformSelect.value;
    renderPreview(platform, postText.value, postImage.value);
    // update hero sample text
    const heroSampleEl = document.getElementById('hero-sample-text');
    if(heroSampleEl) heroSampleEl.textContent = postText.value;
  });

  // Copy text button
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(postText.value || '');
      copyBtn.textContent = 'Copied';
      setTimeout(()=> copyBtn.textContent = 'Copy Text', 1400);
    } catch(e){
      copyBtn.textContent = 'Copy';
    }
  });

  // Keyboard shortcut: Ctrl/Cmd + Enter to update preview
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      updateBtn.click();
    }
  });

  // Initialize default preview
  renderPreview(platformSelect.value, postText.value, postImage.value);

  // Accessibility: focus styles
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') document.body.classList.add('show-focus');
  });

})();
