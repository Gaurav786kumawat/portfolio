"use-client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata = {
    // Basic Meta Tags
    title: "My Projects - Gaurav Kumawat | Full Stack Developer Portfolio & Web Applications",
    description: "Explore my portfolio of 9+ full stack web development projects including Web Agency platforms, AI-powered applications, E-commerce stores, Task managers, Weather apps, and more. Built with Next.js, React, Node.js, MongoDB, TypeScript, and modern web technologies.",
    
    // Keywords - Maximum SEO
    keywords: [
        // General
        "web development projects",
        "full stack developer portfolio",
        "portfolio projects 2024",
        "Gaurav Kumawat projects",
        "developer portfolio showcase",
        "web application portfolio",
        
        // Technology Specific
        "Next.js projects",
        "React applications",
        "Node.js projects",
        "MERN stack projects",
        "MongoDB projects",
        "TypeScript projects",
        "Tailwind CSS projects",
        "Framer Motion animations",
        
        // Project Types
        "web agency platform",
        "business website builder",
        "AI chatbot projects",
        "ChatGPT clone",
        "OpenAI API integration",
        "e-commerce projects",
        "Stripe payment integration",
        "online store development",
        "task manager app",
        "productivity app development",
        "movie search app",
        "TMDb API integration",
        "weather app projects",
        "OpenWeather API",
        "AI image generator",
        "DALL-E integration",
        "developer blog platform",
        "Markdown blog",
        "NextAuth authentication",
        
        // Features
        "real-time applications",
        "WebSocket projects",
        "Firebase projects",
        "REST API projects",
        "responsive web design",
        "modern web projects",
        "full stack applications",
        "server components",
        "progressive web apps",
        "SEO optimized projects",
        
        // Location & Service
        "web developer Jaipur",
        "freelance developer India",
        "hire full stack developer",
        "web development services",
        "custom web applications",
        
        // Technologies Stack
        "Redux state management",
        "Zustand projects",
        "Cloudinary integration",
        "Vercel deployment",
        "Netlify hosting",
        "Git version control",
        "modern JavaScript",
        "ES6+ projects",
        "CSS modules",
        "responsive UI design",
    ],
    
    authors: [{ 
        name: "Gaurav Kumawat", 
        url: "https://portfolio.gauravkumawat.online" 
    }],
    creator: "Gaurav Kumawat",
    publisher: "Gaurav Kumawat",
    applicationName: "Gaurav Kumawat Portfolio",
    
    // Robots & Indexing
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    
    // Open Graph - Facebook
    openGraph: {
        type: "website",
        url: "https://portfolio.gauravkumawat.online/projects",
        title: "My Projects - Gaurav Kumawat | Full Stack Developer Portfolio & Web Applications",
        description: "Explore my portfolio of 9+ full stack web development projects including Web Agency platforms, AI-powered applications, E-commerce stores, and more. Built with Next.js, React, Node.js, MongoDB, and modern technologies.",
        images: [
            {
                url: "https://portfolio.gauravkumawat.online/images/projects/portfolio.jpeg",
                width: 1200,
                height: 630,
                alt: "Gaurav Kumawat Full Stack Developer Projects Portfolio",
                type: "image/jpeg",
            },
            {
                url: "https://portfolio.gauravkumawat.online/images/projects/web-agency.png",
                width: 1200,
                height: 630,
                alt: "Web Agency Platform - Featured Project",
                type: "image/png",
            }
        ],
        siteName: "Gaurav Kumawat Portfolio",
        locale: "en_US",
        countryName: "India",
    },
    
    // Twitter Card
    twitter: {
        card: "summary_large_image",
        site: "@GauravKumawat",
        creator: "@GauravKumawat",
        title: "My Projects - Gaurav Kumawat | Full Stack Developer Portfolio",
        description: "Explore 9+ full stack web development projects including Web Agency platforms, AI applications, E-commerce stores, and more. Built with Next.js, React, Node.js, MongoDB.",
        images: {
            url: "https://portfolio.gauravkumawat.online/images/projects/portfolio.jpeg",
            alt: "Gaurav Kumawat Projects Portfolio",
        },
    },
    
    // Canonical & Alternates
    alternates: {
        canonical: "https://portfolio.gauravkumawat.online/projects",
        languages: {
            'en-US': 'https://portfolio.gauravkumawat.online/projects',
            'hi-IN': 'https://portfolio.gauravkumawat.online/projects',
            'x-default': 'https://portfolio.gauravkumawat.online/projects',
        },
    },
    
    // Category & Classification
    category: "Technology",
    classification: "Web Development Portfolio",
    
    // App & Mobile Meta
    appleWebApp: {
        capable: true,
        title: "Projects - Gaurav Kumawat",
        statusBarStyle: "black-translucent",
    },
    
    // Verification
    verification: {
        google: "your-google-site-verification",
        yandex: "your-yandex-verification",
        other: {
            "msvalidate.01": "your-bing-verification",
        },
    },
    
    // Additional Meta
    other: {
        // Theme & Design
        "theme-color": "#a855f7",
        "color-scheme": "dark light",
        "msapplication-TileColor": "#a855f7",
        
        // Geographic
        "geo.region": "IN-RJ",
        "geo.placename": "Jaipur, Rajasthan",
        "geo.position": "26.9124;75.7873",
        "ICBM": "26.9124, 75.7873",
        
        // Language & Content
        "language": "English",
        "content-language": "en-US",
        "coverage": "Worldwide",
        "distribution": "Global",
        "rating": "General",
        "target": "all",
        "audience": "Developers, Recruiters, Clients, Tech Enthusiasts",
        
        // Revisit & Update
        "revisit-after": "7 days",
        "expires": "never",
        
        // Mobile & Responsive
        "HandheldFriendly": "True",
        "MobileOptimized": "320",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "apple-mobile-web-app-title": "Projects Portfolio",
        "format-detection": "telephone=no",
        "mobile-web-app-capable": "yes",
        
        // Social & Sharing
        "pinterest": "nopin",
        
        // Page Type
        "page-type": "portfolio",
        "page-topic": "Web Development Projects",
        
        // Copyright
        "copyright": "© 2024 Gaurav Kumawat. All rights reserved.",
        "author": "Gaurav Kumawat",
        "designer": "Gaurav Kumawat",
        "owner": "Gaurav Kumawat",
        "reply-to": "gaurav18kumawat@gmail.com",
        
        // Cache Control
        "Cache-Control": "public, max-age=31536000",
    },
    
    // Icons
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    
    // Manifest
    manifest: "/manifest.json",
};

