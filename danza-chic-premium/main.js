/* Danza Chic Premium — Main JavaScript */

(function() {
  'use strict';

  // Safe wrapper for all inits
  function safe(fn, name) {
    try {
      fn();
    } catch (error) {
      console.error(`[${name}] Error:`, error);
    }
  }

  // ========== Mobile Navigation ==========
  function initNavigation() {
    const toggle = document.querySelector('[data-toggle-menu]');
    const navMenu = document.querySelector('.navbar__links');

    if (!toggle || !navMenu) return;

    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.navbar__links a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // ========== Reveal Animations (IntersectionObserver) ==========
  function initReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-reveal-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('reveal-visible');
          }, parseFloat(delay) * 1000);

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));

    // Safety net: reveal all hidden elements after 6s
    setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not(.reveal-visible)').forEach(el => {
        el.classList.add('reveal-visible');
      });
    }, 6000);
  }

  // ========== GSAP Animations (if GSAP available) ==========
  function initGSAP() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP not loaded, using IntersectionObserver for animations');
      return;
    }

    // Hero animations
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroCtas = document.querySelector('.hero__ctas');
    const heroImage = document.querySelector('.hero__image-container');

    if (heroTitle) {
      const tl = gsap.timeline();
      tl.from(heroTitle, { duration: 0.8, opacity: 0, y: 30, ease: 'power3.out' }, 0);
      if (heroSubtitle) tl.from(heroSubtitle, { duration: 0.8, opacity: 0, y: 30, ease: 'power3.out' }, 0.15);
      if (heroCtas) tl.from(heroCtas, { duration: 0.8, opacity: 0, y: 30, ease: 'power3.out' }, 0.3);
      if (heroImage) tl.from(heroImage, { duration: 0.8, opacity: 0, scale: 0.95, ease: 'power3.out' }, 0.2);
    }

    // Stagger animations for cards if ScrollTrigger is available
    if (typeof ScrollTrigger === 'undefined') {
      console.warn('ScrollTrigger not loaded, skipping scroll-triggered animations');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // About cards
    document.querySelectorAll('.about__card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });

    // Class cards
    document.querySelectorAll('.class-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 25,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });

    // Gallery items
    document.querySelectorAll('[data-gallery-item]').forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        scale: 0.9,
        delay: index * 0.08,
        ease: 'back.out(1.2)'
      });
    });

    // Testimonials
    document.querySelectorAll('.testimonial').forEach((test, index) => {
      gsap.from(test, {
        scrollTrigger: {
          trigger: test,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });

    // Profesoras cards
    document.querySelectorAll('.profesor-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        delay: index * 0.1,
        ease: 'power3.out'
      });
    });
  }

  // ========== Contact Form ==========
  function initContactForm() {
    const form = document.querySelector('[data-form="contact"]');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const nombre = formData.get('nombre');
      const email = formData.get('email');
      const edad = formData.get('edad');
      const disciplina = formData.get('disciplina');
      const mensaje = formData.get('mensaje');

      // Basic validation
      if (!nombre || !email || !edad) {
        alert('Por favor, completa los campos obligatorios.');
        return;
      }

      // Email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
      }

      // Prepare WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `Hola Danza Chic!\n\nNombre: ${nombre}\nEmail: ${email}\nEdad de la niña: ${edad}\nDisciplina de interés: ${disciplina || 'No especificada'}\nMensaje: ${mensaje || 'Sin mensaje adicional'}`
      );

      // Redirect to WhatsApp
      window.open(`https://wa.me/584124567890?text=${whatsappMessage}`, '_blank');

      // Show success and reset
      alert('¡Gracias! Te redirigimos a WhatsApp para agendar la clase.');
      form.reset();
    });
  }

  // ========== Smooth Scrolling for Anchor Links ==========
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ========== Initialize All ==========
  function initAll() {
    safe(() => initNavigation(), 'Navigation');
    safe(() => initReveal(), 'Reveal');
    safe(() => initGSAP(), 'GSAP');
    safe(() => initContactForm(), 'ContactForm');
    safe(() => initSmoothScroll(), 'SmoothScroll');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // Expose window object for debugging
  window.__danzaChic = {
    version: '1.0.0',
    initAll: initAll
  };
})();
