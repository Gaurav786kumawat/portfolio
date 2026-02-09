"use-client";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

// Metadata export for App Router - FULL SEO OPTIMIZATION
export const metadata = {
  // Basic Meta Tags
  title: "Contact Me - Gaurav Kumawat | Get In Touch for Web Development Projects",
  description: "Ready to start your next web project? Contact Gaurav Kumawat, a Full Stack Developer specializing in MERN Stack, Next.js, and React. Available for freelance projects, collaborations, and full-time opportunities. Get a response within 24 hours.",
  keywords: [
    "contact web developer",
    "hire full stack developer",
    "freelance developer Jaipur",
    "MERN stack developer for hire",
    "Next.js developer contact",
    "React developer hire",
    "web development services India",
    "Gaurav Kumawat contact",
    "freelance projects",
    "collaboration opportunities",
    "hire Node.js developer",
    "MongoDB developer",
    "Express.js developer",
    "JavaScript developer for hire",
    "TypeScript developer",
    "Tailwind CSS developer",
    "full stack developer India",
    "remote developer hire",
    "web app development",
    "API development services",
  ],
  authors: [{ name: "Gaurav Kumawat", url: "https://portfolio.gauravkumawat.online" }],
  creator: "Gaurav Kumawat",
  publisher: "Gaurav Kumawat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph Tags
  openGraph: {
    type: "website",
    url: "https://portfolio.gauravkumawat.online/contact",
    title: "Contact Me - Gaurav Kumawat | Get In Touch for Web Development Projects",
    description: "Ready to start your next web project? Contact me for freelance work, collaborations, and full-time opportunities. Response within 24 hours guaranteed.",
    images: [
      {
        url: "https://portfolio.gauravkumawat.online/images/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Gaurav Kumawat - Full Stack Developer",
      }
    ],
    siteName: "Gaurav Kumawat Portfolio",
    locale: "en_US",
  },
  
  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    site: "@GauravKumawat",
    creator: "@GauravKumawat",
    title: "Contact Me - Gaurav Kumawat | Get In Touch for Web Development Projects",
    description: "Ready to start your next web project? Contact me for freelance work, collaborations, and full-time opportunities. Response within 24 hours guaranteed.",
    images: ["https://portfolio.gauravkumawat.online/images/contact-og.png"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://portfolio.gauravkumawat.online/contact",
    languages: {
      'en-US': 'https://portfolio.gauravkumawat.online/contact',
      'hi-IN': 'https://portfolio.gauravkumawat.online/contact',
    },
  },
  
  // Additional Meta Tags
  category: "Technology",
  classification: "Web Development Services",
  
  // Verification Tags
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  
  // Other Tags
  other: {
    "theme-color": "#e11d48",
    "color-scheme": "light dark",
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur",
    "geo.position": "26.9124;75.7873",
    "ICBM": "26.9124, 75.7873",
    "language": "English",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
    "application-name": "Gaurav Kumawat Portfolio",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Contact Gaurav",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
  },
};

// ContactPage Schema
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Gaurav Kumawat",
  description: "Get in touch with Gaurav Kumawat for web development projects, freelance work, and collaborations",
  url: "https://portfolio.gauravkumawat.online/contact",
  mainEntity: {
    "@type": "Person",
    name: "Gaurav Kumawat",
    jobTitle: "Full Stack Developer",
    email: "gaurav18kumawat@gmail.com",
    telephone: "+91-XXXXXXXXXX",
    url: "https://portfolio.gauravkumawat.online",
    image: "https://portfolio.gauravkumawat.online/images/profile.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Gaurav786kumawat",
      "https://linkedin.com/in/gauravkumawatkirodiwal",
      "https://twitter.com/GauravKumawat",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Services",
      email: "gaurav18kumawat@gmail.com",
      availableLanguage: ["English", "Hindi"],
      areaServed: "Worldwide",
    },
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
};

