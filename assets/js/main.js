/**
 * MOLLA JOHIRUL ISLAM SOBUJ - PORTFOLIO INTERACTION ENGINE
 * Redoyan-Inspired Cybernetic Web Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initHeader();
  initProjects();
  initTerminal();
  initReceiptModal();
  initDhakaClock();
  initContactForm();
  initAudioFeedback();
});

/* ==========================================================================
   1. REDOYAN-STYLE LOADER
   ========================================================================== */
function initLoader() {
  const loader = document.getElementById('loader-screen');
  const percentEl = document.getElementById('loader-percent');
  const enterBtn = document.getElementById('loader-enter-btn');
  if (!loader || !percentEl) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 6) + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      percentEl.textContent = '100%';
      if (enterBtn) {
        enterBtn.classList.remove('opacity-0', 'pointer-events-none');
        enterBtn.classList.add('opacity-100');
      }
      // Auto-enter after brief pause if user hasn't clicked
      setTimeout(dismissLoader, 900);
    } else {
      percentEl.textContent = `${progress}%`;
    }
  }, 45);

  function dismissLoader() {
    if (!loader.classList.contains('loaded')) {
      loader.classList.add('loaded');
      playCyberSound(650, 0.15, 'triangle');
    }
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', dismissLoader);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !loader.classList.contains('loaded')) {
      dismissLoader();
    }
  });
}

/* ==========================================================================
   2. CUSTOM MAGNETIC FLUID CURSOR
   ========================================================================== */
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover expansion triggers
  const interactiveSelector = 'a, button, input, textarea, .project-card, .terminal-window, .cyber-card, [data-cursor="pointer"]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ==========================================================================
   3. HEADER, SCROLLSPY & MOBILE MENU
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.glass-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scrollspy
    const sections = document.querySelectorAll('section[id]');
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* ==========================================================================
   4. PROJECTS RENDERING, FILTERING & DETAIL MODAL
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!container || typeof projectsData === 'undefined') return;

  function renderProjects(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card group cursor-pointer';
      card.setAttribute('data-id', p.id);
      
      const techBadges = p.technologies.slice(0, 4).map(t => `<span class="tech-tag-chip">${t}</span>`).join('');
      const liveBtn = p.liveUrl 
        ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors" onclick="event.stopPropagation();">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
           </a>`
        : `<span class="text-xs font-mono text-zinc-500 flex items-center gap-1.5"><i class="fa-solid fa-lock"></i> Client/Internal</span>`;

      card.innerHTML = `
        <div class="project-card-image-wrap">
          <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.onerror=null; this.src='assets/img/projects/ngen-it.png';">
          <div class="project-number-badge">#${String(idx + 1).padStart(2, '0')}</div>
          <div class="project-category-tag">${p.categoryLabel}</div>
        </div>
        <div class="p-6 flex flex-col flex-grow justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono text-purple-400 tracking-wider uppercase font-semibold">${p.badge}</span>
              ${liveBtn}
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">${p.title}</h3>
            <p class="text-zinc-400 text-sm line-clamp-2 mb-4 leading-relaxed">${p.tagline}</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${techBadges}
              ${p.technologies.length > 4 ? `<span class="tech-tag-chip text-zinc-400">+${p.technologies.length - 4}</span>` : ''}
            </div>
            <div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
              <span>View Architecture & Specs</span>
              <i class="fa-solid fa-arrow-right transform group-hover:translate-x-1.5 transition-transform text-purple-400"></i>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(p));
      container.appendChild(card);
    });
  }

  // Filter clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-purple-600', 'text-white', 'border-purple-400');
        b.classList.add('bg-white/5', 'text-zinc-400', 'border-white/10');
      });
      btn.classList.add('bg-purple-600', 'text-white', 'border-purple-400');
      btn.classList.remove('bg-white/5', 'text-zinc-400', 'border-white/10');
      renderProjects(btn.dataset.category);
      playCyberSound(480, 0.08, 'sine');
    });
  });

  renderProjects('all');
}