export default function ProjectsPage() {
    const projects = [
        {
            title: "Web Agency – Business Websites & Tools",
            image: "/images/projects/web-agency.png",
            description:
                "A complete web agency platform offering business website demos, pricing plans, tools hub and service workflows — built for fast delivery of local business websites and advanced full-stack projects.",
            tech: ["Next.js", "Tailwind CSS", "Server Components", "Vercel"],
            github: "https://github.com/Gaurav786kumawat/web-agency",
            live: "https://services.gauravkumawat.online",
        },
        {
            title: "Portfolio Website",
            image: "/images/projects/portfolio.jpeg",
            description:
                "A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion — showcasing projects, skills, and interactive animations.",
            tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/Gaurav786kumawat/portfolio",
            live: "https://portfolio.gauravkumawat.online",
        },
        {
            title: "DevBlog Platform",
            image: "/images/projects/devBlog2.jpeg",
            description:
                "A Markdown-based developer blogging platform with authentication, CMS-like UI, and SEO-optimized pages.",
            tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind"],
            github: "https://github.com/Gaurav786kumawat/",
            live: "https://devblog-demo.vercel.app",
        },
        {
            title: "ChatGPT Clone",
            image: "/images/projects/3Ai.jpeg",
            description:
                "An AI-powered chatbot web app that integrates OpenAI API with conversational memory and dynamic prompts.",
            tech: ["React", "Node.js", "OpenAI API", "Express"],
            github: "https://github.com/Gaurav786kumawat/",
            live: "https://chatgpt-demo.vercel.app",
        },
        {
            title: "Taskify — Task Manager",
            image: "/images/projects/taskmanager4.avif",
            description:
                "A sleek productivity app to manage tasks, projects, and goals with real-time updates and progress tracking.",
            tech: ["React", "Firebase", "Redux"],
            github: "https://github.com/Gaurav786kumawat/",
            live: "https://taskify-demo.netlify.app",
        },
        {
            title: "E-Commerce Store",
            image: "/images/projects/ecommerce5.jpeg",
            description:
                "A full-stack modern e-commerce store with product filters, cart, Stripe payments, and admin dashboard.",
            tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
            github: "https://github.com/Gaurav786kumawat/",
            live: "https://store-demo.vercel.app",
        },
        {
            title: "MovieFinder App",
            image: "/images/projects/moviefinder6.jpeg",
            description:
                "An elegant movie search and watchlist web app that fetches data from TMDb API and saves favorites locally.",
            tech: ["React", "TMDb API", "CSS Modules"],
            github: "https://github.com/Gaurav786kumawat/",
            live: "https://moviefinder-demo.vercel.app",
        },
        {
            title: "WeatherNow App",
            image: "/images/projects/Weather7.jpeg",
            description:
                "A weather forecasting web app that provides real-time weather updates, 5-day forecasts, and location-based UI.",
            tech: ["React", "OpenWeather API", "Tailwind"],
            github: "https://github.com/Gaurav786kumawat/",
            live: "https://weathernow-demo.netlify.app",
        },
        {
            title: "AI Image Generator",
            image: "/images/projects/aiimagegenerator8.jpeg",
            description:
                "A creative AI web app that generates stunning images using OpenAI DALL·E API, with prompt history and downloads.",
            tech: ["Next.js", "OpenAI API", "Cloudinary"],
            github: "https://github.com/Gaurav786kumawat/",
            live: "https://aiart-demo.vercel.app",
        },
    ];


  // Enhanced Collection Schema
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Full Stack Development Projects Portfolio",
        description: "A comprehensive portfolio showcasing 9+ web development projects built with modern technologies",
        url: "https://portfolio.gauravkumawat.online/projects",
        inLanguage: "en-US",
        author: {
            "@type": "Person",
            name: "Gaurav Kumawat",
            jobTitle: "Full Stack Developer",
            url: "https://portfolio.gauravkumawat.online",
            email: "gaurav18kumawat@gmail.com",
            image: "https://portfolio.gauravkumawat.online/images/profile.png",
        },
        publisher: {
            "@type": "Person",
            name: "Gaurav Kumawat",
        },
        hasPart: projects.map(project => ({
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: project.live,
            image: `https://portfolio.gauravkumawat.online${project.image}`,
            genre: project.category,
            keywords: project.tech.join(", "),
            author: {
                "@type": "Person",
                name: "Gaurav Kumawat"
            },
            datePublished: "2024",
        }))
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
                item: "https://portfolio.gauravkumawat.online"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://portfolio.gauravkumawat.online/projects"
            }
        ]
    };

  // Enhanced ItemList Schema with SoftwareApplication
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Web Development Projects Showcase",
        description: "Collection of full stack web applications and projects",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "SoftwareApplication",
                name: project.title,
                description: project.description,
                url: project.live,
                image: `https://portfolio.gauravkumawat.online${project.image}`,
                applicationCategory: "WebApplication",
                operatingSystem: "Any",
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD"
                },
                author: {
                    "@type": "Person",
                    name: "Gaurav Kumawat"
                },
                datePublished: "2024",
                programmingLanguage: project.tech,
            }
        }))
    };

    // Person Schema with Portfolio
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Gaurav Kumawat",
        jobTitle: "Full Stack Developer",
        url: "https://portfolio.gauravkumawat.online",
        image: "https://portfolio.gauravkumawat.online/images/profile.png",
        email: "gaurav18kumawat@gmail.com",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            addressCountry: "IN"
        },
        sameAs: [
            "https://github.com/Gaurav786kumawat",
            "https://linkedin.com/in/gauravkumawatkirodiwal",
            "https://twitter.com/GauravKumawat"
        ],
        knowsAbout: projects.flatMap(p => p.tech),
        hasCredential: projects.map(project => ({
            "@type": "EducationalOccupationalCredential",
            name: project.title,
            url: project.live
        }))
    };

    // Portfolio Schema
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Projects Portfolio - Gaurav Kumawat",
        description: "Professional portfolio showcasing web development projects",
        url: "https://portfolio.gauravkumawat.online/projects",
        about: {
            "@type": "Thing",
            name: "Web Development Portfolio",
            description: "Full Stack Development Projects"
        },
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: projects.length,
            itemListElement: projects.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.title
            }))
        },
        specialty: [
            "Full Stack Development",
            "Web Application Development",
            "AI Integration",
            "E-Commerce Solutions",
            "Real-time Applications"
        ]
    };

    // FAQ Schema for Projects
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What types of projects has Gaurav Kumawat built?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "I have built a diverse portfolio including Web Agency platforms, AI-powered applications (ChatGPT clone, AI Image Generator), E-commerce stores with payment integration, Task management apps, Weather applications, Movie search apps, and Developer blogging platforms."
                }
            },
            {
                "@type": "Question",
                name: "What technologies are used in these projects?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "My projects utilize modern technologies including Next.js, React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, Firebase, OpenAI API, Stripe, Framer Motion, Redux, and various other cutting-edge web development tools."
                }
            },
            {
                "@type": "Question",
                name: "Are the projects open source?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, most projects have their source code available on GitHub. Each project includes both GitHub repository links and live demo links for you to explore."
                }
            },
            {
                "@type": "Question",
                name: "Can you build similar projects for clients?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! These projects demonstrate my capabilities in full stack development. I'm available for freelance work and can build custom solutions tailored to your specific requirements."
                }
            },
            {
                "@type": "Question",
                name: "What makes these projects stand out?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Each project showcases modern design principles, responsive layouts, optimal performance, SEO optimization, and integration with cutting-edge technologies like AI APIs, real-time features, and payment systems."
                }
            }
        ]
    };

    return (

        <>

         {/* JSON-LD Structured Data - Multiple Schemas for Maximum SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

        <main className="max-w-7xl mx-auto px-4 py-24">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold text-center text-purple-500 mb-12"
            >
                My Projects
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-slate-400 mb-16 text-lg"
            >
                Turning concepts into sleek, functional experiences — built with precision and passion.
            </motion.p>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className="bg-slate-900 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-700/40 transition-transform transform hover:-translate-y-2 hover:scale-[1.02]"
                    >
                        {/* Project Image */}
                        <div className="h-48 w-full overflow-hidden relative">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    priority={idx === 0}
                                />
                            </motion.div>
                        </div>

                        {/* Project Details */}
                        <div className="p-6 flex flex-col justify-between h-[280px]">
                            <div>
                                <h2 className="text-2xl font-bold text-purple-400 mb-2">{project.title}</h2>
                                <p className="text-slate-300 text-sm mb-3 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-full border border-purple-500/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-2">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors"
                                >
                                    <FaGithub /> <span>GitHub</span>
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors"
                                >
                                    <FaExternalLinkAlt /> <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>

        </>
    );
}
