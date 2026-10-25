const projectsData = [
  {
    id: 1,
    title: "MediFlow - Pharmacy SaaS & POS",
    slug: "mediflow",
    category: "pos",
    categoryLabel: "SaaS & Cloud POS",
    badge: "Enterprise SaaS",
    image: "assets/img/projects/mediflow-pos.png",
    fallbackImage: "assets/img/projects/mediflow-pos.png",
    featured: true,
    tagline: "Multi-tenant Pharmacy SaaS with 10,000+ medicine sync & thermal billing",
    description: "Multi-tenant pharmacy SaaS built with Laravel, featuring a 10,000+ medicine directory sync and real-time inventory. Features 80/58mm thermal POS billing with role-based access for pharmacy staff, expiry date tracking, and automated stock alert dispatch.",
    technologies: ["Laravel 11", "PHP 8.2", "MySQL", "Thermal POS (80/58mm)", "Multi-Tenant", "Barcode Scanner", "Tailwind CSS"],
    metrics: [
      { label: "Medicine Directory", value: "10,000+" },
      { label: "Receipt Printing", value: "80mm / 58mm" },
      { label: "Stock Sync", value: "Real-time" },
      { label: "Architecture", value: "Multi-Tenant" }
    ],
    liveUrl: "",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 1
  },
  {
    id: 2,
    title: "NGen IT Ltd. - B2B E-Commerce & Corporate Portal",
    slug: "ngen-it",
    category: "ecommerce",
    categoryLabel: "B2B E-Commerce",
    badge: "Enterprise B2B",
    image: "assets/img/projects/ngen-it.png",
    fallbackImage: "assets/img/projects/ngen-it.png",
    featured: true,
    tagline: "High-throughput B2B portal hosting 4,000+ products across 400+ international brands",
    description: "Laravel-based corporate and B2B commerce portal: catalog of 4,000+ products across 400+ brands, dynamic RFQ / price-quotation flow, and separate client and partner authentication portals. Includes blogs, client stories, job-application module, and automated quotation generation.",
    technologies: ["Laravel", "PHP 8.x", "MySQL Schema Optimization", "RFQ Engine", "RBAC", "Tailwind CSS", "REST APIs"],
    metrics: [
      { label: "B2B Products", value: "4,000+" },
      { label: "Global Brands", value: "400+" },
      { label: "Client Portals", value: "Multi-Role" },
      { label: "Quotation Flow", value: "Instant RFQ" }
    ],
    liveUrl: "https://ngenitltd.com",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 2
  },
  {
    id: 3,
    title: "SM Cloud POS - Cloud POS & E-Commerce",
    slug: "sm-cloud-pos",
    category: "pos",
    categoryLabel: "SaaS & Cloud POS",
    badge: "Live Production",
    image: "assets/img/projects/restaurant-pos.jpg",
    fallbackImage: "assets/img/projects/restaurant-pos.jpg",
    featured: true,
    tagline: "Multi-outlet cloud POS with courier automation & payment gateways",
    description: "Multi-outlet cloud POS featuring counter billing, barcode scanning, thermal receipts, batch inventory management, and live profit reports. Integrated SteadFast and Pathao courier booking APIs, bKash / Nagad / SSLCommerz / Stripe payments, SMS due reminders, and hardware catalog.",
    technologies: ["Laravel", "PHP 8.x", "MySQL", "SteadFast API", "Pathao API", "bKash / Nagad", "Stripe", "Thermal POS"],
    metrics: [
      { label: "Outlets", value: "Multi-Outlet" },
      { label: "Courier Integration", value: "Automated" },
      { label: "Gateways", value: "bKash/Nagad/Stripe" },
      { label: "Receipts", value: "Thermal 80/58mm" }
    ],
    liveUrl: "https://demopos.smcloudit.top",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 3
  },
  {
    id: 4,
    title: "Fast Tech - Premium E-Commerce Solutions",
    slug: "fast-tech",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    badge: "Client Production",
    image: "assets/img/projects/fast-tech.png",
    fallbackImage: "assets/img/projects/fast-tech.png",
    featured: true,
    tagline: "Conversion-optimized e-commerce solution for Bangladesh consumer market",
    description: "Premium e-commerce solutions website for the Bangladesh market, built with a high-performance responsive front-end, frictionless checkout, dynamic product variations, and seamless inventory management.",
    technologies: ["Laravel", "PHP 8.x", "MySQL", "JavaScript", "Tailwind CSS", "SSLCommerz"],
    metrics: [
      { label: "Performance", value: "Sub-second" },
      { label: "UX Flow", value: "1-Click Checkout" },
      { label: "Market", value: "Bangladesh" },
      { label: "Responsive", value: "Mobile-First" }
    ],
    liveUrl: "https://fasttech.com.bd",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 4
  },
  {
    id: 5,
    title: "La Preepies - E-Commerce & Server-Side Tracking",
    slug: "la-preepies",
    category: "tracking",
    categoryLabel: "Analytics & Tracking",
    badge: "sGTM & Meta CAPI",
    image: "assets/img/projects/lapreepies.png",
    fallbackImage: "assets/img/projects/lapreepies.png",
    featured: true,
    tagline: "Full-funnel e-commerce tracking with server-side GTM & Meta CAPI deduplication",
    description: "Production e-commerce store with end-to-end Google Tag Manager (sGTM) server-side tracking, comprehensive DataLayer architecture, and Meta Pixel with Conversion API (CAPI) event-ID deduplication for 100% accurate attribution.",
    technologies: ["GTM Web & Server", "sGTM", "DataLayer", "Meta CAPI", "GA4", "Laravel", "Mixpanel"],
    metrics: [
      { label: "Tracking Type", value: "Server-Side (sGTM)" },
      { label: "Deduplication", value: "Event-ID Meta CAPI" },
      { label: "Data Quality", value: "98.5% Accuracy" },
      { label: "Analytics", value: "GA4 & Mixpanel" }
    ],
    liveUrl: "",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 5
  },
  {
    id: 6,
    title: "Fast IT - Company Web Portal",
    slug: "fast-it",
    category: "corporate",
    categoryLabel: "Corporate & Portals",
    badge: "Company Portal",
    image: "assets/img/projects/fast-it.png",
    fallbackImage: "assets/img/projects/fast-it.png",
    featured: true,
    tagline: "Official corporate website and services platform developed and maintained at Fast IT",
    description: "Corporate website and web platform developed and maintained at Fast IT. Features modern aesthetics, interactive service showcases, case studies, quote inquiry modules, and recruitment pipelines.",
    technologies: ["Laravel", "Bootstrap 5", "JavaScript", "MySQL", "SEO Optimization"],
    metrics: [
      { label: "Role", value: "Laravel Developer" },
      { label: "Platform", value: "Corporate Services" },
      { label: "SEO Score", value: "95+" },
      { label: "Status", value: "Live Production" }
    ],
    liveUrl: "https://fastit.com.bd",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 6
  },
  {
    id: 7,
    title: "Restaurant POS & Kitchen Display System (KDS)",
    slug: "restaurant-pos",
    category: "pos",
    categoryLabel: "SaaS & Cloud POS",
    badge: "Hospitality POS",
    image: "assets/img/projects/restaurant-pos.jpg",
    fallbackImage: "assets/img/projects/restaurant-pos.jpg",
    featured: false,
    tagline: "Real-time kitchen order dispatch and multi-role dining management",
    description: "Specialized restaurant point-of-sale platform featuring separate authenticated roles for Admin, Waiters, Cashier, and Kitchen Display System (KDS) screens. Live order status updates with zero refresh via websockets and AJAX.",
    technologies: ["Laravel", "PHP", "AJAX", "MySQL", "KDS Screen", "Thermal Print"],
    metrics: [
      { label: "KDS Screen", value: "Real-Time Dispatch" },
      { label: "Roles", value: "Admin / Cashier / KDS" },
      { label: "Billing", value: "Table & Counter" }
    ],
    liveUrl: "https://resturentpos.smcloudit.top",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 7
  },
  {
    id: 8,
    title: "SM Shop - 3D E-Commerce Store",
    slug: "sm-shop",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    badge: "Interactive UI",
    image: "assets/img/projects/sm-ecommerce.jpg",
    fallbackImage: "assets/img/projects/sm-ecommerce.jpg",
    featured: false,
    tagline: "Modern online store with category browsing, flash deals and voucher system",
    description: "Laravel online store with category browsing, product detail pages, dynamic cart and checkout, flash-deal countdown timer, coupon/voucher discount engine, and customer profile order tracking.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Flash Deals Engine", "Tailwind CSS"],
    metrics: [
      { label: "Discount Engine", value: "Voucher / Promo" },
      { label: "Flash Deals", value: "Live Timer" },
      { label: "Cart", value: "Real-time AJAX" }
    ],
    liveUrl: "https://e-commerce.smcloudit.top",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 8
  },
  {
    id: 9,
    title: "TechFocus Ltd. - Corporate Technology Portal",
    slug: "techfocus",
    category: "corporate",
    categoryLabel: "Corporate & Portals",
    badge: "Corporate Client",
    image: "assets/img/projects/techfocus.png",
    fallbackImage: "assets/img/projects/techfocus.png",
    featured: false,
    tagline: "Corporate technology company website delivered with responsive modern UI",
    description: "Corporate technology company website delivered with modern user interface, responsive layout, service catalogs, contact inquiry management, and lead capture workflows.",
    technologies: ["Laravel", "PHP", "Bootstrap 5", "MySQL", "Lead Engine"],
    metrics: [
      { label: "Client", value: "TechFocus Ltd." },
      { label: "UI", value: "Responsive & Modern" },
      { label: "Lead Gen", value: "Automated" }
    ],
    liveUrl: "https://techfocusltd.com",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 9
  },
  {
    id: 10,
    title: "AERO - Drone Camera Showcase Platform",
    slug: "aero-drone",
    category: "corporate",
    categoryLabel: "Corporate & Showcase",
    badge: "Hardware Showcase",
    image: "assets/img/projects/drone-camera.jpg",
    fallbackImage: "assets/img/projects/drone-camera.jpg",
    featured: false,
    tagline: "Modern product showcase web application with smooth interactive previews",
    description: "Modern, responsive product-showcase web application built with Laravel. Features cinematic video integrations, interactive technical specification comparators, and accessory ordering.",
    technologies: ["Laravel", "Tailwind CSS", "JavaScript", "Video Integration", "Interactive Specs"],
    metrics: [
      { label: "Showcase", value: "4K Aerial Tech" },
      { label: "Comparator", value: "Interactive" },
      { label: "Frontend", value: "Tailwind CSS" }
    ],
    liveUrl: "https://drone-camera.smcloudit.top",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 10
  },
  {
    id: 11,
    title: "Motorsport Athlete Brand Portfolio",
    slug: "sports-motorsport",
    category: "corporate",
    categoryLabel: "Corporate & Showcase",
    badge: "Brand Showcase",
    image: "assets/img/projects/dadabhaai.jpg",
    fallbackImage: "assets/img/projects/dadabhaai.jpg",
    featured: false,
    tagline: "Athlete brand portfolio with career history, race calendar and sponsor portal",
    description: "Front-end build of an athlete brand site: career history, race calendar with countdown, media photo & video gallery, sponsor showcase, and press contact management.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation", "Media Gallery"],
    metrics: [
      { label: "Calendar", value: "Live Countdown" },
      { label: "Media", value: "High-Res Gallery" },
      { label: "Design", value: "High-Octane Theme" }
    ],
    liveUrl: "https://sports.smcloudit.top",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 11
  },
  {
    id: 12,
    title: "SM Cloud IT - Corporate Technology Portal",
    slug: "sm-cloud-it",
    category: "corporate",
    categoryLabel: "Corporate & Portals",
    badge: "Corporate Portal",
    image: "assets/img/projects/dadabhaai.png",
    fallbackImage: "assets/img/projects/dadabhaai.png",
    featured: false,
    tagline: "Corporate company website presenting SM Cloud IT products and live projects",
    description: "Corporate company website presenting the SM Cloud IT suite of software products, client testimonials, service offerings, and live SaaS project demonstrations.",
    technologies: ["Laravel", "PHP", "Bootstrap 5", "MySQL", "Product Matrix"],
    metrics: [
      { label: "Products", value: "SaaS Ecosystem" },
      { label: "Client Base", value: "B2B & Retail" },
      { label: "Portal", value: "Corporate Suite" }
    ],
    liveUrl: "https://smcloudit.top",
    githubUrl: "https://github.com/sobuj069",
    featuredOrder: 12
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