/* Project Modal */
function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-body');
  if (!modal || !body) return;

  const metricsHtml = project.metrics ? project.metrics.map(m => `
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <div class="text-lg font-bold font-mono text-purple-300">${m.value}</div>
      <div class="text-xs text-zinc-400 mt-1 uppercase tracking-wider">${m.label}</div>
    </div>
  `).join('') : '';

  const techChips = project.technologies.map(t => `<span class="tech-tag-chip text-sm px-3 py-1">${t}</span>`).join('');
  const liveAction = project.liveUrl 
    ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-neon text-sm">
         <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Platform
       </a>`
    : `<div class="px-4 py-2.5 rounded-full bg-zinc-800 text-zinc-400 text-sm font-mono flex items-center gap-2">
         <i class="fa-solid fa-lock"></i> Internal Enterprise Platform
       </div>`;

  body.innerHTML = `
    <div class="relative w-full h-72 md:h-96 overflow-hidden rounded-t-2xl bg-zinc-950">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover object-top" onerror="this.src='assets/img/projects/ngen-it.png';">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0f0a1c] via-transparent to-black/30"></div>
      <div class="absolute top-4 left-4 flex gap-2">
        <span class="project-number-badge text-sm">#${project.id}</span>
        <span class="project-category-tag">${project.categoryLabel}</span>
      </div>
    </div>
    <div class="p-6 md:p-8 space-y-6">
      <div>
        <span class="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">${project.badge}</span>
        <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">${project.title}</h2>
        <p class="text-purple-200/90 text-sm md:text-base mt-2 font-medium">${project.tagline}</p>
      </div>

      ${metricsHtml ? `<div class="grid grid-cols-2 md:grid-cols-4 gap-3">${metricsHtml}</div>` : ''}

      <div>
        <h4 class="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-purple-400"></i> System Architecture & Key Highlights
        </h4>
        <p class="text-zinc-300 text-sm md:text-base leading-relaxed bg-white/[0.02] p-5 rounded-2xl border border-white/5">
          ${project.description}
        </p>
      </div>

      <div>
        <h4 class="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <i class="fa-solid fa-microchip text-purple-400"></i> Technology Stack
        </h4>
        <div class="flex flex-wrap gap-2">
          ${techChips}
        </div>
      </div>

      <div class="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          ${liveAction}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary-cyber text-sm">
              <i class="fa-brands fa-github"></i> GitHub Profile
            </a>
          ` : ''}
        </div>
        <button onclick="closeProjectModal()" class="text-xs font-mono text-zinc-400 hover:text-white px-4 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all">
          Close [ESC]
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  playCyberSound(520, 0.1, 'sine');
}

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeReceiptModal();
  }
});

/* ==========================================================================
   5. INTERACTIVE DEV TERMINAL (REDOYAN-STYLE PLAYGROUND)
   ========================================================================== */
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  if (!terminalInput || !terminalOutput) return;

  const history = [];
  let historyIdx = -1;

  const commands = {
    help: `Available commands:
  <span class="text-purple-400">about</span>      - Summary & background of Molla Johirul Islam Sobuj
  <span class="text-purple-400">skills</span>     - Full-stack, Analytics & Architecture expertise
  <span class="text-purple-400">projects</span>   - List 12 live production deployments & SaaS platforms
  <span class="text-purple-400">experience</span> - Professional career history (Fast IT, Ngen IT)
  <span class="text-purple-400">pos</span>        - Print realistic 80mm/58mm Thermal POS receipt simulation
  <span class="text-purple-400">gtm</span>        - Dispatch simulated Server-Side GTM DataLayer conversion event
  <span class="text-purple-400">metrics</span>    - High-throughput production stats
  <span class="text-purple-400">contact</span>    - Email, WhatsApp, Phone & GitHub details
  <span class="text-purple-400">hire</span>       - Notice period & availability status
  <span class="text-purple-400">cat cv.txt</span> - Raw resume overview
  <span class="text-purple-400">clear</span>      - Clear terminal screen`,

    about: `<span class="text-cyan-400 font-bold">MOLLA JOHIRUL ISLAM SOBUJ</span> - Software Engineer & Full-Stack Laravel Developer
