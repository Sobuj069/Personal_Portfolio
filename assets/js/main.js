/**
 * Alpine.js & Motion Portfolio Controller & Reactive State
 * Molla Johirul Islam Sobuj - Full-Stack Laravel Developer
 */

document.addEventListener('alpine:init', () => {
  Alpine.data('portfolioApp', () => ({
    // Theme State
    theme: localStorage.getItem('sobuj_theme') || 'dark',
    mobileMenuOpen: false,

    // Dynamic Typing Role State
    currentRole: 'Full-Stack Laravel Developer',
    roles: [
      "Full-Stack Laravel Developer",
      "GTM & Server-Side Tracking Specialist",
      "DataLayer & Meta Pixel (CAPI) Architect",
      "AI Automation & Workflow Integrator",
      "Cloud SaaS & E-Commerce Builder"
    ],
    roleIdx: 0,
    charIdx: 0,
    isDeleting: false,

    // Hero Interactive Terminal Tabs
    activeCodeTab: 'php',
    codeOutput: '',
    isRunningCode: false,

    // Interactive Tracking Flow Simulator
    isSimulating: false,
    simStep: 0,
    simLog: 'Click "Test Live Flow" to trace real-time DataLayer & Server-Side execution.',

    // Projects Filtering, Slider & Modal
    projects: projectsData || [],
    activeCategory: 'all',
    viewMode: 'slider', // 'slider' or 'grid'
    currentSlide: 0,
    isPaused: false,
    autoplayTimer: null,
    modalOpen: false,
    selectedProject: null,

    // Recruiter Mode & HR Quick Brief Modal
    recruiterModalOpen: false,

    // Image Lightbox Viewer
    lightboxOpen: false,
    lightboxImage: '',
    lightboxTitle: '',
    lightboxDomain: '',
    lightboxLiveUrl: '',

    // Skills Matrix Tabs
    skills: skillsData || {},
    activeSkillGroup: 'backend',

    // Toast Notification System
    toast: {
      show: false,
      message: ''
    },

    // Initialization
    init() {
      // Apply initial theme
      document.documentElement.setAttribute('data-theme', this.theme);
      
      // Start typing loop
      this.startTyping();

      // Start slider autoplay
      this.startSliderAutoplay();

      // Setup Scroll Progress & Motion Observers
      this.setupMotionEffects();

      // Keyboard modal closer
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (this.recruiterModalOpen) this.closeRecruiterModal();
          else if (this.lightboxOpen) this.closeLightbox();
          else if (this.modalOpen) this.closeProjectModal();
        } else if (e.key === 'ArrowRight' && !this.modalOpen && !this.lightboxOpen && !this.recruiterModalOpen && this.viewMode === 'slider') {
          this.nextSlide();
        } else if (e.key === 'ArrowLeft' && !this.modalOpen && !this.lightboxOpen && !this.recruiterModalOpen && this.viewMode === 'slider') {
          this.prevSlide();
        }
      });
    },

    // Motion & Scroll Observers
    setupMotionEffects() {
      // 1. Scroll Progress Bar
      const progressBar = document.getElementById('scroll-progress');
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        if (progressBar) {
          progressBar.style.transform = `scaleX(${progress})`;
        }
      }, { passive: true });

      // 2. Intersection Observer for Scroll Reveals
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Animate counters if present
            const counters = entry.target.querySelectorAll('.counter-val');
            counters.forEach(c => this.animateCounter(c));
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('[data-motion]').forEach(el => revealObserver.observe(el));

      // 3. Subtle 3D Card Tilt on Hover
      this.$nextTick(() => {
        this.initCardTilt();
      });
    },

    initCardTilt() {
      document.querySelectorAll('.interactive-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / rect.height) * 6;
          const rotateY = (x / rect.width) * 6;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    },

    animateCounter(el) {
      if (el.dataset.animated) return;
      el.dataset.animated = "true";
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = 0;
      const startTime = performance.now();

      const update = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quad
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * ease);
        el.textContent = `${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${target}${suffix}`;
        }
      };
      requestAnimationFrame(update);
    },

    // Theme Switcher
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('sobuj_theme', this.theme);
    },

    // Typing Effect Loop
    startTyping() {
      const typeStep = () => {
        const fullTxt = this.roles[this.roleIdx];

        if (this.isDeleting) {
          this.currentRole = fullTxt.substring(0, this.charIdx - 1);
          this.charIdx--;
        } else {
          this.currentRole = fullTxt.substring(0, this.charIdx + 1);
          this.charIdx++;
        }

        let speed = this.isDeleting ? 40 : 80;

        if (!this.isDeleting && this.charIdx === fullTxt.length) {
          speed = 2200; // Pause after finished typing
          this.isDeleting = true;
        } else if (this.isDeleting && this.charIdx === 0) {
          this.isDeleting = false;
          this.roleIdx = (this.roleIdx + 1) % this.roles.length;
          speed = 400;
        }

        setTimeout(typeStep, speed);
      };

      typeStep();
    },

    // Filtered Projects Getter
    get filteredProjects() {
      if (this.activeCategory === 'all') return this.projects;
      return this.projects.filter(p => p.category === this.activeCategory);
    },

    // Category Selector
    setCategory(category) {
      this.activeCategory = category;
      this.currentSlide = 0;
      this.$nextTick(() => {
        this.initCardTilt();
      });
    },

    // Slider Controls
    startSliderAutoplay() {
      if (this.autoplayTimer) clearInterval(this.autoplayTimer);
      this.autoplayTimer = setInterval(() => {
        if (!this.isPaused && this.viewMode === 'slider' && !this.modalOpen && !this.lightboxOpen) {
          this.nextSlide();
        }
      }, 4500);
    },

    nextSlide() {
      const total = this.filteredProjects.length;
      if (total <= 1) return;
      this.currentSlide = (this.currentSlide + 1) % total;
    },

    prevSlide() {
      const total = this.filteredProjects.length;
      if (total <= 1) return;
      this.currentSlide = (this.currentSlide - 1 + total) % total;
    },

    goToSlide(index) {
      this.currentSlide = index;
    },

    // Current Active Skill Items
    get currentSkills() {
      return this.skills[this.activeSkillGroup] || [];
    },

    // Project Modal Handlers
    openProjectModal(project) {
      this.selectedProject = project;
      this.modalOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeProjectModal() {
      this.modalOpen = false;
      document.body.style.overflow = '';
      setTimeout(() => {
        this.selectedProject = null;
      }, 250);
    },

    // Recruiter Modal Handlers
    openRecruiterModal() {
      this.recruiterModalOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeRecruiterModal() {
      this.recruiterModalOpen = false;
      if (!this.modalOpen && !this.lightboxOpen) {
        document.body.style.overflow = '';
      }
    },

    // Lightbox Modal Handlers
    openLightbox(project) {
      this.lightboxImage = project.image;
      this.lightboxTitle = project.title;
      this.lightboxDomain = project.domain;
      this.lightboxLiveUrl = project.liveUrl;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeLightbox() {
      this.lightboxOpen = false;
      if (!this.modalOpen) {
        document.body.style.overflow = '';
      }
    },

    // Terminal Code Runner Simulator
    runCode() {
      if (this.isRunningCode) return;
      this.isRunningCode = true;
      this.codeOutput = 'Executing environment verification...';

      setTimeout(() => {
        if (this.activeCodeTab === 'php') {
          this.codeOutput = `[OK] PHP 8.2 & Laravel 11 Kernel Booted.\n[OK] Eloquent Models & DB Schema Indexed.\n[OK] 9+ Production Systems Active (Fast IT, MediFlow, Kacchi Dine, SM Shop, etc.).`;
        } else if (this.activeCodeTab === 'gtm') {
          this.codeOutput = `[OK] DataLayer Initialized: event='purchase'\n[OK] GTM Client Handshake: Container GTM-5X9K2\n[OK] Server-Side sGTM & Meta CAPI Event Verified.`;
        } else {
          this.codeOutput = `[OK] OpenAI GPT-4o API Connected.\n[OK] Webhook Orchestrator: Active (n8n / Make)\n[OK] Automated Workflow Efficiency: +300%`;
        }
        this.isRunningCode = false;
      }, 700);
    },

    // Interactive Server-Side Tracking Simulator
    runTrackingSimulation() {
      if (this.isSimulating) return;
      this.isSimulating = true;
      this.simStep = 1;
      this.simLog = 'Step 1: User completes order on Laravel Checkout Controller -> dataLayer.push({ event: "purchase", transaction_id: "TXN-9982", value: 145.00 })';

      setTimeout(() => {
        this.simStep = 2;
        this.simLog = 'Step 2: Client-side GTM intercepts event payload and sends encrypted HTTP POST to First-Party Server Container (sGTM).';
      }, 1200);

      setTimeout(() => {
        this.simStep = 3;
        this.simLog = 'Step 3: Server-Side Container strips client PII, validates payload, and matches First-Party cookie tokens.';
      }, 2400);

      setTimeout(() => {
        this.simStep = 4;
        this.simLog = 'Step 4: Outbound Server APIs successfully delivered -> Google Analytics 4 (Purchase Recorded) | Meta Pixel & CAPI (Deduplicated 100% via Event ID).';
        this.isSimulating = false;
      }, 3600);
    },

    // Copy to Clipboard with Animated Toast
    copyToClipboard(text, label = 'Copied to clipboard!') {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(label);
      }).catch(err => {
        console.error('Copy failed: ', err);
      });
    },

    // Show Toast
    showToast(message) {
      this.toast.message = message;
      this.toast.show = true;
      setTimeout(() => {
        this.toast.show = false;
      }, 2800);
    },

    // Contact Form Handler
    submitContact(e) {
      const name = e.target.contactName.value;
      const email = e.target.contactEmail.value;
      const message = e.target.contactMessage.value;

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Sobuj,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      
      window.open(`mailto:Johirulsobuj10@gmail.com?subject=${subject}&body=${body}`, '_blank');
      this.showToast(`Thank you ${name}! Opening your email client...`);
      e.target.reset();
    }
  }));
});

