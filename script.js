/* ============================================================
   PORTFOLIO — SHAIK SHOAIB
   Vanilla JavaScript: all interactive behaviour
   ============================================================ */

(function () {
  'use strict';

  /* ─── DOM READY ─── */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initNavbar();
    initTypingEffect();
    initScrollReveal();
    initSkillBars();
    initProjectFilter();
    initSmoothScroll();
    initScrollToTop();
    initContactForm();
  });

  /* ==========================================================
     DARK / LIGHT MODE
     ========================================================== */
  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    // Load saved preference or system preference
    var saved = localStorage.getItem('site-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) document.body.classList.add('dark-mode');

    btn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem(
        'site-theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light'
      );
    });
  }

  /* ==========================================================
     NAVBAR — HAMBURGER + ACTIVE LINK
     ========================================================== */
  function initNavbar() {
    var hamburger  = document.getElementById('hamburger-btn');
    var navMenu    = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        // internal navigation
        if (!this.target || this.target === '_self') {
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.classList.remove('active');
          navMenu.classList.remove('open');
        }
      });
    });

    // Close menu on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        hamburger.focus();
      }
    });

    // Highlight active link
    var current = location.pathname.split('/').pop() || 'index.html';
    navMenu.querySelectorAll('a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === current) a.setAttribute('aria-current', 'page');
    });
  }

  /* ==========================================================
     TYPING EFFECT (hero)
     ========================================================== */
  function initTypingEffect() {
    var el = document.getElementById('typing-role');
    if (!el) return;

    var roles = [
      'B.Tech CSE(AI) Student',
      'AI & Web Developer',
      'Python & ML Enthusiast'
    ];
    var cursor = document.getElementById('cursor');

    var roleIdx   = 0;
    var charIdx   = 0;
    var deleting  = false;
    var delay     = 80;

    function type() {
      var text = roles[roleIdx];
      if (!deleting) {
        el.textContent = text.slice(0, ++charIdx);
        if (charIdx === text.length) {
          deleting  = true;
          delay     = 2000;  // pause
        } else { delay = 90; }
      } else {
        el.textContent = text.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx   = (roleIdx + 1) % roles.length;
          if (cursor) cursor.style.display = 'inline-block';
        }
        delay = 40;
      }
      if (cursor) cursor.style.display = deleting || charIdx === text.length ? 'none' : 'inline-block';
      setTimeout(type, delay);
    }
    setTimeout(type, 1200);
  }

  /* ==========================================================
     SCROLL REVEAL ANIMATION
     ========================================================== */
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  }

  /* ==========================================================
     SKILL BARS ANIMATION
     ========================================================== */
  function initSkillBars() {
    if (!('IntersectionObserver' in window)) return;
    var bars = document.querySelectorAll('.skill-bar-fill');
    if (!bars.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var fill = entry.target;
          var target = fill.style.getPropertyValue('--target-width') || '0%';
          setTimeout(function () { fill.style.width = target; }, 100);
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(function (b) { observer.observe(b); });
  }

  /* ==========================================================
     PROJECT FILTER
     ========================================================== */
  function initProjectFilter() {
    var btns = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.filter-item');

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.dataset.filter;

        // Toggle active
        btns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        // Filter cards
        cards.forEach(function (card) {
          var match = filter === 'all' || card.classList.contains(filter);
          card.style.display = match ? '' : 'none';
          // Re-trigger reveal animation
          if (match) setTimeout(function () { card.classList.add('visible'); }, 50);
        });
      });
    });
  }

  /* ==========================================================
     SMOOTH SCROLL (anchor links)
     ========================================================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ==========================================================
     SCROLL-TO-TOP BUTTON
     ========================================================== */
  function initScrollToTop() {
    var btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
        btn.setAttribute('aria-hidden', 'false');
      } else {
        btn.classList.remove('visible');
        btn.setAttribute('aria-hidden', 'true');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================
     CONTACT FORM VALIDATION
     ========================================================== */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var fields = [
      { id: 'name',     rule: function (v) { return v.trim().length >= 2; },                        msg: 'Please enter your full name.' },
      { id: 'email',    rule: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); },       msg: 'Please enter a valid email address.' },
      { id: 'subject',  rule: function (v) { return v.trim().length >= 3; },                        msg: 'Subject must be at least 3 characters.' },
      { id: 'message',  rule: function (v) { return v.trim().length >= 10; },                       msg: 'Message must be at least 10 characters.' },
    ];

    var btn = form.querySelector('.btn-submit');
    btn.setAttribute('type', 'submit');
    btn.setAttribute('aria-label', 'Send message');

    // Live clear-on-input
    fields.forEach(function (f) {
      var el = document.getElementById(f.id);
      var err = document.getElementById(f.id + '-error');
      if (!el || !err) return;
      el.addEventListener('input', function () {
        if (err.textContent) {
          if (f.rule(el.value)) {
            err.textContent = '';
            el.setAttribute('aria-invalid', 'false');
          }
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      fields.forEach(function (f) {
        var el  = document.getElementById(f.id);
        var err = document.getElementById(f.id + '-error');
        if (!el) return;
        if (!f.rule(el.value)) {
          err.textContent = f.msg;
          el.setAttribute('aria-invalid', 'true');
          valid = false;
          el.focus();
          // Only focus the first error to avoid re-triggering
          return false;
        } else {
          err.textContent = '';
          el.setAttribute('aria-invalid', 'false');
        }
      });

      if (!valid) return;

      showToast('Thank you! Your message has been sent.', 'success');
      form.reset();
    });
  }

  /* ==========================================================
     TOAST NOTIFICATION
     ========================================================== */
  function showToast(message, type) {
    var existing = document.getElementById('form-toast');
    if (!existing) return;

    existing.textContent = message;
    existing.className = 'toast ' + type + ' show';

    setTimeout(function () {
      existing.classList.remove('show');
    }, 4000);
  }

})();