Dhaka, Bangladesh | Johirulsobuj10@gmail.com | +880 1721-551970
• 3+ years production experience designing & shipping scalable web applications, REST APIs, SaaS platforms, POS systems & e-commerce portals.
• Strong in Laravel 10/11, PHP 8.x, MySQL optimization, GTM/sGTM server-side tracking, Meta CAPI & AI automation workflows (OpenAI, Make, n8n).`,

    skills: `<span class="text-purple-300 font-bold">CORE TECHNICAL COMPETENCIES:</span>
[Backend]     Laravel 10/11, PHP 8.x, Eloquent ORM, REST API Design, Queues, Microservices
[Database]    MySQL, Schema Normalization, Migrations & Seeders, Indexing & Query Tuning
[Tracking]    Google Tag Manager (Web & Server-side sGTM), DataLayer, Meta Pixel & CAPI, GA4
[Automation]  OpenAI / Claude API, n8n, Make, Zapier, Webhooks, Courier & SMS Gateways
[Payments]    SSLCommerz, bKash, Nagad, Stripe, SteadFast & Pathao Courier APIs
[POS Billing] Thermal Receipt Printing (80mm / 58mm), Barcode Scanning, Cash Drawer
[Frontend]    Tailwind CSS, Bootstrap 5, Alpine.js, JavaScript (ES6+), Responsive UI`,

    projects: `<span class="text-green-400 font-bold">12 PRODUCTION DEPLOYMENTS & LIVE PROJECTS:</span>
1.  <span class="text-purple-400">MediFlow</span>           - Pharmacy SaaS & POS (10k+ medicine sync, 80/58mm thermal billing)
2.  <span class="text-purple-400">NGen IT Ltd.</span>        - B2B E-Commerce & Corporate (4,000+ products, RFQ flow)
3.  <span class="text-purple-400">SM Cloud POS</span>        - Cloud POS & E-Com (SteadFast, Pathao, bKash, Stripe)
4.  <span class="text-purple-400">Fast Tech</span>           - Premium E-Commerce Solutions (fasttech.com.bd)
5.  <span class="text-purple-400">Fast IT</span>             - Corporate Website & Portal (fastit.com.bd)
6.  <span class="text-purple-400">TechFocus Ltd.</span>      - Corporate Technology Portal (techfocusltd.com)
7.  <span class="text-purple-400">Restaurant POS</span>      - KDS Kitchen Display & Order Dispatch
8.  <span class="text-purple-400">SM Shop</span>             - 3D E-Commerce with Flash-Deals & Vouchers
9.  <span class="text-purple-400">La Preepies</span>         - E-Commerce with GTM, sGTM & Meta CAPI Deduplication
10. <span class="text-purple-400">AERO Drone</span>          - Modern Product Showcase Web Application
11. <span class="text-purple-400">Sports Athlete</span>      - Athlete Brand Portfolio & Calendar
12. <span class="text-purple-400">SM Cloud IT</span>         - Corporate Technology SaaS Suite`,

    experience: `<span class="text-yellow-400 font-bold">CAREER HISTORY:</span>
• <span class="text-white font-bold">Laravel Developer</span> @ <span class="text-purple-400">Fast IT, Dhaka</span> [Jan 2026 - Present]
  - Architect & maintain production web apps with Laravel & PHP (SaaS, POS, E-Commerce).
  - High-throughput RESTful APIs, MySQL optimization, Tailwind CSS & Bootstrap 5.
