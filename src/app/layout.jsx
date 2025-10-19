// layout.jsx (server component)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";
import Script from "next/script";

export const metadata = {
  title: "Gaurav Kumawat — Full Stack Developer & Student",
  description:
    "Portfolio of Gaurav Kumawat — a full stack developer skilled in Next.js, React, Node.js, Express, and MongoDB. Explore projects, skills, and contact information.",
  metadataBase: new URL("https://portfolio.gauravkumawat.online"),
  keywords: [
    "Gaurav Kumawat",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Portfolio",
    "Gaurav Kumawat Portfolio",
    "Gaurav Kumawat GitHub",
    "Gaurav Kumawat LinkedIn"
  ],
  authors: [{ name: "Gaurav Kumawat" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gaurav Kumawat — Full Stack Developer",
    description:
      "Explore Gaurav Kumawat’s full stack web development projects — built using Next.js, React, Node.js, Express, and MongoDB.",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kumawat — Full Stack Developer",
    description:
      "Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies.",
    images: ["https://portfolio.gauravkumawat.online/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <AnimatedLayout>{children}</AnimatedLayout>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B9HKJXT1QL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B9HKJXT1QL', { page_path: window.location.pathname });
          `}
        </Script>

        {/* ✅ SEO Structured Data for Google Knowledge Graph */}
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive">
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
                "https://instagram.com/arnavsingh820",
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self Employed / FreeLance / Personal Projects"
              },
              "description": "Full Stack Developer skilled in React, Next.js, Node.js, Express, and MongoDB — building modern, scalable web apps.",
              "knowsAbout": [
                "Web Development",
                "Full Stack Development",
                "Next.js",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Frontend Design",
                "Backend APIs"
              ]
            }
          `}
        </Script>

        <Footer />
      </body>
    </html>
  );
}
