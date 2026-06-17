'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [];

    /* ── PAGE FADE IN ── */
    document.body.classList.add('page-entering');
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        document.body.classList.remove('page-entering');
      });
      cleanups.push(() => cancelAnimationFrame(raf2));
    });
    cleanups.push(() => cancelAnimationFrame(raf1));

    /* ── SCROLL PROGRESS BAR ── */
    let bar = document.getElementById('scroll-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'scroll-progress';
      document.body.prepend(bar);
    }
    const onScrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0) bar.style.width = (window.scrollY / max * 100) + '%';
    };
    window.addEventListener('scroll', onScrollProgress, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScrollProgress));

    /* ── CUSTOM CURSOR ── */
    const cursor = document.querySelector('.cursor');
    const ring = document.querySelector('.cursor-ring');
    if (cursor && ring) {
      let mx = 0, my = 0, rx = 0, ry = 0;
      let cursorRaf;

      const onMouseMove = (e) => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
      };
      document.addEventListener('mousemove', onMouseMove);
      cleanups.push(() => document.removeEventListener('mousemove', onMouseMove));

      const animRing = () => {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        cursorRaf = requestAnimationFrame(animRing);
      };
      animRing();
      cleanups.push(() => cancelAnimationFrame(cursorRaf));

      const hoverEls = document.querySelectorAll('a, button');
      const onEnter = () => ring.classList.add('hover');
      const onLeave = () => ring.classList.remove('hover');
      hoverEls.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
      cleanups.push(() => hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      }));
    }

    /* ── NAVIGATION SCROLL ── */
    const nav = document.querySelector('nav');
    if (nav) {
      const onNavScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      };
      window.addEventListener('scroll', onNavScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onNavScroll));

      /* NAV HIDE ON SCROLL DOWN / SHOW ON SCROLL UP */
      let lastY = 0;
      const onNavHide = () => {
        const y = window.scrollY;
        if (y < 100) { nav.style.transform = ''; lastY = y; return; }
        if (y > lastY + 6) nav.style.transform = 'translateY(-110%)';
        else if (y < lastY - 6) nav.style.transform = 'translateY(0)';
        lastY = y;
      };
      window.addEventListener('scroll', onNavHide, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onNavHide));

      /* HAMBURGER */
      const burger = nav.querySelector('.nav-burger');
      if (burger) {
        const onBurger = () => {
          const isOpen = nav.classList.toggle('mob-open');
          burger.setAttribute('aria-expanded', isOpen);
        };
        burger.addEventListener('click', onBurger);
        cleanups.push(() => burger.removeEventListener('click', onBurger));

        const onNavLink = () => nav.classList.remove('mob-open');
        nav.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', onNavLink);
        });
        cleanups.push(() => nav.querySelectorAll('a').forEach(a => {
          a.removeEventListener('click', onNavLink);
        }));
      }
    }

    /* ── SCROLL REVEAL ── */
    const revealEls = document.querySelectorAll('.reveal');
    let revealObserver;
    if (revealEls.length) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.12 });
      revealEls.forEach(el => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    }

    /* ── CANVAS PARTICLE SYSTEM (golden embers) ── */
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let W, H, particles = [];
      let particleRaf;

      function resize() {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
      }
      resize();
      const onResize = () => resize();
      window.addEventListener('resize', onResize);
      cleanups.push(() => window.removeEventListener('resize', onResize));

      class Ember {
        constructor() { this.reset(true); }
        reset(init = false) {
          this.x = Math.random() * W;
          this.y = init ? Math.random() * H : H + 10;
          this.r = Math.random() * 2.2 + 0.4;
          this.vy = -(Math.random() * 0.9 + 0.3);
          this.vx = (Math.random() - 0.5) * 0.5;
          this.life = 0;
          this.maxLife = Math.random() * 260 + 120;
          this.hue = 30 + Math.random() * 22;
          this.bright = 55 + Math.random() * 20;
        }
        update() {
          this.x += this.vx + Math.sin(this.life * 0.04) * 0.3;
          this.y += this.vy;
          this.life++;
          if (this.life > this.maxLife || this.y < -8) this.reset();
        }
        draw() {
          const progress = this.life / this.maxLife;
          const alpha = Math.sin(progress * Math.PI) * 0.55 + Math.random() * 0.08;
          ctx.save();
          ctx.globalAlpha = Math.max(0, alpha);
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsl(${this.hue}, 90%, 60%)`;
          ctx.fillStyle = `hsl(${this.hue}, 85%, ${this.bright}%)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      for (let i = 0; i < 90; i++) particles.push(new Ember());
      const loop = () => {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        particleRaf = requestAnimationFrame(loop);
      };
      loop();
      cleanups.push(() => cancelAnimationFrame(particleRaf));
    }

    /* ── MENU STICKY NAV HIGHLIGHT ── */
    const menuNavLinks = document.querySelectorAll('.menu-sticky-nav a');
    if (menuNavLinks.length) {
      const sections = document.querySelectorAll('.menu-section[id]');
      const menuObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id;
            menuNavLinks.forEach(a => {
              a.classList.toggle('active', a.getAttribute('href') === '#' + id);
            });
          }
        });
      }, { rootMargin: '-40% 0px -40% 0px' });
      sections.forEach(s => menuObserver.observe(s));
      cleanups.push(() => menuObserver.disconnect());
    }

    /* ── COUNTER ANIMATION ── */
    function animateCounter(el) {
      const target = parseFloat(el.dataset.target);
      const duration = 1800;
      const start = performance.now();
      const update = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const val = target * ease;
        el.textContent = Math.round(val) + (el.dataset.suffix || '');
        if (t < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    }
    const counterEls = document.querySelectorAll('[data-target]');
    if (counterEls.length) {
      const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { animateCounter(e.target); counterObserver.unobserve(e.target); }
        });
      }, { threshold: 0.6 });
      counterEls.forEach(el => counterObserver.observe(el));
      cleanups.push(() => counterObserver.disconnect());
    }

    /* ── PARALLAX HERO TEXT ── */
    const onParallax = () => {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        const y = window.scrollY;
        heroContent.style.transform = `translateY(${y * 0.35}px)`;
        heroContent.style.opacity = String(1 - (y / 600));
      }
    };
    window.addEventListener('scroll', onParallax, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onParallax));

    /* ── SPOTLIGHT GLOW — radial follows mouse ── */
    const spotCards = document.querySelectorAll('.dish-card, .menu-item, .cat-card');
    const spotHandlers = [];
    spotCards.forEach(card => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      };
      card.addEventListener('mousemove', onMove);
      spotHandlers.push({ card, onMove });
    });
    cleanups.push(() => spotHandlers.forEach(({ card, onMove }) => card.removeEventListener('mousemove', onMove)));

    /* ── 3D TILT — dish cards ── */
    const tiltHandlers = [];
    document.querySelectorAll('.dish-card').forEach(card => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${y * -7}deg) scale(1.02)`;
      };
      const onLeave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      tiltHandlers.push({ card, onMove, onLeave });
    });
    cleanups.push(() => tiltHandlers.forEach(({ card, onMove, onLeave }) => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    }));

    /* ── TEXT SCRAMBLE — hero title on load ── */
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ·—0123456789';
      const originalText = heroTitle.textContent.trim();
      let frame = 0;
      heroTitle.innerHTML = '';
      const spans = originalText.split('').map(ch => {
        const s = document.createElement('span');
        s.className = 'scramble-char';
        s.textContent = ch === ' ' ? ' ' : ch;
        heroTitle.appendChild(s);
        return { span: s, target: ch, startFrame: Math.floor(Math.random() * 8), endFrame: 12 + Math.floor(Math.random() * 16) };
      });
      let scrambleRaf;
      const tick = () => {
        let done = 0;
        const nonSpace = spans.filter(s => s.target !== ' ');
        spans.forEach(item => {
          if (item.target === ' ') { done++; return; }
          if (frame >= item.endFrame) {
            item.span.textContent = item.target;
            item.span.classList.remove('scrambling');
            done++;
          } else if (frame >= item.startFrame) {
            item.span.classList.add('scrambling');
            item.span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        });
        frame++;
        if (done < spans.length) scrambleRaf = requestAnimationFrame(tick);
      };
      const scrambleTimeout = setTimeout(tick, 350);
      cleanups.push(() => { clearTimeout(scrambleTimeout); cancelAnimationFrame(scrambleRaf); });
    }

    /* ── BLUR WORD REVEAL — section headings ── */
    const blurTargets = document.querySelectorAll('.section-title, .menu-section-title');
    if (blurTargets.length) {
      blurTargets.forEach(el => {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) textNodes.push(node);
        textNodes.forEach(tn => {
          const frag = document.createDocumentFragment();
          tn.textContent.split(/(\s+)/).forEach(part => {
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
            } else if (part) {
              const sp = document.createElement('span');
              sp.className = 'blur-word';
              sp.textContent = part;
              frag.appendChild(sp);
            }
          });
          tn.parentNode.replaceChild(frag, tn);
        });
      });
      const blurObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const words = entry.target.querySelectorAll('.blur-word');
          words.forEach((w, i) => setTimeout(() => w.classList.add('revealed'), i * 80));
          blurObserver.unobserve(entry.target);
        });
      }, { threshold: 0.15 });
      blurTargets.forEach(el => blurObserver.observe(el));
      cleanups.push(() => blurObserver.disconnect());
    }

    /* ── MAGNETIC BUTTONS ── */
    const magHandlers = [];
    document.querySelectorAll('.btn-primary, .btn-outline, .nav-cta').forEach(btn => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.3;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        btn.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
      };
      const onLeave = () => { btn.style.transform = ''; };
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      magHandlers.push({ btn, onMove, onLeave });
    });
    cleanups.push(() => magHandlers.forEach(({ btn, onMove, onLeave }) => {
      btn.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    }));

    /* ── PAGE HERO LINE RISE ── */
    const pageTitle = document.querySelector('.page-hero-title');
    if (pageTitle) {
      const text = pageTitle.textContent.trim();
      pageTitle.innerHTML = `<span class="reveal-line"><span>${text}</span></span>`;
      const riseTimeout = setTimeout(() => {
        const inner = pageTitle.querySelector('span span');
        if (inner) inner.classList.add('risen');
      }, 150);
      cleanups.push(() => clearTimeout(riseTimeout));
    }

    /* ── RESERVATION FORM ── */
    const resForm = document.getElementById('res-form');
    if (resForm) {
      const onSubmit = (e) => {
        e.preventDefault();
        const btn = resForm.querySelector('.form-submit');
        btn.textContent = 'Reservation Confirmed';
        btn.style.background = '#4A7A4A';
        const t = setTimeout(() => {
          btn.textContent = 'Request a Table';
          btn.style.background = '';
          resForm.reset();
        }, 4000);
        cleanups.push(() => clearTimeout(t));
      };
      resForm.addEventListener('submit', onSubmit);
      cleanups.push(() => resForm.removeEventListener('submit', onSubmit));
    }

    return () => {
      cleanups.forEach(fn => fn());
    };
  }, [pathname]);

  return null;
}