• <span class="text-white font-bold">Full Stack Laravel Developer</span> @ <span class="text-purple-400">Ngen IT, Dhaka</span> [Jan 2025 - Jan 2026]
  - Engineered full-stack portals, RBAC access control, multi-tenant auth & AJAX interactions.
• <span class="text-white font-bold">Private Tutor & Online Educator</span> [Jun 2019 - Present]
  - Teach ICT, Computer Science, Mathematics & English.`,

    metrics: `<span class="text-cyan-400 font-bold">PRODUCTION METRICS:</span>
• Total Production Experience: 3+ Years
• Live Deployments: 9+ Enterprise Platforms
• MediFlow Medicine Database: 10,000+ Formulations Synchronized
• NGen IT B2B Catalog: 4,000+ Hardware/Software Products across 400+ Brands
• Tracking Accuracy: 99.2% Server-Side Deduplication with Meta CAPI`,

    contact: `<span class="text-green-400 font-bold">DIRECT CONTACT CHANNELS:</span>
• Email:    <a href="mailto:Johirulsobuj10@gmail.com" class="text-purple-400 underline">Johirulsobuj10@gmail.com</a>
• Phone:    <a href="tel:+8801721551970" class="text-purple-400 underline">+880 1721-551970</a>
• WhatsApp: <a href="https://wa.me/8801721551970" target="_blank" class="text-purple-400 underline">Chat on WhatsApp</a>
• GitHub:   <a href="https://github.com/sobuj069" target="_blank" class="text-purple-400 underline">github.com/sobuj069</a>
• Location: Dhaka, Bangladesh (UTC+6)`,

    hire: `<span class="text-green-400 font-bold">AVAILABILITY STATUS:</span>
• Notice Period: Immediate / 15 Days Notice
• Role Preference: Full-time (On-site / Remote / Hybrid)
• Working Timezone: UTC+6 (Flexible for US, UK, EU & APAC overlap)`,

    gtm: `<span class="text-cyan-400">>>> DISPATCHING sGTM EVENT [purchase]...</span>
{
  "event": "purchase",
  "event_id": "EVT_${Date.now()}",
  "ecommerce": {
    "transaction_id": "TXN_774921",
    "value": 1450.00,
    "currency": "BDT",
    "items": [
      { "item_name": "MediFlow Cloud License", "price": 1450.00, "quantity": 1 }
    ]
  },
  "user_data": {
    "country": "BD",
    "ip_address": "client_masked",
    "user_agent": "Mozilla/5.0"
  }
}
<span class="text-green-400">✓ Meta CAPI Deduplication: Match Confirmed</span>
<span class="text-green-400">✓ GA4 Measurement Protocol: 204 No Content</span>`,

    artisan: `<span class="text-purple-400">Available simulated commands:</span>
  php artisan list
  php artisan migrate --seed
  php artisan queue:work --tries=3
  php artisan pos:generate-receipt
  php artisan gtm:sync-datalayer`,

    'cat cv.txt': `MOLLA JOHIRUL ISLAM SOBUJ
