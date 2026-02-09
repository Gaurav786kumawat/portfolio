'use client';
import {
    FaLaptopCode,
    FaServer,
    FaDatabase,
    FaTools,
    FaBrain,
    FaLightbulb
} from "react-icons/fa";
import { motion } from "framer-motion";

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



    return (
        <>

  <Head>
                {/* Primary Meta Tags */}
                <title>Skills & Expertise - Gaurav Kumawat | Full Stack Developer Tech Stack</title>
                <meta name="title" content="Skills & Expertise - Gaurav Kumawat | Full Stack Developer Tech Stack" />
                <meta 
                    name="description" 
                    content="Explore my technical skills and expertise in Full Stack Development. Proficient in Next.js, React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, and modern web technologies. Currently learning AI/ML integration and advanced DevOps." 
                />
                <meta 
                    name="keywords" 
                    content={`full stack developer skills, ${allSkills}, web development skills, MERN stack, Gaurav Kumawat skills, technical expertise, frontend developer, backend developer, database management`}
                />
                <meta name="author" content="Gaurav Kumawat" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio.gauravkumawat.online/skills" />
                <meta property="og:title" content="Skills & Expertise - Gaurav Kumawat | Full Stack Developer Tech Stack" />
                <meta 
                    property="og:description" 
                    content="Explore my technical skills in Full Stack Development including Next.js, React, Node.js, MongoDB, TypeScript, and modern web technologies." 
                />
                <meta property="og:image" content="https://portfolio.gauravkumawat.online/images/skills-og.png" />
                <meta property="og:site_name" content="Gaurav Kumawat Portfolio" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://portfolio.gauravkumawat.online/skills" />
                <meta property="twitter:title" content="Skills & Expertise - Gaurav Kumawat | Full Stack Developer Tech Stack" />
                <meta 
                    property="twitter:description" 
                    content="Explore my technical skills in Full Stack Development including Next.js, React, Node.js, MongoDB, TypeScript, and modern web technologies." 
                />
                <meta property="twitter:image" content="https://portfolio.gauravkumawat.online/images/skills-og.png" />
                <meta property="twitter:creator" content="@GauravKumawat" />

                {/* Additional SEO Tags */}
                <link rel="canonical" href="https://portfolio.gauravkumawat.online/skills" />
                <meta name="theme-color" content="#a855f7" />

                {/* Structured Data - JSON-LD for Skills */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Gaurav Kumawat",
                            jobTitle: "Full Stack Developer",
                            url: "https://portfolio.gauravkumawat.online",
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
                                }))
                            }
                        })
                    }}
                />

                {/* Structured Data - JSON-LD for ItemList */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            name: "Technical Skills",
                            description: "List of technical skills and expertise areas",
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
                        })
                    }}
                />

                {/* Structured Data - JSON-LD for EducationalOccupationalCredential */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EducationalOccupationalCredential",
                            credentialCategory: "Professional Skills",
                            competencyRequired: currentSkills.flatMap(cat => cat.skills).join(", "),
                            about: {
                                "@type": "Person",
                                name: "Gaurav Kumawat",
                                jobTitle: "Full Stack Developer"
                            }
                        })
                    }}
                />

                {/* Breadcrumb Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
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
                        })
                    }}
                />
            </Head>

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
