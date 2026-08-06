/* ============================================================
   script.js — Shaon Kumer Paul Portfolio (Single-Page Scroll)
   Filters · Lightbox · Scroll reveal · Scrollspy nav · Forms
   ============================================================ */

/* ── SVG ICONS ───────────────────────────────────────────────── */
const ICONS = {
  github: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482
    0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462
    -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832
    .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683
    -.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59
    0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699
    1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0
    1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>`,
  external: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`,
};

/* ── RENDER PROJECTS ─────────────────────────────────────────── */
let curFilter = 'all';

function renderCard(p) {
  return `
    <div class="project-card reveal">
      <div class="project-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        <div class="project-img-overlay">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="proj-link-btn proj-link-github">${ICONS.github} Code</a>` : ''}
          ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="proj-link-btn proj-link-demo">${ICONS.external} Demo</a>` : ''}
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
      </div>
    </div>`;
}

function renderAllProjects() {
  const grid = document.getElementById('allProjectsGrid');
  if (!grid) return;
  const list = curFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === curFilter);
  grid.innerHTML = list.map(renderCard).join('');
  setTimeout(initReveal, 50);
}

function filterProjects(cat, btn) {
  curFilter = cat;
  const bar = btn.closest('.filter-bar');
  bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAllProjects();
}

/* ── RENDER CERTIFICATIONS ───────────────────────────────────── */
let curCertFilter = 'all';

const CERT_ISSUER_COLOR = {
  'Udemy':                { bg: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.35)', text: '#8670dd' },
  'Coursera':             { bg: 'rgba(29,158,117,0.15)', border: 'rgba(29,158,117,0.35)', text: '#6ee7b7' },
  'edX':                  { bg: 'rgba(239,159,39,0.15)',  border: 'rgba(239,159,39,0.35)',  text: '#fcd34d' },
  'Google Digital Garage':{ bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.35)', text: '#639bdc' },
  'Microsoft':{ bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.35)', text: '#d94e94' },
};

function certPlaceholder(title, issuer) {
  const c = CERT_ISSUER_COLOR[issuer] || { bg:'rgba(51,65,85,0.6)', border:'rgba(100,116,139,0.4)', text:'#94a3b8' };
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="186"><rect width="600" height="186" fill="${c.bg}"/><rect x="1" y="1" width="598" height="184" fill="none" stroke="${c.border}" stroke-width="1.5" rx="3"/><text x="300" y="80" font-family="system-ui,sans-serif" font-size="40" fill="${c.text}" text-anchor="middle" dominant-baseline="middle" opacity="0.6">&#x1F3C5;</text><text x="300" y="130" font-family="system-ui,sans-serif" font-size="13" fill="${c.text}" text-anchor="middle" opacity="0.5">${issuer}</text></svg>`)}`;
}

function renderCertCard(c) {
  const imgSrc = c.img || certPlaceholder(c.title, c.issuer);
  const col = CERT_ISSUER_COLOR[c.issuer] || { bg:'rgba(51,65,85,0.6)', border:'rgba(100,116,139,0.4)', text:'#94a3b8' };
  return `
    <div class="project-card reveal">
      <div class="project-img-wrap">
        <img src="${imgSrc}" alt="${c.title}" loading="lazy"/>
        <div class="project-img-overlay">
          <a href="${c.link}" target="_blank" rel="noopener" class="proj-link-btn proj-link-cert">
            ${ICONS.external} View Certificate
          </a>
        </div>
        <div class="cert-issuer-badge" style="background:${col.bg};border:1px solid ${col.border};color:${col.text}">${c.issuer}</div>
      </div>
      <div class="project-body">
        <div class="project-tags">${c.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="project-title">${c.title}</div>
        <p class="project-desc">${c.desc}</p>
      </div>
    </div>`;
}

function renderAllCerts() {
  const grid = document.getElementById('allCertsGrid');
  if (!grid) return;
  const list = curCertFilter === 'all' ? CERTIFICATIONS : CERTIFICATIONS.filter(c => c.cat === curCertFilter);
  grid.innerHTML = list.map(renderCertCard).join('');
  setTimeout(initReveal, 50);
}

function filterCerts(cat, btn) {
  curCertFilter = cat;
  const bar = btn.closest('.filter-bar');
  bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAllCerts();
}

/* ── RENDER PHOTOGRAPHY PAGE ─────────────────────────────────── */
function renderPhotoPage() {
  const grid = document.getElementById('photoPageGrid');
  if (!grid) return;
  grid.innerHTML = PHOTOS.map((p, i) => `
    <div class="photo-item reveal rd${(i % 3) + 1}" onclick="openLb('${p.src}')">
      <img src="${p.src}" alt="${p.alt}" loading="lazy"/>
      <div class="photo-overlay"></div>
    </div>`).join('');
  setTimeout(initReveal, 80);
}

/* ── LIGHTBOX ────────────────────────────────────────────────── */
function openLb(src) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

/* ── NAVBAR SCROLL (solid background once scrolled) ──────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 10);
});

/* ── MOBILE MENU ─────────────────────────────────────────────── */
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  const open = m.classList.toggle('open');
  h.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

// Close mobile menu whenever a nav link (desktop or mobile) is clicked
document.addEventListener('click', e => {
  const link = e.target.closest('[data-page]');
  if (!link) return;
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
});

/* ── SCROLLSPY: highlight nav link for section in view ────────── */
function initScrollspy() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = document.querySelectorAll('[data-page]');

  const setActive = name => {
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.page === name));
  };

  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => spy.observe(s));
}

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)')
    .forEach(el => obs.observe(el));
}

/* ── CONTACT FORM ────────────────────────────────────────────── */
async function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  const data = {
    firstName: e.target.querySelector('[name="firstName"]').value,
    lastName:  e.target.querySelector('[name="lastName"]').value,
    email:     e.target.querySelector('[name="email"]').value,
    subject:   e.target.querySelector('[name="subject"]').value,
    message:   e.target.querySelector('[name="message"]').value,
  };

  try {
    const res = await fetch('https://formspree.io/f/mreolajv', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (res.ok) {
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    } else {
      btn.textContent = 'Failed. Try again.';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Failed. Try again.';
    btn.disabled = false;
  }
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderAllProjects();
  renderAllCerts();
  renderPhotoPage();

  // Featured certifications on home (first 3)
  const fcg = document.getElementById('featuredCertGrid');
  if (fcg) {
    fcg.innerHTML = CERTIFICATIONS.slice(0, 3).map((c, i) => {
      const imgSrc = c.img || certPlaceholder(c.title, c.issuer);
      const col = CERT_ISSUER_COLOR[c.issuer] || { bg:'rgba(51,65,85,0.6)', border:'rgba(100,116,139,0.4)', text:'#94a3b8' };
      return `
        <div class="project-card reveal rd${i + 1}">
          <div class="project-img-wrap">
            <img src="${imgSrc}" alt="${c.title}" loading="lazy"/>
            <div class="project-img-overlay">
              <a href="${c.link}" target="_blank" rel="noopener" class="proj-link-btn proj-link-cert">
                ${ICONS.external} View Certificate
              </a>
            </div>
            <div class="cert-issuer-badge" style="background:${col.bg};border:1px solid ${col.border};color:${col.text}">${c.issuer}</div>
          </div>
          <div class="project-body">
            <div class="project-tags">${c.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
            <div class="project-title">${c.title}</div>
            <p class="project-desc">${c.desc}</p>
          </div>
        </div>`;
    }).join('');
    setTimeout(initReveal, 80);
  }

  initScrollspy();
  setTimeout(initReveal, 80);
});
