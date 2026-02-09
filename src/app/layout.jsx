// layout.jsx (server component)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";
import Script from "next/script";
// import Analytics from "./components/Analytics";

/* ===========================
   METADATA (MAXIMUM SEO)
=========================== */
export const metadata = {
  title: {
    default: "Gaurav Kumawat — Full Stack Developer & Student | MERN Stack Expert India",
    template: "%s | Gaurav Kumawat - Full Stack Developer Portfolio"
  },
  description:
    "Gaurav Kumawat is a professional Full Stack Developer & Student from India specializing in Next.js, React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, and modern web development. Available for freelance projects and full-time opportunities. Explore innovative web applications, API development, and responsive design projects.",
  metadataBase: new URL("https://portfolio.gauravkumawat.online"),
  applicationName: "Gaurav Kumawat Portfolio",
  generator: "Next.js 14",
  category: "technology",
  classification: "Portfolio Website",
  abstract:
    "Official portfolio of Gaurav Kumawat, a Full Stack Developer specializing in modern web technologies including React, Next.js, Node.js, Express, MongoDB, and comprehensive web application development.",
  topic: "Full Stack Web Development",
  summary:
    "Gaurav Kumawat is a Full Stack Developer building scalable and high-performance web applications using cutting-edge technologies like Next.js, React, Node.js, and MongoDB.",
  keywords: [
    // PRIMARY KEYWORDS
    "Gaurav Kumawat",
    "Gaurav Kumawat Portfolio",
    "Gaurav Kumawat Developer",
    "Gaurav Kumawat Full Stack",
    
    // ROLE-BASED KEYWORDS
    "Full Stack Developer",
    "Full Stack Developer India",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "MERN Developer India",
    "JavaScript Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Developer",
    "Software Developer",
    
    // TECHNOLOGY-SPECIFIC
    "Next.js Developer",
    "Next.js 14 Developer",
    "React Developer",
    "React.js Developer",
    "React Developer India",
    "Node.js Developer",
    "Node.js Backend Developer",
    "Express Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    
    // SKILL-BASED
    "API Development",
    "RESTful API Developer",
    "Database Design",
    "Responsive Web Design",
    "Web Application Development",
    "Single Page Application",
    "Progressive Web Apps",
    "Server Side Rendering",
    "Static Site Generation",
    
    // LOCATION-BASED
    "Web Developer India",
    "Freelance Developer India",
    "Hire Full Stack Developer India",
    "Indian Web Developer",
    "Software Engineer India",
    
    // SERVICE-BASED
    "Freelance Web Developer",
    "Hire Full Stack Developer",
    "Web Development Services",
    "Custom Web Development",
    "E-commerce Development",
    "Portfolio Website Developer",
    
    // PLATFORM-SPECIFIC
    "Gaurav Kumawat GitHub",
    "Gaurav Kumawat LinkedIn",
    "Gaurav Kumawat Twitter",
    
    // LONG-TAIL KEYWORDS
    "Best Full Stack Developer India",
    "Hire MERN Stack Developer",
    "Next.js Portfolio Website",
    "React Portfolio Projects",
    "Full Stack Developer Portfolio",
    "Web Developer Portfolio India",
    
    // ADDITIONAL TECH KEYWORDS
    "Git Developer",
    "GitHub Developer",
    "Vercel Deployment",
    "Cloud Developer",
    "Modern Web Developer",
    "JAMstack Developer",
    "Serverless Developer",
    
    // EXPERTISE KEYWORDS
    "JavaScript Expert",
    "React Expert India",
    "Node.js Expert",
    "Full Stack Engineer",
    "Web Application Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    
    // PROJECT-BASED
    "Web App Developer",
    "SaaS Developer",
    "Dashboard Developer",
    "CMS Developer",
    "Blog Developer",
  ],
  authors: [
    { 
      name: "Gaurav Kumawat", 
      url: "https://portfolio.gauravkumawat.online" 
    }
  ],
  creator: "Gaurav Kumawat",
  publisher: "Gaurav Kumawat",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://portfolio.gauravkumawat.online",
    languages: {
      "en-IN": "https://portfolio.gauravkumawat.online",
      "en-US": "https://portfolio.gauravkumawat.online",
      "en-GB": "https://portfolio.gauravkumawat.online",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
    notranslate: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Gaurav Kumawat — Full Stack Developer | MERN Stack Expert",
    description:
      "Explore Gaurav Kumawat's full stack projects built using Next.js, React, Node.js, Express, and MongoDB. Professional web developer available for hire in India.",
    url: "https://portfolio.gauravkumawat.online",
    siteName: "Gaurav Kumawat Portfolio",
    images: [
      {
        url: "https://portfolio.gauravkumawat.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Kumawat Full Stack Developer Portfolio Preview",
        type: "image/png",
      },
      {
        url: "https://portfolio.gauravkumawat.online/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Gaurav Kumawat Developer",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "profile",
    countryName: "India",
    determiner: "the",
    emails: ["contact@gauravkumawat.online"], // Add your email
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kumawat — Full Stack Developer",
    description:
      "Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies. Available for freelance projects.",
    images: ["https://portfolio.gauravkumawat.online/og-image.png"],
    creator: "@gauravkumawat", // Add your Twitter handle
    site: "@gauravkumawat",
  },
  verification: {
    google: "your-google-verification-code", // Add from Google Search Console
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
    me: ["contact@gauravkumawat.online"], // Add your email
  },
  appleWebApp: {
    capable: true,
    title: "Gaurav Kumawat",
    statusBarStyle: "black-translucent",
  },
  other: {
    // ============== COVERAGE & DISTRIBUTION ==============
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "3 days",
    "target": "all",
    "audience": "Developers, Recruiters, Clients, Students, Technology Enthusiasts",
    "intended-audience": "Developers, HR Professionals, Business Owners",
    
    // ============== PAGE CLASSIFICATION ==============
    "page-topic": "Full Stack Developer Portfolio - Gaurav Kumawat",
    "page-type": "Portfolio, Professional Website",
    "content-type": "Portfolio Website, Web Developer Showcase",
    "doc-type": "Web Page, Portfolio",
    "doc-class": "Published, Professional",
    "doc-rights": "Public, Copyrighted",
    "resource-type": "Document, Portfolio",
    "classification": "Technology Portfolio, Web Development, Software Engineering",
    "category": "Technology, Web Development, Software Engineering, Programming",
    "subject": "Full Stack Web Development Portfolio, MERN Stack Projects",
    "topic": "Web Development, Programming, Technology, JavaScript, React, Node.js",
    
    // ============== SEARCH ENGINE DIRECTIVES ==============
    "google": "notranslate, nositelinkssearchbox",
    "googlebot": "index, follow, all, noarchive",
    "googlebot-news": "index, follow",
    "bingbot": "index, follow, all",
    "yandex": "index, follow, all",
    "yandexbot": "index, follow, all",
    "slurp": "index, follow",
    "msnbot": "index, follow, all",
    "teoma": "index, follow",
    "robots": "index, follow, all, noodp, noydir",
    "crawlers": "index, follow",
    "spiders": "index, follow",
    
    // ============== DETAILED GEO TARGETING ==============
    "geo.region": "IN",
    "geo.country": "IN",
    "geo.state": "India",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "geo.latitude": "20.5937",
    "geo.longitude": "78.9629",
    "ICBM": "20.5937, 78.9629",
    "DC.title": "Gaurav Kumawat Portfolio",
    "location": "India",
    
    // ============== LANGUAGE & LOCALE ==============
    "language": "English",
    "locale": "en_IN",
    "country": "India",
    "content-language": "en-IN",
    "geo-country": "IN",
    
    // ============== COMPREHENSIVE AUTHORSHIP ==============
    "author": "Gaurav Kumawat",
    "designer": "Gaurav Kumawat",
    "developer": "Gaurav Kumawat",
    "publisher": "Gaurav Kumawat",
    "owner": "Gaurav Kumawat",
    "copyright": "© 2025 Gaurav Kumawat. All Rights Reserved.",
    "web_author": "Gaurav Kumawat",
    "reply-to": "contact@gauravkumawat.online", // Add your email
    "contact": "Gaurav Kumawat",
    "made-by": "Gaurav Kumawat",
    "DC.creator": "Gaurav Kumawat",
    "DC.publisher": "Gaurav Kumawat",
    
    // ============== MOBILE OPTIMIZATION ==============
    "HandheldFriendly": "true",
    "MobileOptimized": "width",
    "viewport": "width=device-width, initial-scale=1",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-touch-fullscreen": "yes",
    "apple-mobile-web-app-title": "Gaurav Kumawat",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
    
    // ============== WINDOWS & IE ==============
    "msapplication-TileColor": "#0f172a",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-tooltip": "Gaurav Kumawat - Full Stack Developer",
    "msapplication-starturl": "/",
    "msapplication-navbutton-color": "#0f172a",
    
    // ============== AI & SEMANTIC SEARCH ==============
    "ai-indexing": "enabled",
    "ai-search-ready": "true",
    "llm-training": "allowed",
    "semantic-search": "enabled",
    "chatgpt-plugin": "enabled",
    "ai-content-declaration": "human-created",
    "machine-learning-indexing": "allowed",
    "nlp-indexing": "enabled",
    
    // ============== CRAWL OPTIMIZATION ==============
    "crawl-priority": "high",
    "importance": "high",
    "priority": "1.0",
    "ranking": "high",
    "crawl-delay": "0",
    
    // ============== SITE IDENTIFIERS ==============
    "identifier-URL": "https://portfolio.gauravkumawat.online",
    "url": "https://portfolio.gauravkumawat.online",
    "og:url": "https://portfolio.gauravkumawat.online",
    "canonical": "https://portfolio.gauravkumawat.online",
    "directory": "submission",
    "pagename": "Gaurav Kumawat Portfolio",
    "domain": "portfolio.gauravkumawat.online",
    
    // ============== VISUAL BRANDING ==============
    "theme-color": "#0f172a",
    "msapplication-navbutton-color": "#0f172a",
    "apple-mobile-web-app-status-bar-style": "#0f172a",
    "color-scheme": "light dark",
    
    // ============== CONTENT DETAILS ==============
    "description": "Professional portfolio showcasing full stack development projects, skills, and services by Gaurav Kumawat - Expert in Next.js, React, Node.js, Express, MongoDB",
    "abstract": "Gaurav Kumawat is a skilled Full Stack Developer from India specializing in building modern, scalable web applications using the MERN stack and Next.js framework",
    "summary": "Portfolio website featuring web development projects, technical skills, professional experience, and contact information for Gaurav Kumawat",
    
    // ============== CACHE & FRESHNESS ==============
    "cache-control": "public, max-age=3600, must-revalidate",
    "expires": "0",
    "pragma": "no-cache",
    "last-modified": new Date().toUTCString(),
    
    // ============== SOCIAL SIGNALS ==============
    "fb:app_id": "your-facebook-app-id", // Add if you have
    "og:type": "profile",
    "og:site_name": "Gaurav Kumawat Portfolio",
    "twitter:card": "summary_large_image",
    "twitter:domain": "portfolio.gauravkumawat.online",
    
    // ============== BUSINESS INFO ==============
    "business-type": "Freelance Web Development Services",
    "service": "Full Stack Web Development, Frontend Development, Backend Development",
    "availability": "Available for Hire",
    "employment-type": "Freelance, Contract, Full-time",
    
    // ============== TECHNICAL SPECS ==============
    "build-tool": "Next.js 14",
    "framework": "Next.js, React",
    "rendering": "SSR, SSG, CSR",
    "deployment": "Vercel",
    "tech-stack": "Next.js, React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS",
    
    // ============== DUBLIN CORE METADATA ==============
    "DC.title": "Gaurav Kumawat - Full Stack Developer Portfolio",
    "DC.creator": "Gaurav Kumawat",
    "DC.subject": "Web Development, Full Stack Development, Programming",
    "DC.description": "Professional portfolio of Gaurav Kumawat showcasing full stack development expertise",
    "DC.publisher": "Gaurav Kumawat",
    "DC.contributor": "Gaurav Kumawat",
    "DC.date": new Date().toISOString(),
    "DC.type": "Interactive Resource",
    "DC.format": "text/html",
    "DC.identifier": "https://portfolio.gauravkumawat.online",
    "DC.language": "en-IN",
    "DC.coverage": "Worldwide",
    "DC.rights": "© 2025 Gaurav Kumawat",
    
    // ============== PERFORMANCE HINTS ==============
    "dns-prefetch": "https://www.googletagmanager.com, https://fonts.googleapis.com",
    "preconnect": "https://fonts.gstatic.com",
    
    // ============== ACCESSIBILITY ==============
    "accessibility": "WCAG 2.1 Level AA",
    "screen-reader-compatible": "yes",
    
    // ============== SECURITY ==============
    "referrer-policy": "origin-when-cross-origin",
    "x-content-type-options": "nosniff",
    "x-frame-options": "SAMEORIGIN",
    "x-xss-protection": "1; mode=block",
  }
};

/* ===========================
   ROOT LAYOUT
=========================== */
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* ============== DNS PREFETCH & PRECONNECT ============== */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* ============== RESOURCE HINTS ============== */}
        <link rel="prefetch" href="/og-image.png" />
        <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        
        {/* <Analytics /> */}
        <Navbar />
        <AnimatedLayout>{children}</AnimatedLayout>

        {/* ============== GOOGLE ANALYTICS ============== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B9HKJXT1QL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B9HKJXT1QL', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* ============== COMPREHENSIVE STRUCTURED DATA ============== */}
        <Script
          id="schema-org-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://portfolio.gauravkumawat.online/#person",
                "name": "Gaurav Kumawat",
                "url": "https://portfolio.gauravkumawat.online",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://portfolio.gauravkumawat.online/og-image.png",
                  "width": 1200,
                  "height": 630
                },
                "jobTitle": "Full Stack Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "description": "Full Stack Developer specializing in Next.js, React, Node.js, Express, and MongoDB. Available for freelance projects and full-time opportunities.",
                "knowsAbout": [
                  "Web Development",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Full Stack Development",
                  "Frontend Development",
                  "Backend Development",
                  "API Development",
                  "Database Design",
                  "Responsive Web Design"
                ],
                "knowsLanguage": ["English", "Hindi"],
                "nationality": {
                  "@type": "Country",
                  "name": "India"
                },
                "homeLocation": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                  }
                },
                "sameAs": [
                  "https://github.com/gauravkumawat",
                  "https://linkedin.com/in/gauravkumawat",
                  "https://twitter.com/gauravkumawat"
                ],
                "email": "contact@gauravkumawat.online"
              },
              {
                "@type": "WebSite",
                "@id": "https://portfolio.gauravkumawat.online/#website",
                "url": "https://portfolio.gauravkumawat.online",
                "name": "Gaurav Kumawat Portfolio",
                "description": "Portfolio of Gaurav Kumawat - Full Stack Developer",
                "publisher": {
                  "@id": "https://portfolio.gauravkumawat.online/#person"
                },
                "inLanguage": "en-IN",
                "copyrightYear": 2025,
                "copyrightHolder": {
                  "@id": "https://portfolio.gauravkumawat.online/#person"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://portfolio.gauravkumawat.online/#webpage",
                "url": "https://portfolio.gauravkumawat.online",
                "name": "Gaurav Kumawat — Full Stack Developer",
                "isPartOf": {
                  "@id": "https://portfolio.gauravkumawat.online/#website"
                },
                "about": {
                  "@id": "https://portfolio.gauravkumawat.online/#person"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://portfolio.gauravkumawat.online/og-image.png"
                },
                "description": "Portfolio showcasing full stack development projects and skills",
                "inLanguage": "en-IN",
                "datePublished": "2024-01-01",
                "dateModified": new Date().toISOString()
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://portfolio.gauravkumawat.online/#service",
                "name": "Gaurav Kumawat - Full Stack Development Services",
                "image": "https://portfolio.gauravkumawat.online/og-image.png",
                "description": "Professional full stack web development services including frontend, backend, API development, and database design",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "20.5937",
                  "longitude": "78.9629"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Worldwide"
                },
                "availableLanguage": ["English", "Hindi"],
                "serviceType": "Web Development",
                "provider": {
                  "@id": "https://portfolio.gauravkumawat.online/#person"
                }
              },
              {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Next.js Development",
                    "description": "Building modern web applications with Next.js"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "React Development",
                    "description": "Creating interactive user interfaces with React"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Node.js Development",
                    "description": "Backend development with Node.js and Express"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "MongoDB Database",
                    "description": "Database design and management with MongoDB"
                  }
                ]
              }
            ]
          })}
        </Script>

        {/* ============== BREADCRUMB SCHEMA ============== */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://portfolio.gauravkumawat.online"
              }
            ]
          })}
        </Script>

        {/* ============== ORGANIZATION SCHEMA ============== */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Gaurav Kumawat Portfolio",
            "url": "https://portfolio.gauravkumawat.online",
            "logo": "https://portfolio.gauravkumawat.online/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Professional Services",
              "email": "contact@gauravkumawat.online"
            },
            "sameAs": [
              "https://github.com/gauravkumawat",
              "https://linkedin.com/in/gauravkumawat"
            ]
          })}
        </Script>

        {/* ============== FAQ SCHEMA (Add if you have FAQ section) ============== */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What technologies does Gaurav Kumawat specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gaurav Kumawat specializes in Next.js, React, Node.js, Express, MongoDB, TypeScript, and Tailwind CSS for full stack web development."
                }
              },
              {
                "@type": "Question",
                "name": "Is Gaurav Kumawat available for freelance projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Gaurav Kumawat is available for freelance web development projects and full-time opportunities."
                }
              }
            ]
          })}
        </Script>

        {/* ============== SITE NAVIGATION SCHEMA ============== */}
        <Script
          id="site-navigation-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": [
              "Home",
              "About",
              "Projects",
              "Skills",
              "Contact"
            ]
          })}
        </Script>

        <Footer />
      </body>
    </html>
  );
}