Software Engineer & Full Stack Laravel Developer | Dhaka, Bangladesh
Education: B.Sc in CSE, City University, Dhaka (CGPA: 3.28 / 4.00)
Portfolio: sobuj069.github.io/Personal_Portfolio
Tech: Laravel 10/11, PHP 8, MySQL, sGTM, Meta CAPI, Make/n8n, Tailwind CSS
Open to Full-time and Remote engineering opportunities.`
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = terminalInput.value.trim();
      const cmd = raw.toLowerCase();
      terminalInput.value = '';

      if (raw) {
        history.push(raw);
        historyIdx = history.length;
      }

      // Add to terminal view
      const line = document.createElement('div');
      line.className = 'mb-2';
      line.innerHTML = `<span class="terminal-prompt">visitor@sobuj-dev:~$</span> <span class="text-white font-bold">${escapeHtml(raw)}</span>`;
      terminalOutput.appendChild(line);

      playCyberSound(400, 0.05, 'square');

      if (cmd === 'clear') {
        terminalOutput.innerHTML = '';
        return;
      }

      if (cmd === 'pos') {
        openReceiptModal();
        const res = document.createElement('div');
        res.className = 'text-green-400 font-mono mb-3';
        res.innerHTML = `> Opening 80mm/58mm Thermal Receipt Simulator... [OK]`;
        terminalOutput.appendChild(res);
      } else if (commands[cmd]) {
        const res = document.createElement('div');
        res.className = 'text-zinc-300 font-mono mb-3 whitespace-pre-wrap leading-relaxed';
        res.innerHTML = commands[cmd];
        terminalOutput.appendChild(res);
      } else if (cmd === '') {
        // empty
      } else {
        const err = document.createElement('div');
        err.className = 'text-red-400 font-mono mb-3';
        err.innerHTML = `Command not recognized: '${escapeHtml(raw)}'. Type <span class="text-purple-400 font-bold">help</span> to view all commands.`;
        terminalOutput.appendChild(err);
      }

      const body = terminalOutput.parentElement;
      body.scrollTop = body.scrollHeight;
    } else if (e.key === 'ArrowUp') {
      if (historyIdx > 0) {
        historyIdx--;
        terminalInput.value = history[historyIdx] || '';
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < history.length - 1) {
        historyIdx++;
        terminalInput.value = history[historyIdx] || '';
      } else {
        historyIdx = history.length;
        terminalInput.value = '';
      }
    }
  });

  // Fast command pills
  document.querySelectorAll('.terminal-quick-cmd').forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.dataset.cmd;
      terminalInput.value = cmd;
      terminalInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      terminalInput.focus();
    });
  });
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

/* ==========================================================================
   6. THERMAL POS RECEIPT GENERATOR (MEDIFLOW & CLOUD POS SHOWCASE)
   ========================================================================== */
function initReceiptModal() {
  const triggerBtn = document.getElementById('trigger-pos-demo');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', openReceiptModal);
  }
}

window.openReceiptModal = function() {
  const modal = document.getElementById('receipt-modal');
  const paper = document.getElementById('receipt-paper-content');
  if (!modal || !paper) return;

  const invoiceNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  paper.innerHTML = `
    <div class="text-center pb-3 border-b border-dashed border-gray-400">
      <h2 class="text-xl font-black tracking-wider text-black">MEDIFLOW PHARMACY</h2>
      <p class="text-xs text-gray-600">Multi-Tenant Cloud POS System</p>
      <p class="text-[11px] text-gray-500">Dhaka, Bangladesh • Hotline: 01721-551970</p>
    </div>

    <div class="py-2 border-b border-dashed border-gray-400 text-[11px] space-y-0.5 text-gray-700">
      <div class="flex justify-between"><span>Bill No: <b>${invoiceNo}</b></span> <span>Counter: POS-01</span></div>
      <div class="flex justify-between"><span>Date: ${dateStr}</span> <span>Cashier: Molla Sobuj</span></div>
      <div class="flex justify-between"><span>Customer: Walk-in Client</span> <span>Status: Paid</span></div>
    </div>

    <div class="py-2 border-b border-dashed border-gray-400 text-xs">
      <table class="w-full text-left">
        <thead>
          <tr class="border-b border-gray-300 text-[11px] uppercase">
            <th class="py-1">Item</th>
            <th class="py-1 text-center">Qty</th>
            <th class="py-1 text-right">Price</th>
            <th class="py-1 text-right">Total</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-[11px]">
          <tr>
            <td class="py-1">Napa Extra 500mg</td>
            <td class="py-1 text-center">20</td>
            <td class="py-1 text-right">৳ 3.00</td>
            <td class="py-1 text-right">৳ 60.00</td>
          </tr>
          <tr>
            <td class="py-1">Seclo 20mg Capsule</td>
            <td class="py-1 text-center">30</td>
            <td class="py-1 text-right">৳ 7.00</td>
            <td class="py-1 text-right">৳ 210.00</td>
          </tr>
          <tr>
            <td class="py-1">Fexo 120mg Tablet</td>
            <td class="py-1 text-center">10</td>
            <td class="py-1 text-right">৳ 9.50</td>
            <td class="py-1 text-right">৳ 95.00</td>
          </tr>
          <tr>
            <td class="py-1">Ceevit 250mg Chewable</td>
            <td class="py-1 text-center">15</td>
            <td class="py-1 text-right">৳ 2.50</td>
            <td class="py-1 text-right">৳ 37.50</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="py-2 border-b border-dashed border-gray-400 text-xs space-y-1">
      <div class="flex justify-between text-gray-600"><span>Sub Total:</span> <span>৳ 402.50</span></div>
      <div class="flex justify-between text-gray-600"><span>Govt VAT (5%):</span> <span>৳ 20.12</span></div>
      <div class="flex justify-between text-gray-600"><span>Special Discount:</span> <span>-৳ 12.62</span></div>
      <div class="flex justify-between text-sm font-black text-black pt-1 border-t border-gray-300">
        <span>NET PAYABLE:</span> <span>৳ 410.00</span>
      </div>
      <div class="flex justify-between text-[11px] text-gray-600 pt-1">
        <span>Payment Method:</span> <span class="font-bold text-gray-900">bKash QR / Cashless</span>
      </div>
    </div>

    <div class="pt-3 text-center space-y-2">
      <div class="font-mono text-xs tracking-widest text-gray-700">||| | ||||| || |||||| |||| | |||</div>
      <p class="text-[10px] text-gray-500">Fast 80/58mm ESC/POS Thermal Protocol</p>
      <p class="text-[11px] font-semibold text-gray-800">*** THANK YOU FOR VISITING ***</p>
    </div>
  `;

  modal.classList.add('open');
  playCyberSound(600, 0.12, 'sawtooth');
};

window.closeReceiptModal = function() {
  const modal = document.getElementById('receipt-modal');
  if (modal) {
    modal.classList.remove('open');
  }
};

/* ==========================================================================
   7. LIVE DHAKA TIME (UTC+6)
   ========================================================================== */
function initDhakaClock() {
  const clockEl = document.getElementById('dhaka-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // UTC + 6 hours
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const dhakaTime = new Date(utc + (3600000 * 6));
    const timeStr = dhakaTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    clockEl.textContent = `${timeStr} (UTC+6)`;
  }
  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   8. CONTACT FORM, COPY HELPERS & TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting...`;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Message Received!`;
        submitBtn.classList.remove('btn-primary-neon');
        submitBtn.classList.add('bg-green-600', 'text-white');
        showToast('Message sent successfully! Johirul will reply within 12 hours.');
        form.reset();

        playCyberSound(800, 0.2, 'sine');

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.classList.add('btn-primary-neon');
          submitBtn.classList.remove('bg-green-600');
        }, 3500);
      }, 1000);
    });
  }

  // Copy helper buttons
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
        playCyberSound(700, 0.08, 'triangle');
      });
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById('cyber-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cyber-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-[#151022] border border-purple-500/50 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-mono text-sm transform translate-y-20 opacity-0 transition-all duration-300';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-green-400 text-lg"></i> <span>${msg}</span>`;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

/* ==========================================================================
   9. AUDIO SYNTH FX (TACTILE CYBER CLICKS)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioFeedback() {
  const toggleBtn = document.getElementById('sound-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      toggleBtn.innerHTML = soundEnabled 
        ? `<i class="fa-solid fa-volume-high text-purple-400"></i>` 
        : `<i class="fa-solid fa-volume-xmark text-zinc-500"></i>`;
      showToast(soundEnabled ? 'Cyber audio effects enabled' : 'Cyber audio muted');
    });
  }
}

function playCyberSound(freq = 440, duration = 0.1, type = 'sine') {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    // Audio context not allowed or failed
  }
}
