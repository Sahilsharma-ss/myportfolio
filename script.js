/* =============================================
   SAHIL SHARMA — PORTFOLIO SCRIPT
   Vanilla JS · No external libraries
   Features:
     - Typing effect (hero role)
     - Animated particle background (canvas)
     - Scroll progress indicator
     - IntersectionObserver scroll reveal
     - Skill bar animation
     - Responsive hamburger menu
     - Light / Dark theme toggle
     - Active nav link highlight
     - Navbar scroll shadow
     - Footer year auto-update
   ============================================= */

/* ---- Helpers ---- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* =============================================
   1. THEME TOGGLE
   ============================================= */
(function initTheme() {
  const html = document.documentElement;
  const btn = $('#theme-toggle');
  const icon = btn ? btn.querySelector('.toggle-icon') : null;

  /* Load saved preference or default to dark */
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  if (icon) icon.textContent = saved === 'dark' ? '☀️' : '🌙';

  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    if (icon) icon.textContent = next === 'dark' ? '☀️' : '🌙';
  });
})();

/* =============================================
   2. NAVBAR — hamburger + scroll effects
   ============================================= */
(function initNavbar() {
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');
  const navbar = $('#navbar');

  /* Hamburger toggle */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    /* Close on mobile link click */
    $$('.mobile-link', mobileMenu).forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* Navbar scroll shadow */
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* =============================================
   3. SCROLL PROGRESS INDICATOR
   ============================================= */
(function initScrollProgress() {
  const bar = $('#scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

/* =============================================
   4. TYPING EFFECT
   ============================================= */
(function initTyping() {
  const target = $('#typed-text');
  if (!target) return;

  const roles = [
    'Software Developer',
    'Cybersecurity Enthusiast',
    'AI / ML Explorer',
    'Problem Solver',
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  const TYPE_SPEED = 80;
  const DELETE_SPEED = 45;
  const PAUSE_AFTER_TYPE = 1800;
  const PAUSE_AFTER_DELETE = 400;

  function tick() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      /* Typing */
      target.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        if (isPaused) return;
        isPaused = true;
        setTimeout(() => { isDeleting = true; isPaused = false; tick(); },
          PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      /* Deleting */
      target.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
    }

    setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
  }

  setTimeout(tick, 600);
})();

/* =============================================
   5. SCROLL REVEAL (IntersectionObserver)
   ============================================= */
(function initScrollReveal() {
  const elements = $$('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();

/* =============================================
   6. SKILL BARS ANIMATION
   ============================================= */
(function initSkillBars() {
  const fills = $$('.skill-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.getAttribute('data-width') || '0';
          fill.style.width = width + '%';
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach(fill => observer.observe(fill));
})();

/* =============================================
   7. ACTIVE NAV LINK (scroll spy)
   ============================================= */
(function initScrollSpy() {
  const sections = $$('section[id], section.hero-section');
  const navLinks = $$('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + id
            );
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(s => observer.observe(s));
})();

/* =============================================
   8. FOOTER YEAR
   ============================================= */
(function initYear() {
  const span = $('#year');
  if (span) span.textContent = new Date().getFullYear();
})();

/* =============================================
   9. PARTICLE BACKGROUND (canvas)
   ============================================= */
(function initParticles() {
  const canvas = $('#particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, particles;

  /* Responsive resize */
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  /* Particle constructor */
  function Particle() {
    this.reset();
  }

  Particle.prototype.reset = function () {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 1.8 + 0.4;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = (Math.random() - 0.5) * 0.35;
    this.alpha = Math.random() * 0.5 + 0.15;
    /* Alternate between accent colours */
    this.color = Math.random() > 0.5 ? '124,58,237' : '6,182,212';
  };

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    /* Wrap around edges */
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  };

  /* Connect nearby particles with lines */
  function connectParticles() {
    const maxDist = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function init() {
    resize();
    /* Density: ~1 particle per 18 000px² */
    const count = Math.floor((width * height) / 18000);
    particles = Array.from({ length: Math.min(count, 120) }, () => new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    /* Re-distribute existing particles to new bounds */
    particles.forEach(p => {
      if (p.x > width) p.x = Math.random() * width;
      if (p.y > height) p.y = Math.random() * height;
    });
  }, { passive: true });

  init();
  animate();
})();
