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
