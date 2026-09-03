/**
 * Structured Portfolio Projects Data with High-Resolution Local Screenshots
 * Molla Johirul Islam Sobuj - Full-Stack Laravel Developer
 */

const projectsData = [
  {
    id: "mediflow-pos",
    title: "MediFlow POS (SM Cloud IT)",
    subtitle: "Cloud-Based Pharmacy Management SaaS & Real-Time POS",
    category: "saas",
    badge: "Enterprise SaaS",
    badgeColor: "emerald",
    icon: "fa-solid fa-prescription-bottle-medical",
    image: "assets/img/projects/mediflow-pos.png",
    domain: "smcloudit.top",
    liveUrl: "https://smcloudit.top/",
    githubUrl: null,
    summary: "Complete cloud-based pharmacy billing, inventory, and analytics software with barcode POS terminal and automatic drug directory sync.",
    description: "MediFlow POS is an enterprise-grade cloud SaaS built on Laravel and MySQL tailored for pharmacies, clinics, and medical retail chains. It features high-speed POS billing with thermal (80mm/58mm), A4, and A5 receipt generation, a preloaded database of 10,000+ medicines with one-click synchronization, automated batch and expiry date tracking with 30/60/90-day warning alerts, customer prescription logs, and real-time daily profit/loss calculation.",
    tags: ["Laravel", "PHP 8.x", "MySQL", "RESTful APIs", "Cloud SaaS", "POS Billing", "Thermal Printing", "Inventory Analytics"],
    stats: [
      { label: "Drug Directory", value: "10,000+" },
      { label: "Billing Speed", value: "< 1.5s" },
      { label: "Alert Schedule", value: "30/60/90 Days" },
      { label: "Architecture", value: "Multi-Tenant" }
    ],
    highlights: [
      "Barcode-driven POS checkout terminal with keyboard shortcut acceleration and multi-format thermal/A4/A5 printing.",
      "Synchronized national medicine directory with automated generic name lookup and supplier pricing indexing.",
      "Comprehensive batch tracking with automated expiration risk classification and stock liquidation notices.",
      "Real-time analytics dashboard presenting daily profit & loss margins, highest-grossing medicines, and cashier audit logs."
    ]
  },
  {
    id: "restaurant-pos",
    title: "Kacchi Dine — Restaurant POS & Table Management",
    subtitle: "Cloud-Based Restaurant POS, Kitchen Order Ticket (KOT) & Billing System",
    category: "saas",
    badge: "Restaurant POS SaaS",
    badgeColor: "amber",
    icon: "fa-solid fa-utensils",
    image: "assets/img/projects/restaurant-pos.jpg",
    domain: "resturentpos.smcloudit.top",
    liveUrl: "https://resturentpos.smcloudit.top/",
    githubUrl: null,
    summary: "Real-time restaurant point-of-sale, interactive table floor management, Kitchen Order Ticket (KOT) printing, menu categorization, and revenue analytics.",
    description: "Kacchi Dine Restaurant POS is a dedicated enterprise management software designed for restaurants, cafes, and multi-branch food chains. Engineered with Laravel, MySQL, and modern JavaScript, it features an interactive table layout/floor plan (dine-in vs. takeaway), fast touch/keyboard billing, split billing, Kitchen Order Ticket (KOT) auto-routing, thermal receipt printing (80mm/58mm), real-time ingredient & inventory depletion, and daily sales/VAT reporting.",
    tags: ["Laravel", "PHP 8.x", "MySQL", "Cloud SaaS", "POS Billing", "KOT Printing", "Table Management", "Inventory Control"],
    stats: [
      { label: "Table Layout", value: "Interactive Grid" },
      { label: "Billing Terminal", value: "Touch / KOT" },
      { label: "Receipt Format", value: "Thermal 80mm" },
      { label: "Sales Analytics", value: "Real-Time VAT" }
    ],
    highlights: [
      "Interactive table floor plan showing occupied vs. available tables with live dining timer tracking.",
      "Multi-category fast order checkout with automated Kitchen Order Ticket (KOT) dispatch to kitchen stations.",
      "Thermal receipt printing with custom VAT, service charges, discounts, and split billing methods.",
      "Inventory depletion system deducting recipe raw materials automatically per food order."
    ]
  },
  {
    id: "sm-ecommerce",
    title: "SM Shop — Fashion & Apparel E-Commerce",
    subtitle: "Full-Stack Laravel E-Commerce with Multi-Payment & GTM DataLayer",
    category: "ecommerce",
    badge: "Live E-Commerce",
    badgeColor: "rose",
    icon: "fa-solid fa-bag-shopping",
    image: "assets/img/projects/sm-ecommerce.jpg",
    domain: "e-commerce.smcloudit.top",
    liveUrl: "https://e-commerce.smcloudit.top/",
    githubUrl: null,
    summary: "High-performance lifestyle & apparel e-commerce store with real-time stock sync, dynamic filters, bKash/Nagad/COD checkout, and full-funnel GTM/GA4 conversion tracking.",
    description: "SM Shop is a production-grade e-commerce application developed on Laravel, PHP 8.x, and MySQL. It offers a rich catalog of modern apparel, real-time product variations (sizes/colors), dynamic price filtering, responsive shopping cart drawer, guest/authenticated checkout, multi-gateway integration (bKash, Nagad, SSLCommerz, Cash on Delivery), and complete custom DataLayer events for Google Tag Manager and Meta Pixel CAPI.",
    tags: ["Laravel", "PHP 8.x", "MySQL", "Google Tag Manager", "DataLayer", "Payment Gateways", "Tailwind CSS", "REST APIs"],
    stats: [
      { label: "Catalog Filter", value: "Multi-Attribute" },
      { label: "Payment APIs", value: "bKash / COD" },
      { label: "DataLayer", value: "100% Funnel" },
      { label: "Page Load", value: "< 1.1s" }
    ],
    highlights: [
      "Custom DataLayer implementation tracking standard events: view_item, add_to_cart, begin_checkout, and purchase.",
      "Integrated digital payment gateways (bKash, Nagad, SSLCommerz) alongside automated Cash on Delivery order verification.",
      "Dynamic multi-attribute catalog filtering (size, color, price slider, and category hierarchy).",
      "Automated order invoice generation, customer SMS/email notifications, and responsive mobile-first UI."
    ]
  },
  {
    id: "lapreepies",
    title: "La Preepies",
    subtitle: "Luxury Fashion & Beauty E-Commerce Store with Full Funnel Analytics",
    category: "ecommerce",
    badge: "E-Commerce + GTM",
    badgeColor: "purple",
    icon: "fa-solid fa-gem",
    image: "assets/img/projects/lapreepies.png",
    domain: "lapreepies.com",
    liveUrl: "https://lapreepies.com/",
    githubUrl: null,
    summary: "Full-featured luxury beauty & fashion e-commerce store with multi-tier category catalog, cash on delivery checkout, and end-to-end DataLayer/GTM tracking.",
    description: "La Preepies is a modern lifestyle e-commerce web platform offering skincare, makeup, bags, and luxury accessories. The platform features deeply nested product catalog hierarchies (Category > Subcategory > Child Category), dynamic brand and price filtration, flash sale countdown engines, and hot trending showcases. Crucially, it incorporates complete Google Tag Manager (GTM) and custom DataLayer architecture for e-commerce event measurement.",
    tags: ["Laravel", "MySQL", "Google Tag Manager", "DataLayer", "Server-Side Tracking", "JavaScript", "Tailwind CSS", "REST APIs"],
    stats: [
      { label: "Tracking Coverage", value: "100% Funnel" },
      { label: "Product Taxonomy", value: "3-Tier Deep" },
      { label: "Checkout Options", value: "COD + Digital" },
      { label: "Page Load", value: "< 1.2s" }
    ],
    highlights: [
      "Custom DataLayer integration firing standard e-commerce events: view_item, view_item_list, select_item, add_to_cart, remove_from_cart, begin_checkout, and purchase.",
      "Client-side & server-side GTM configurations for GA4 and Meta Pixel conversion measurement without ad-blocker loss.",
      "Dynamic catalog filters for price ranges, brand affiliations, variant attributes (colors/sizes), and in-stock statuses.",
      "Frictionless single-page and multi-step checkout workflow with automatic shipping rate calculators."
    ]
  },
  {
    id: "dadabhaai",
    title: "DadaBhaai Multi-Vendor Platform",
    subtitle: "Multi-Merchant E-Commerce & Business Directory",
    category: "ecommerce",
    badge: "Marketplace SaaS",
    badgeColor: "sky",
    icon: "fa-solid fa-store",
    image: "assets/img/projects/dadabhaai.jpg",
    domain: "dadabhaai.com",
    liveUrl: "https://dadabhaai.com/",
    githubUrl: null,
    summary: "Scalable multi-vendor e-commerce platform allowing individual merchant storefronts, product listings, and split order management.",
    description: "DadaBhaai is a multi-vendor marketplace engine designed with Laravel, MySQL, Tailwind CSS, and JavaScript. It enables independent merchants to set up their digital storefronts, upload inventory, manage stock, and track fulfilled sales while the central platform handles transactions, commissions, and customer support.",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "RBAC", "Multi-Vendor", "Order Splitting"],
    stats: [
      { label: "Vendor Support", value: "Unlimited Stores" },
      { label: "RBAC Tiers", value: "Admin/Vendor/User" },
      { label: "UI Library", value: "Tailwind CSS" },
      { label: "Order Logic", value: "Auto-Split" }
    ],
    highlights: [
      "Comprehensive multi-level authentication and role management (Admin, Vendor, Customer).",
      "Vendor dashboard with individual sales charts, inventory upload wizards, and withdrawal request systems.",
      "Automated commission deduction logic and aggregated multi-store shopping cart experience."
    ]
  },
  {
    id: "fast-it",
    title: "Fast IT — Enterprise IT Solutions",
    subtitle: "Official Corporate Web Platform for Fast IT",
    category: "corporate",
    badge: "Current Production",
    badgeColor: "indigo",
    icon: "fa-solid fa-bolt-lightning",
    image: "assets/img/projects/fast-it.png",
    domain: "fastit.com.bd",
    liveUrl: "https://fastit.com.bd/",
    githubUrl: null,
    summary: "Official corporate website and IT service management portal for Fast IT, developed and maintained as active Laravel Developer.",
    description: "Fast IT is a premier IT solutions and enterprise software consulting company. Built on Laravel and MySQL with modern Bootstrap/JavaScript frontends, the platform manages B2B client consultation bookings, automated service quote requests, project case study showcases, and customer support inquiries.",
    tags: ["Laravel", "PHP 8.x", "MySQL", "Bootstrap 5", "JavaScript", "REST APIs", "Live Production"],
    stats: [
      { label: "Status", value: "Active Production" },
      { label: "Role", value: "Laravel Developer" },
      { label: "Page Speed", value: "< 1s Caching" },
      { label: "Lead Pipeline", value: "Automated CRM" }
    ],
    highlights: [
      "Engineered high-performance REST APIs for client consultation workflows and customer lead pipelines.",
      "Optimized MySQL database indexing, caching strategies, and responsive UI components for cross-device compatibility.",
      "Built dynamic service management modules and quote generator tools for business clients."
    ]
  },
  {
    id: "fast-tech",
    title: "Fast Tech — Technology Innovations & Services",
    subtitle: "Digital Technology & Software Services Platform",
    category: "corporate",
    badge: "Live Production",
    badgeColor: "blue",
    icon: "fa-solid fa-microchip",
    image: "assets/img/projects/fast-tech.png",
    domain: "fasttech.com.bd",
    liveUrl: "https://fasttech.com.bd/",
    githubUrl: null,
    summary: "Dedicated corporate and digital service platform for Fast Tech, showcasing software innovations, hardware solutions, and client consulting.",
    description: "Fast Tech delivers cutting-edge technology innovations, networking, and digital solutions. Built and maintained using Laravel, PHP, and modern frontend technologies, featuring interactive technology service catalogs, dynamic lead capture, automated inquiry routing, and search engine optimization.",
    tags: ["Laravel", "PHP 8.x", "MySQL", "Bootstrap 5", "JavaScript", "SEO Meta Engine", "Lead Intake"],
    stats: [
      { label: "Status", value: "Live Production" },
      { label: "Ecosystem", value: "Fast Tech BD" },
      { label: "Lead Pipeline", value: "100% Automated" },
      { label: "SEO Indexing", value: "Schema.org Meta" }
    ],
    highlights: [
      "Architected clean service showcase pages with interactive client inquiry and quote request engines.",
      "Integrated fast server-side caching and optimized database queries ensuring sub-second response times.",
      "Implemented comprehensive SEO metadata controls and automated lead notifications."
    ]
  },
  {
    id: "ngen-it",
    title: "Ngen IT — Corporate Technology Portal",
    subtitle: "Enterprise Software Services & Lead Management Portal",
    category: "corporate",
    badge: "Enterprise Web",
    badgeColor: "blue",
    icon: "fa-solid fa-network-wired",
    image: "assets/img/projects/ngen-it.png",
    domain: "ngenitltd.com",
    liveUrl: "https://www.ngenitltd.com/",
    githubUrl: null,
    summary: "Official corporate website and business solution showcase for Ngen IT, built during full-stack developer tenure.",
    description: "The Ngen IT corporate web application acts as the digital flagship for an international IT solutions and software agency. Designed with Laravel, Bootstrap, and JavaScript, it features dynamic service presentation cards, client case study repositories, interactive solution selectors, enterprise contact/lead capture forms, and comprehensive SEO optimization.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript", "SEO Optimization", "Lead Engine"],
    stats: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Performance", value: "Optimized Caching" },
      { label: "SEO Indexing", value: "Schema.org & Meta" },
      { label: "Architecture", value: "Modular MVC" }
    ],
    highlights: [
      "High-converting lead generation forms with automated CRM routing and anti-spam verification.",
      "Modular dynamic admin control over service offerings, customer testimonials, and career job openings.",
      "Responsive, cross-browser compatible interface engineered for lightning-fast international client access."
    ]
  },
  {
    id: "techfocus",
    title: "TechFocus LTD",
    subtitle: "Corporate IT Agency & Service Management System",
    category: "corporate",
    badge: "Corporate Portal",
    badgeColor: "blue",
    icon: "fa-solid fa-laptop-code",
    image: "assets/img/projects/techfocus.png",
    domain: "techfocusltd.com",
    liveUrl: "https://www.techfocusltd.com/",
    githubUrl: null,
    summary: "Corporate web portal and client lead tracking platform for a premier information technology solutions firm.",
    description: "TechFocus LTD provides enterprise technology consulting and software engineering services. This platform offers a CMS for dynamic service and case study management, custom client inquiry tracking pipelines with status tags (New, Contacted, In Progress, Closed), and automated SEO metadata control.",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "jQuery", "SEO Meta Controller", "Lead CRM"],
    stats: [
      { label: "CMS Engine", value: "Dynamic Admin" },
      { label: "Lead Pipeline", value: "Status Tracked" },
      { label: "SEO Score", value: "95+ Lighthouse" },
      { label: "Security", value: "CSRF / Sanitized" }
    ],
    highlights: [
      "Custom administrative panel for rapid content, case study, and blog publication without code modification.",
      "Lead tracking dashboard with instant notifications and assignment to specific account managers.",
      "High-speed semantic HTML5 architecture tailored for optimal search engine crawling."
    ]
  }
];

