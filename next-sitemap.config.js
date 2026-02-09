/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // ============== BASIC CONFIGURATION ==============
  siteUrl: "https://portfolio.gauravkumawat.online",
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // ============== SITEMAP GENERATION ==============
  sitemapSize: 5000, // Maximum URLs per sitemap file (reduced for better performance)
  changefreq: "daily", // Default change frequency
  priority: 0.7, // Default priority for all pages
  autoLastmod: true, // Automatically add lastmod with current date
  sitemapBaseFileName: "sitemap", // Base name for sitemap files
  outDir: "./public", // Output directory

  // ============== ROBOTS.TXT ADVANCED CONFIGURATION ==============
  robotsTxtOptions: {
    policies: [
      // ========== UNIVERSAL CRAWLERS ==========
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/api/private/",
          "/admin/",
          "/_next/static/",
          "/_next/image/",
          "/private/",
          "/*.json$",
          "/*?*utm_source=",
          "/*?*session_id=",
          "/*?*ref=",
          "/404",
          "/500",
          "/error",
        ],
        crawlDelay: 0,
      },

      // ========== GOOGLEBOT (Primary) ==========
      {
        userAgent: "Googlebot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },

      // ========== GOOGLEBOT IMAGE ==========
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/images/", "/projects/", "/blog/", "/_next/image/"],
        disallow: ["/api/", "/private/"],
      },

      // ========== GOOGLEBOT VIDEO ==========
      {
        userAgent: "Googlebot-Video",
        allow: ["/", "/videos/", "/projects/"],
        disallow: ["/api/"],
      },

      // ========== GOOGLEBOT MOBILE ==========
      {
        userAgent: "Googlebot-Mobile",
        allow: "/",
        crawlDelay: 0,
      },

      // ========== GOOGLEBOT NEWS ==========
      {
        userAgent: "Googlebot-News",
        allow: ["/", "/blog/", "/news/"],
        disallow: ["/api/"],
      },

      // ========== BINGBOT (Microsoft) ==========
      {
        userAgent: "Bingbot",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 0,
      },

      // ========== BINGBOT MEDIA ==========
      {
        userAgent: "MSNBot-Media",
        allow: ["/", "/images/", "/videos/"],
        disallow: ["/api/"],
      },

      // ========== SLURP (Yahoo) ==========
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 1,
      },

      // ========== DUCKDUCKBOT ==========
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 0,
      },

      // ========== BAIDUSPIDER (China) ==========
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 1,
      },

      // ========== YANDEXBOT (Russia) ==========
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 1,
      },

      // ========== YANDEX IMAGES ==========
      {
        userAgent: "YandexImages",
        allow: ["/", "/images/", "/projects/"],
        disallow: ["/api/"],
      },

      // ========== SOCIAL MEDIA BOTS ==========
      {
        userAgent: "facebot", // Facebook
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Pinterestbot",
        allow: ["/", "/images/"],
        disallow: ["/api/"],
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "TelegramBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Discordbot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Slackbot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "redditbot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ========== ARCHIVE & OTHER BOTS ==========
      {
        userAgent: "ia_archiver", // Alexa/Archive.org
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "archive.org_bot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Sogou", // Chinese search engine
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 2,
      },
      {
        userAgent: "Exabot", // French search engine
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 2,
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PetalBot", // Huawei
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 1,
      },

      // ========== SEO TOOLS (Allow for verification) ==========
      {
        userAgent: "Chrome-Lighthouse",
        allow: "/",
      },
      {
        userAgent: "Screaming Frog SEO Spider",
        allow: "/",
        disallow: ["/api/"],
      },

      // ========== BAD BOTS - BLOCK COMPLETELY ==========
      {
        userAgent: [
          "MJ12bot",
          "AhrefsBot",
          "SemrushBot",
          "dotbot",
          "rogerbot",
          "BLEXBot",
          "DataForSeoBot",
          "serpstatbot",
          "turnitinbot",
          "spbot",
          "MegaIndex.ru",
          "JobboerseBot",
          "SeekportBot",
          "HTTrack",
          "WebReaper",
          "WebCopier",
          "Offline Explorer",
          "Teleport",
          "TeleportPro",
          "WebStripper",
          "larbin",
          "emailcollector",
          "emailsiphon",
          "emailwolf",
          "ExtractorPro",
          "CopyRightCheck",
          "crescent",
          "wget",
          "SiteSnagger",
          "ProWebWalker",
          "CheeseBot",
          "Custo",
          "DISCo",
          "Download Demon",
        ],
        disallow: ["/"],
      },
    ],

    // ========== ADDITIONAL SITEMAPS ==========
    additionalSitemaps: [
      // Main Sitemap Index
      "https://portfolio.gauravkumawat.online/sitemap-index.xml",

      // Core Sitemaps
      "https://portfolio.gauravkumawat.online/sitemap.xml",
      "https://portfolio.gauravkumawat.online/sitemap-0.xml",
      "https://portfolio.gauravkumawat.online/server-sitemap.xml",

      // Specialized Sitemaps
      "https://portfolio.gauravkumawat.online/pages-sitemap.xml",
      "https://portfolio.gauravkumawat.online/blog-sitemap.xml",
      "https://portfolio.gauravkumawat.online/projects-sitemap.xml",
      "https://portfolio.gauravkumawat.online/image-sitemap.xml",
      "https://portfolio.gauravkumawat.online/video-sitemap.xml",
      "https://portfolio.gauravkumawat.online/news-sitemap.xml",
      "https://portfolio.gauravkumawat.online/categories-sitemap.xml",
      "https://portfolio.gauravkumawat.online/tags-sitemap.xml",
      "https://portfolio.gauravkumawat.online/services-sitemap.xml",
      "https://portfolio.gauravkumawat.online/testimonials-sitemap.xml",
      "https://portfolio.gauravkumawat.online/case-studies-sitemap.xml",
      "https://portfolio.gauravkumawat.online/portfolio-sitemap.xml",
      "https://portfolio.gauravkumawat.online/mobile-sitemap.xml",
      "https://portfolio.gauravkumawat.online/legal-sitemap.xml",

      // Language Specific Sitemaps
      "https://portfolio.gauravkumawat.online/en-sitemap.xml",
      "https://portfolio.gauravkumawat.online/hi-sitemap.xml",
    ],

    // Host declaration
    host: "https://portfolio.gauravkumawat.online",
  },

  // ============== EXCLUDE ROUTES ==============
  exclude: [
    "/api/*", // Exclude API routes
    "/api/private/*",
    "/admin/*", // Exclude admin pages
    "/private/*", // Any private routes
    "/_next/*", // Exclude Next.js internal routes
    "/_next/static/*",
    "/_next/image/*",
    "/404", // Exclude error pages
    "/500",
    "/error",
    "/*.json", // Exclude JSON files
    "/manifest.json",
    "/sw.js", // Service worker
    "/workbox-*.js",
  ],

  // ============== TRANSFORM FUNCTION (Advanced Customization) ==============
  transform: async (config, path) => {
    // Custom priority and changefreq based on route
    const customPriority = {
      "/": 1.0,
      "/about": 0.9,
      "/projects": 0.9,
      "/portfolio": 0.9,
      "/skills": 0.8,
      "/contact": 0.8,
      "/services": 0.8,
      "/blog": 0.7,
      "/testimonials": 0.7,
      "/case-studies": 0.8,
      "/faq": 0.7,
      "/hire-me": 0.8,
      "/resume": 0.7,
      "/privacy-policy": 0.5,
      "/terms": 0.5,
      "/cookie-policy": 0.5,
    };

    const customChangefreq = {
      "/": "daily",
      "/about": "weekly",
      "/projects": "weekly",
      "/portfolio": "weekly",
      "/skills": "monthly",
      "/contact": "monthly",
      "/services": "monthly",
      "/blog": "daily",
      "/testimonials": "monthly",
      "/case-studies": "monthly",
      "/faq": "weekly",
      "/hire-me": "monthly",
      "/resume": "monthly",
      "/privacy-policy": "yearly",
      "/terms": "yearly",
      "/cookie-policy": "yearly",
    };

    return {
      loc: path, // URL of the page
      changefreq: customChangefreq[path] || config.changefreq,
      priority: customPriority[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  // ============== ADDITIONAL PATHS (Static pages not auto-detected) ==============
  additionalPaths: async (config) => {
    const result = [];

    // Additional static pages
    const additionalPages = [
      { path: '/services', priority: 0.8, changefreq: 'monthly' },
      { path: '/testimonials', priority: 0.7, changefreq: 'monthly' },
      { path: '/portfolio', priority: 0.9, changefreq: 'weekly' },
      { path: '/case-studies', priority: 0.8, changefreq: 'monthly' },
      { path: '/resume', priority: 0.7, changefreq: 'monthly' },
      { path: '/hire-me', priority: 0.8, changefreq: 'monthly' },
      { path: '/faq', priority: 0.7, changefreq: 'weekly' },
    ];

    additionalPages.forEach(page => {
      result.push({
        loc: page.path,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `https://portfolio.gauravkumawat.online${page.path}`,
            hreflang: 'en-IN',
          },
          {
            href: `https://portfolio.gauravkumawat.online${page.path}`,
            hreflang: 'en-US',
          },
          {
            href: `https://portfolio.gauravkumawat.online${page.path}`,
            hreflang: 'en-GB',
          },
          {
            href: `https://portfolio.gauravkumawat.online${page.path}`,
            hreflang: 'hi-IN',
          },
          {
            href: `https://portfolio.gauravkumawat.online${page.path}`,
            hreflang: 'x-default',
          },
        ],
      });
    });

    return result;
  },

  // ============== ALTERNATE LANGUAGE PAGES ==============
  alternateRefs: [
    {
      href: "https://portfolio.gauravkumawat.online",
      hreflang: "en-IN",
    },
    {
      href: "https://portfolio.gauravkumawat.online",
      hreflang: "en-US",
    },
    {
      href: "https://portfolio.gauravkumawat.online",
      hreflang: "en-GB",
    },
    {
      href: "https://portfolio.gauravkumawat.online",
      hreflang: "hi-IN", // Hindi support
    },
    {
      href: "https://portfolio.gauravkumawat.online",
      hreflang: "x-default", // Default for other languages
    },
  ],
};