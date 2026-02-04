// layout.jsx (server component)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";
import Script from "next/script";

/* ===========================
   METADATA (EXTREME SEO)
=========================== */
export const metadata = {
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
    "theme-color": "#0f172a",
    "color-scheme": "dark light",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
    "content-language": "en-IN",
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    "ICBM": "20.5937, 78.9629",

    "ai-content": "human-generated",
    "ai-training": "allowed",
    "chatgpt-crawl": "allowed",
    "claude-crawl": "allowed",
    "perplexity-crawl": "allowed",
  },
};

/* ===========================
   ROOT LAYOUT
=========================== */
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        <Navbar />

        <AnimatedLayout>{children}</AnimatedLayout>

        {/* ===========================
           GOOGLE ANALYTICS
        =========================== */}
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

        {/* ===========================
           EXTRA META (OUTSIDE SEO)
        =========================== */}
        <Script id="extra-meta" strategy="afterInteractive">
          {`
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <meta name="yandex" content="index, follow" />

            <meta name="rating" content="general" />
            <meta name="distribution" content="global" />
            <meta name="revisit-after" content="7 days" />
            <meta name="classification" content="Portfolio Website" />
            <meta name="author" content="Gaurav Kumawat" />
            <meta name="designer" content="Gaurav Kumawat" />
            <meta name="owner" content="Gaurav Kumawat" />
            <meta name="copyright" content="© Gaurav Kumawat" />
          `}
        </Script>

        {/* ===========================
           STRUCTURED DATA (PERSON)
        =========================== */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gaurav Kumawat",
              "url": "https://portfolio.gauravkumawat.online",
              "image": "https://portfolio.gauravkumawat.online/og-image.png",
              "sameAs": [
                "https://github.com/gauravkumawat",
                "https://www.linkedin.com/in/gauravkumawat",
                "https://portfolio.gauravkumawat.online",
                "https://instagram.com/arnavsingh820"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self Employed / Freelance"
              },
              "description":
                "Full Stack Developer skilled in React, Next.js, Node.js, Express, and MongoDB."
            }
          `}
        </Script>

        <Footer />
      </body>
    </html>
  );
}
