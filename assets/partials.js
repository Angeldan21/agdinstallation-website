// Shared nav + footer injected across every page.
// Pass the current page key so the active link is marked.
window.renderSiteChrome = function(pageKey) {
  const navHTML = `
    <nav class="nav" id="mainNav">
      <div class="nav-inner">
        <a href="index.html" class="logo" aria-label="AGD Installation home">
          <span class="logo-mark">AGD</span>
          <span>AGD Installation</span>
        </a>
        <button class="nav-toggle" aria-label="Toggle menu" onclick="document.getElementById('mainNav').classList.toggle('open')">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links">
          <a href="index.html" class="${pageKey==='home'?'active':''}">Home</a>
          <a href="services.html" class="${pageKey==='services'?'active':''}">Services</a>
          <a href="projects.html" class="${pageKey==='projects'?'active':''}">Projects</a>
          <a href="about.html" class="${pageKey==='about'?'active':''}">About</a>
          <a href="contact.html" class="btn btn-primary" style="color:#ffffff; background:#0A0A0A;"><span style="color:#ffffff;">Request a Quote</span></a>
        </div>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="foot-top">
          <div>
            <div class="logo" style="color:#fff; margin-bottom:16px;">
              <span class="logo-mark" style="background:#fff; color:#0A0A0A;">AGD</span>
              <span>AGD Installation</span>
            </div>
            <p style="font-size:14px; max-width: 320px; color:#9a9a9a; line-height:1.6;">
              Commercial furniture moving, office relocation, and installation services.
              Based in Hayward — serving California and beyond.
            </p>
            <div style="margin-top:20px;">
              <span class="badge badge-dot" style="background:transparent; color:#bfbfbf; border-color:#2a2a2a;">
                Licensed &amp; Insured
              </span>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <a href="services.html">Commercial Moving</a>
            <a href="services.html">Office Relocation</a>
            <a href="services.html">Furniture Installation</a>
            <a href="services.html">Cubicle Systems</a>
            <a href="services.html">Decommissioning</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="about.html">About</a>
            <a href="projects.html">Projects</a>
            <a href="contact.html">Contact</a>
            <a href="contact.html">Careers</a>
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href="tel:+15105550199">(510) 555-0199</a>
            <a href="mailto:hello@agdinstallation.com">hello@agdinstallation.com</a>
            <a href="#" style="pointer-events:none;">Hayward, CA</a>
            <a href="contact.html" style="color:#fff; margin-top:12px; font-weight:600;">Request a quote →</a>
          </div>
        </div>
        <div class="foot-bottom">
          <div>© 2026 AGD Installation</div>
          <div>Hayward, CA · Serving California</div>
        </div>
      </div>
    </footer>
  `;

  document.getElementById('site-nav').innerHTML = navHTML;
  document.getElementById('site-footer').innerHTML = footerHTML;
};

// Simple photo placeholder helper
window.photo = function(label, cls='') {
  return `<div class="photo ${cls}"><div class="photo-label">${label}</div></div>`;
};
