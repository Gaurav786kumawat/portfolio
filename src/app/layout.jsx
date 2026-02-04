// layout.jsx (server component)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";
import Script from "next/script";
import Analytics from "./components/Analytics"; // ✅ ADDED

/* ===========================
   METADATA (EXTREME SEO)
=========================== */
export const metadata = {
  // 🔒 SAME AS YOU SENT — NOTHING REMOVED
  title: "Gaurav Kumawat — Full Stack Developer & Student",
  description:
    "Portfolio of Gaurav Kumawat — a full stack developer skilled in Next.js, React, Node.js, Express, and MongoDB. Explore projects, skills, and contact information.",
  metadataBase: new URL("https://portfolio.gauravkumawat.online"),
  applicationName: "Gaurav Kumawat Portfolio",
  generator: "Next.js 14",
  category: "technology",
  classification: "Portfolio Website",
  abstract:
    "Official portfolio of Gaurav Kumawat, a Full Stack Developer specializing in modern web technologies.",
  topic: "Full Stack Web Development",
  summary:
    "Gaurav Kumawat is a Full Stack Developer building scalable and high-performance web applications.",
  keywords: [
    "Gaurav Kumawat",
    "Gaurav Kumawat Portfolio",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Express Developer",
    "MongoDB Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "Hire Full Stack Developer",
    "Freelance Web Developer India",
    "Gaurav Kumawat GitHub",
    "Gaurav Kumawat LinkedIn",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Gaurav Kumawat" }],
  creator: "Gaurav Kumawat",
  publisher: "Gaurav Kumawat",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://portfolio.gauravkumawat.online",
    languages: {
      "en-IN": "https://portfolio.gauravkumawat.online",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Gaurav Kumawat — Full Stack Developer",
    description:
      "Explore Gaurav Kumawat’s full stack projects built using Next.js, React, Node.js, Express, and MongoDB.",
    url: "https://portfolio.gauravkumawat.online",
    siteName: "Gaurav Kumawat Portfolio",
    images: [
      {
        url: "https://portfolio.gauravkumawat.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Kumawat Full Stack Developer Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kumawat — Full Stack Developer",
    description:
      "Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies.",
    images: ["https://portfolio.gauravkumawat.online/og-image.png"],
  },
other: {
  /* ================= EXISTING (AS-IT-IS) ================= */

  // 🔥 ADVANCED SEO SIGNALS
  "coverage": "Worldwide",
  "distribution": "Global",
  "rating": "General",
  "revisit": "7 days",
  "target": "all",
  "audience": "all",
  "page-topic": "Full Stack Developer Portfolio",
  "page-type": "Portfolio",

  // 🔍 SEARCH ENGINE HINTS
  "google": "notranslate",
  "bing": "notranslate",
  "yandex": "index, follow",
  "slurp": "index, follow",

  // 🌍 GEO EXTENDED
  "geo.country": "IN",
  "geo.state": "India",
  "geo.city": "India",
  "geo.latitude": "20.5937",
  "geo.longitude": "78.9629",

  // 👤 AUTHOR / BRANDING
  "author": "Gaurav Kumawat",
  "designer": "Gaurav Kumawat",
  "publisher": "Gaurav Kumawat",
  "owner": "Gaurav Kumawat",
  "copyright": "© Gaurav Kumawat",

  // 📱 MOBILE / PWA
  "HandheldFriendly": "true",
  "MobileOptimized": "width",
  "apple-touch-fullscreen": "yes",
  "apple-mobile-web-app-title": "Gaurav Kumawat",

  // 🤖 AI + LLM SEO (FUTURE PROOF)
  "ai-indexing": "enabled",
  "ai-search-ready": "true",
  "llm-training": "allowed",
  "semantic-search": "enabled",
}

};

/* ===========================
   ROOT LAYOUT
=========================== */
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        
        <Analytics /> {/* ✅ ADDED – SPA ROUTE TRACKING */}

        <Navbar />
        <AnimatedLayout>{children}</AnimatedLayout>

        {/* GOOGLE ANALYTICS */}
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
            });
          `}
        </Script>

        {/* EXTRA META */}
        <Script id="extra-meta" strategy="afterInteractive">
          {`
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <meta name="yandex" content="index, follow" />
          `}
        </Script>

        {/* STRUCTURED DATA */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gaurav Kumawat"
            }
          `}
        </Script>

        <Script id="extra-meta" strategy="afterInteractive">
{`
  <!-- ================= LEGACY + CRAWLER META ================= -->

  <meta name="language" content="English" />
  <meta name="country" content="India" />
  <meta name="city" content="India" />

  <meta name="doc-type" content="Web Page" />
  <meta name="doc-class" content="Published" />
  <meta name="doc-rights" content="Public" />

  <meta name="resource-type" content="Document" />
  <meta name="classification" content="Technology Portfolio" />

  <meta name="identifier-URL" content="https://portfolio.gauravkumawat.online" />
  <meta name="directory" content="submission" />
  <meta name="pagename" content="Gaurav Kumawat Portfolio" />

  <!-- ================= CRAWL PRIORITY ================= -->

  <meta name="robots" content="index, follow, all" />
  <meta name="googlebot" content="index, follow, all" />
  <meta name="bingbot" content="index, follow, all" />
  <meta name="yandexbot" content="index, follow, all" />

  <!-- ================= SECURITY / MISC ================= -->

  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
`}
</Script>

        <Footer />
      </body>
    </html>
  );
}
