'use client';

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";


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

    return (

        <>
              <Head>
        {/* Primary Meta Tags */}
        <title>My Projects - Gaurav Kumawat | Full Stack Developer Portfolio</title>
        <meta name="title" content="My Projects - Gaurav Kumawat | Full Stack Developer Portfolio" />
        <meta 
          name="description" 
          content="Explore my portfolio of web development projects including Web Agency platforms, AI applications, E-commerce stores, and more. Built with Next.js, React, Node.js, and modern technologies." 
        />
        <meta name="keywords" content="web development projects, full stack developer, Next.js projects, React applications, portfolio, Gaurav Kumawat, web agency, AI chatbot, e-commerce, task manager, movie app, weather app" />
        <meta name="author" content="Gaurav Kumawat" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.gauravkumawat.online/projects" />
        <meta property="og:title" content="My Projects - Gaurav Kumawat | Full Stack Developer Portfolio" />
        <meta 
          property="og:description" 
          content="Explore my portfolio of web development projects including Web Agency platforms, AI applications, E-commerce stores, and more. Built with Next.js, React, Node.js, and modern technologies." 
        />
        <meta property="og:image" content="https://portfolio.gauravkumawat.online/images/projects/portfolio.jpeg" />
        <meta property="og:site_name" content="Gaurav Kumawat Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio.gauravkumawat.online/projects" />
        <meta property="twitter:title" content="My Projects - Gaurav Kumawat | Full Stack Developer Portfolio" />
        <meta 
          property="twitter:description" 
          content="Explore my portfolio of web development projects including Web Agency platforms, AI applications, E-commerce stores, and more. Built with Next.js, React, Node.js, and modern technologies." 
        />
        <meta property="twitter:image" content="https://portfolio.gauravkumawat.online/images/projects/portfolio.jpeg" />
        <meta property="twitter:creator" content="@GauravKumawat" />

        {/* Additional SEO Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://portfolio.gauravkumawat.online/projects" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "My Projects - Gaurav Kumawat",
              "description": "Portfolio of web development projects by Gaurav Kumawat",
              "url": "https://portfolio.gauravkumawat.online/projects",
              "author": {
                "@type": "Person",
                "name": "Gaurav Kumawat",
                "url": "https://portfolio.gauravkumawat.online"
              },
              "hasPart": projects.map(project => ({
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.live,
                "author": {
                  "@type": "Person",
                  "name": "Gaurav Kumawat"
                }
              }))
            })
          }}
        />
      </Head>


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