// Professional Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gaurav Kumawat Web Development Services",
  description: "Full Stack Web Development services including MERN Stack, Next.js, React, and Node.js development",
  url: "https://portfolio.gauravkumawat.online",
  image: "https://portfolio.gauravkumawat.online/images/profile.png",
  priceRange: "$$",
  telephone: "+91-XXXXXXXXXX",
  email: "gaurav18kumawat@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  provider: {
    "@type": "Person",
    name: "Gaurav Kumawat",
    jobTitle: "Full Stack Developer",
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Development",
          description: "Complete web application development using MERN stack",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Development",
          description: "Modern responsive UI development with React and Next.js",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend Development",
          description: "Scalable backend APIs with Node.js and Express",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Database Management",
          description: "MongoDB and PostgreSQL database design and optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API Development",
          description: "RESTful API development and integration",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://portfolio.gauravkumawat.online",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://portfolio.gauravkumawat.online/contact",
    },
  ],
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly do you respond to inquiries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I usually respond within 24 hours to all project inquiries and collaboration requests.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I offer full stack web development services including MERN stack development, Next.js applications, React frontend development, Node.js backend APIs, and database management.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available for freelance work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I am available for freelance projects, collaborations, and full-time opportunities. Feel free to reach out through the contact form.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I specialize in Next.js, React, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, Tailwind CSS, and modern web development tools.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clients worldwide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I work with clients from all around the world remotely.",
      },
    },
    {
      "@type": "Question",
      name: "What is your expertise level?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I am a skilled Full Stack Developer with expertise in MERN stack, Next.js, TypeScript, and modern web technologies with multiple successful projects.",
      },
    },
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gaurav Kumawat - Full Stack Developer",
  alternateName: "Gaurav Kumawat Portfolio",
  url: "https://portfolio.gauravkumawat.online",
  logo: "https://portfolio.gauravkumawat.online/images/profile.png",
  image: "https://portfolio.gauravkumawat.online/images/profile.png",
  description: "Full Stack Developer specializing in MERN Stack, Next.js, and React",
  email: "gaurav18kumawat@gmail.com",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "gaurav18kumawat@gmail.com",
    contactType: "Customer Service",
    availableLanguage: ["en", "hi"],
    areaServed: "Worldwide",
  },
  sameAs: [
    "https://github.com/Gaurav786kumawat",
    "https://linkedin.com/in/gauravkumawatkirodiwal",
    "https://twitter.com/GauravKumawat",
  ],
  founder: {
    "@type": "Person",
    name: "Gaurav Kumawat",
  },
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gaurav Kumawat Portfolio",
  url: "https://portfolio.gauravkumawat.online",
  description: "Full Stack Developer Portfolio - MERN Stack, Next.js, React",
  publisher: {
    "@type": "Person",
    name: "Gaurav Kumawat",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://portfolio.gauravkumawat.online/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// Person Schema
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gaurav Kumawat",
  givenName: "Gaurav",
  familyName: "Kumawat",
  jobTitle: "Full Stack Developer",
  email: "gaurav18kumawat@gmail.com",
  telephone: "+91-XXXXXXXXXX",
  url: "https://portfolio.gauravkumawat.online",
  image: "https://portfolio.gauravkumawat.online/images/profile.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Your University Name",
  },
  knowsAbout: [
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "PostgreSQL",
    "REST API",
    "Git",
    "Docker",
  ],
  sameAs: [
    "https://github.com/Gaurav786kumawat",
    "https://linkedin.com/in/gauravkumawatkirodiwal",
    "https://twitter.com/GauravKumawat",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data - Multiple Schemas for Maximum SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"></div>

        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-600 via-pink-500 to-purple-500 bg-clip-text text-transparent pb-2">
            Let's Build Something Amazing 🚀
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Got a web project, idea, or challenge? I'm here to turn it into a
            high-performance, beautiful, and scalable solution. Whether it's a
            full-stack app, algorithmic problem, or DSA challenge, drop me a
            message — I usually respond within 24 hours.
          </p>
        </section>

        <ContactForm />
      </main>
    </>
  );
}