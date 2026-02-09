import {
    FaLaptopCode,
    FaServer,
    FaDatabase,
    FaTools,
    FaBrain,
    FaLightbulb
} from "react-icons/fa";
import { motion } from "framer-motion";


// Metadata export for App Router
export const metadata = {
    title: "Skills & Expertise - Gaurav Kumawat | Full Stack Developer Tech Stack",
    description: "Explore my technical skills and expertise in Full Stack Development. Proficient in Next.js, React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, and modern web technologies. Currently learning AI/ML integration and advanced DevOps.",
    keywords: [
        "full stack developer skills",
        "Next.js expert",
        "React developer",
        "Node.js backend",
        "MongoDB specialist",
        "TypeScript developer",
        "Tailwind CSS",
        "MERN stack skills",
        "web development expertise",
        "Gaurav Kumawat skills",
        "technical skills portfolio",
        "frontend developer skills",
        "backend developer skills",
        "database management",
        "REST API development",
        "JavaScript ES6",
        "Express.js",
        "Prisma ORM",
        "Redux Zustand",
        "Framer Motion",
        "Git GitHub",
        "Vercel Netlify",
        "Docker",
        "AI ML integration",
        "OpenAI API",
        "LangChain",
        "prompt engineering",
        "web performance optimization",
        "SEO skills",
        "UI UX design",
        "Figma",
        "responsive design",
        "accessibility a11y",
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
    
    openGraph: {
        type: "website",
        url: "https://portfolio.gauravkumawat.online/skills",
        title: "Skills & Expertise - Gaurav Kumawat | Full Stack Developer Tech Stack",
        description: "Explore my technical skills in Full Stack Development including Next.js, React, Node.js, MongoDB, TypeScript, and modern web technologies.",
        images: [
            {
                url: "https://portfolio.gauravkumawat.online/images/skills-og.png",
                width: 1200,
                height: 630,
                alt: "Gaurav Kumawat Skills - Full Stack Developer",
            }
        ],
        siteName: "Gaurav Kumawat Portfolio",
        locale: "en_US",
    },
    
    twitter: {
        card: "summary_large_image",
        site: "@GauravKumawat",
        creator: "@GauravKumawat",
        title: "Skills & Expertise - Gaurav Kumawat | Full Stack Developer Tech Stack",
        description: "Explore my technical skills in Full Stack Development including Next.js, React, Node.js, MongoDB, TypeScript, and modern web technologies.",
        images: ["https://portfolio.gauravkumawat.online/images/skills-og.png"],
    },
    
    alternates: {
        canonical: "https://portfolio.gauravkumawat.online/skills",
        languages: {
            'en-US': 'https://portfolio.gauravkumawat.online/skills',
            'hi-IN': 'https://portfolio.gauravkumawat.online/skills',
        },
    },
    
    category: "Technology",
    classification: "Web Development Skills",
    
    other: {
        "theme-color": "#a855f7",
        "color-scheme": "light dark",
        "geo.region": "IN-RJ",
        "geo.placename": "Jaipur",
        "language": "English",
        "coverage": "Worldwide",
        "distribution": "Global",
        "rating": "General",
        "revisit-after": "7 days",
    },
};

export default function SkillsPage() {
    const currentSkills = [
        {
            title: "Frontend",
            icon: <FaLaptopCode className="text-purple-500 text-2xl" />,
            skills: [
                "Next.js", "React", "Tailwind CSS", "JavaScript (ES6+)",
                "TypeScript", "Framer Motion", "Responsive Design", "Redux / Zustand"
            ]
        },
        {
            title: "Backend",
            icon: <FaServer className="text-blue-500 text-2xl" />,
            skills: [
                "Node.js", "Express.js", "REST APIs", "JWT Auth",
                "MVC Architecture", "Real-Time Apps (WebSockets)"
            ]
        },
        {
            title: "Databases",
            icon: <FaDatabase className="text-green-500 text-2xl" />,
            skills: [
                "MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "Mongoose"
            ]
        },
        {
            title: "Tools & DevOps",
            icon: <FaTools className="text-pink-500 text-2xl" />,
            skills: [
                "Git & GitHub", "Vercel / Netlify", "Docker (Basics)",
                "Postman", "VS Code", "ESLint & Prettier"
            ]
        }
    ];

    const learningSkills = [
        {
            title: "AI & Machine Learning",
            icon: <FaBrain className="text-yellow-500 text-2xl" />,
            skills: [
                "OpenAI API", "Python Basics", "Prompt Engineering",
                "LangChain", "LLM Integration"
            ]
        },
        {
            title: "Creative & Extra Skills",
            icon: <FaLightbulb className="text-orange-500 text-2xl" />,
            skills: [
                "Figma (UI Design)", "SEO Basics", "Web Performance",
                "Accessibility (a11y)", "Next.js App Router"
            ]
        }
    ];
    // Person Schema with Skills
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
            addressCountry: "IN",
        },
        knowsAbout: [
            ...currentSkills.flatMap(cat => cat.skills),
            ...learningSkills.flatMap(cat => cat.skills)
        ],
        hasOccupation: {
            "@type": "Occupation",
            name: "Full Stack Web Developer",
            skills: currentSkills.map(cat => ({
                "@type": "DefinedTerm",
                name: cat.title,
                description: cat.skills.join(", ")
            })),
            occupationalCategory: "15-1254.00"
        },
        sameAs: [
            "https://github.com/Gaurav786kumawat",
            "https://linkedin.com/in/gauravkumawatkirodiwal",
            "https://twitter.com/GauravKumawat",
        ],
    };

    // ItemList Schema for Skills
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Technical Skills & Expertise",
        description: "Comprehensive list of technical skills and expertise areas in Full Stack Development",
        numberOfItems: currentSkills.length + learningSkills.length,
        itemListElement: [
            ...currentSkills.map((cat, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "Thing",
                    name: cat.title,
                    description: cat.skills.join(", ")
                }
            })),
            ...learningSkills.map((cat, index) => ({
                "@type": "ListItem",
                position: currentSkills.length + index + 1,
                item: {
                    "@type": "Thing",
                    name: cat.title,
                    description: cat.skills.join(", ")
                }
            }))
        ]
    };

    // Educational Credential Schema
    const credentialSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Skills Portfolio",
        competencyRequired: currentSkills.flatMap(cat => cat.skills).join(", "),
        educationalLevel: "Professional Level",
        about: {
            "@type": "Person",
            name: "Gaurav Kumawat",
            jobTitle: "Full Stack Developer",
            url: "https://portfolio.gauravkumawat.online"
        }
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
                name: "Skills",
                item: "https://portfolio.gauravkumawat.online/skills"
            }
        ]
    };

    // FAQ Schema for Skills
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What frontend technologies do you specialize in?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "I specialize in Next.js, React, Tailwind CSS, TypeScript, JavaScript (ES6+), Framer Motion, Redux, and Zustand for building modern, responsive web applications."
                }
            },
            {
                "@type": "Question",
                name: "What backend technologies do you work with?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "I work with Node.js, Express.js, REST APIs, JWT Authentication, MVC Architecture, and Real-Time Applications using WebSockets."
                }
            },
            {
                "@type": "Question",
                name: "Which databases are you proficient in?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "I'm proficient in MongoDB, MySQL, PostgreSQL, Prisma ORM, and Mongoose for database management and design."
                }
            },
            {
                "@type": "Question",
                name: "What tools and DevOps technologies do you use?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "I use Git & GitHub for version control, Vercel and Netlify for deployment, Docker basics, Postman for API testing, VS Code, ESLint, and Prettier."
                }
            },
            {
                "@type": "Question",
                name: "Are you learning any new technologies?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, I'm currently learning AI & Machine Learning technologies including OpenAI API, Python, Prompt Engineering, LangChain, and LLM Integration. I'm also exploring Figma for UI design, SEO optimization, and web accessibility."
                }
            },
        ]
    };

    // WebPage Schema
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Skills & Expertise - Gaurav Kumawat",
        description: "Technical skills and expertise in Full Stack Development",
        url: "https://portfolio.gauravkumawat.online/skills",
        about: {
            "@type": "Person",
            name: "Gaurav Kumawat",
            jobTitle: "Full Stack Developer"
        },
        specialty: [
            "Full Stack Development",
            "MERN Stack",
            "Next.js Development",
            "React Development",
            "Node.js Development",
            "Database Management"
        ]
    };



    return (
        <>
                {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialSchema) }}
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />


            <main className="max-w-7xl mx-auto px-4 py-24">
                {/* ---- Current Skills ---- */}
                <section className="mb-24">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-purple-500 mb-12">
                        My Current Skills
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentSkills.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {card.icon}
                                    <h2 className="text-xl font-bold text-purple-400">{card.title}</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    {card.skills.join(" | ")}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ---- Learning Skills ---- */}
                <section>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-500 mb-12">
                        Currently Learning / Exploring
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {learningSkills.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {card.icon}
                                    <h2 className="text-xl font-bold text-yellow-400">{card.title}</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    {card.skills.join(" | ")}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