// Skills Matrix Dataset
const skillsData = {
  backend: [
    { name: "Laravel (10/11)", level: 95, exp: "3+ Years", highlight: "MVC, Eloquent, Queues, Jobs, Events, Middleware, Service Providers" },
    { name: "PHP (8.x)", level: 92, exp: "4+ Years", highlight: "OOP, Modern Syntax, Composer, Design Patterns, Memory Efficiency" },
    { name: "MySQL Database", level: 90, exp: "4+ Years", highlight: "Schema Design, Complex Joins, Indexing, Query Optimization" },
    { name: "RESTful API Design", level: 95, exp: "3+ Years", highlight: "JSON:API Standards, Sanctum Token Auth, Rate Limiting, Versioning" },
    { name: "Authentication & RBAC", level: 92, exp: "3+ Years", highlight: "Multi-guard, Role-Based Access Control, Spatie Permission, OTP" },
    { name: "Payment Gateways", level: 88, exp: "2+ Years", highlight: "SSLCommerz, bKash, Nagad, Stripe, Cash on Delivery" }
  ],
  analytics: [
    { name: "Google Tag Manager (GTM)", level: 95, exp: "Specialized", highlight: "Client & Server-Side Containers, Custom Triggers, Variables, Consent Mode v2" },
    { name: "Server-Side Tracking (sGTM)", level: 92, exp: "Specialized", highlight: "First-party tracking domains, ad-blocker bypass, Cloud Run & Stape setup" },
    { name: "DataLayer Architecture", level: 95, exp: "Specialized", highlight: "Standard eCommerce schemas (view_item, add_to_cart, initiate_checkout, purchase)" },
    { name: "Meta Pixel & Conversion API (CAPI)", level: 94, exp: "Specialized", highlight: "Browser Pixel + Server CAPI, Event Deduplication, Event Match Quality (EMQ)" },
    { name: "Google Analytics 4 (GA4)", level: 92, exp: "Specialized", highlight: "Custom Dimensions/Metrics, E-Commerce Funnels, Explorations & Conversion Tracking" },
    { name: "Conversion & Event Tracking", level: 90, exp: "Specialized", highlight: "Form submissions, button clicks, dynamic purchase value tracking, custom events" }
  ],
  frontend: [
    { name: "Tailwind CSS", level: 94, exp: "3+ Years", highlight: "Modern utility-first responsive UI, Dark Mode, Custom Themes" },
    { name: "JavaScript (ES6+) & Motion", level: 90, exp: "3+ Years", highlight: "Async/Await, DOM, Motion JS spring animations, Modules, Event Loop" },
    { name: "Bootstrap (4/5)", level: 95, exp: "4+ Years", highlight: "Grid System, Components, Custom SASS variables, Admin Themes" },
    { name: "jQuery / AJAX", level: 92, exp: "4+ Years", highlight: "Dynamic asynchronous data fetching, DOM animation, Event handling" },
    { name: "HTML5 & CSS3 / SASS", level: 95, exp: "4+ Years", highlight: "Semantic tags, CSS Flexbox/Grid, Keyframe animations" },
    { name: "Blade & Alpine.js", level: 92, exp: "2+ Years", highlight: "Reusable Blade components, Reactive micro-frontends, transitions" }
  ],
  ai_automation: [
    { name: "AI-Assisted Development", level: 95, exp: "Daily Driver", highlight: "High-velocity coding, test generation, refactoring, architecture review" },
    { name: "Prompt Engineering", level: 92, exp: "Advanced", highlight: "System prompts, structured JSON outputs, zero/few-shot framing" },
    { name: "Workflow Automation (Make / n8n / Zapier)", level: 88, exp: "Specialized", highlight: "Automated lead intake, webhook routing, notification bots" },
    { name: "AI API Integrations", level: 90, exp: "Specialized", highlight: "OpenAI GPT-4o API, embeddings, smart search, automated summarization" }
  ],
  devops_tools: [
    { name: "Git & Version Control", level: 94, exp: "Daily", highlight: "GitFlow, Branching, Pull Requests, Merge Conflict Resolution, GitHub Actions" },
    { name: "cPanel & Web Hosting", level: 95, exp: "4+ Years", highlight: "Domain/DNS configuration, SSL deployment, MySQL database setup, Cron jobs, File Manager" },
    { name: "Laragon & XAMPP", level: 95, exp: "Daily", highlight: "Virtual hosts, Apache/Nginx, PHP version switching, MySQL, Redis, Mailpit" },
    { name: "Composer & NPM", level: 92, exp: "Daily", highlight: "Package dependency management, scripts, modern build workflows" },
    { name: "Postman & REST API Testing", level: 90, exp: "3+ Years", highlight: "API collections, environment variables, automated request testing" }
  ]
};
