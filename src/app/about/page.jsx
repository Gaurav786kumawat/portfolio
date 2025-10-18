'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    const skills = [
        "Next.js", "React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript",
        "Sass / SCSS", "Framer Motion", "Node.js", "Express.js", "REST APIs",
        "MongoDB", "MySQL", "PostgreSQL", "Git & GitHub", "Vercel / Netlify",
        "Docker", "Postman", "Intermediate DSA"
    ];

    const experiences = [
        {
            role: "Full-Stack Developer (Personal Projects)",
            company: "Self-Learning & College Projects",
            period: "2023 - Present",
            desc: "Building modern web applications using Next.js, React, Node.js, and Tailwind CSS. Focused on clean architecture, responsive design, and practical problem-solving through intermediate DSA challenges."
        },
        {
            role: "Freelance / Mini Projects",
            company: "Self-Initiated",
            period: "2024",
            desc: "Created landing pages, interactive web components, and small apps to strengthen front-end & back-end skills. Applied version control, deployment practices, and performance optimization."
        }
    ];

    const education = [
        {
            degree: "Self-Learning & Online Education",
            institute: "apnacollege.in, YouTube, and other online platforms",
            period: "2023 - Present",
            details: "Learning full-stack development (Next.js, React, Node.js, Tailwind), building real-world projects, and strengthening algorithm & data structure skills (150+ problems solved). Focused on practical applications and modern web technologies."
        }
    ];




    return (
        <>
            <main className="max-w-6xl mx-auto px-4 py-24 flex flex-col gap-24">

                {/* 🌟 HERO SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-rose-500 blur-3xl opacity-30 animate-pulse"></div>

                        <Image
                            src="/images/profile.png"
                            alt="Your Name"
                            width={320}   // equivalent to w-80
                            height={320}  // equivalent to h-80
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-400 shadow-[0_0_60px_-15px_rgba(168,85,247,0.7)]"
                            priority      // ensures it loads fast
                        />
                    </div>


                    {/* Right - Intro */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500">
                            Hi, I’m Gaurav Kumawat
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mt-4">
                            I’m a <span className="text-pink-500 font-semibold">Full-Stack Web Developer</span> and passionate about building modern, scalable web applications.
                            I focus on clean architecture, smooth UX, and high-performance code.
                            Beyond web development, I have intermediate DSA expertise and have successfully solved over <span className="font-semibold text-purple-400">150+ algorithm & data structure problems</span> to strengthen my problem-solving skills.
                        </p>


                        {/* Skill Pills */}
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                                My Core Stack
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="px-4 py-2 text-sm md:text-base rounded-full font-semibold shadow-lg cursor-default 
                      bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                      border border-purple-500/20 text-purple-300 
                      hover:text-pink-300 hover:border-pink-400 transition-all"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 💼 EXPERIENCE */}
                <section className="cursor-pointer">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10">
                        Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-700 shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold text-pink-400">{exp.role}</h3>
                                <p className="text-sm text-slate-400 mb-2">{exp.company} • {exp.period}</p>
                                <p className="text-slate-300 leading-relaxed">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 🎓 EDUCATION */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="cursor-pointer"
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-10">
                        Education
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-700 shadow-xl hover:shadow-rose-500/30 transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold text-rose-400">{edu.degree}</h3>
                                <p className="text-sm text-slate-400">{edu.institute} • {edu.period}</p>
                                <p className="text-slate-300 leading-relaxed mt-3">{edu.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 🌟 My DSA Journey - Upgraded Design */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="py-16 px-4 md:px-16 bg-gradient-to-b from-slate-950 to-slate-900"
                >
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text pb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-center mb- animate-gradient-x">
                        My DSA Journey
                    </h2>

                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12">
                        I continuously practice algorithms and data structures to sharpen my problem-solving skills.
                        Over time, I have solved <span className="font-semibold text-purple-400">150+ DSA problems</span>,
                        strengthening my ability to write efficient, scalable, and clean code.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-700 shadow-xl text-center transition-all duration-300 hover:border-purple-400"
                        >
                            <div className="text-5xl mb-4 text-purple-400">📝</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest">Total Problems Solved</div>
                            <div className="text-4xl font-bold text-purple-400 mt-2">150+</div>
                            <div className="mt-4 text-sm text-slate-300">
                                DSA problems across multiple platforms
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-700 shadow-xl text-center transition-all duration-300 hover:border-pink-400"
                        >
                            <div className="text-5xl mb-4 text-pink-400">💻</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest">Platforms</div>
                            <div className="mt-2 text-sm text-slate-300">
                                LeetCode, GeeksforGeeks, and hands-on problem-solving exercises
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-700 shadow-xl text-center transition-all duration-300 hover:border-indigo-400"
                        >
                            <div className="text-5xl mb-4 text-indigo-400">🎯</div>
                            <div className="text-sm text-slate-400 uppercase tracking-widest">Focus Areas</div>
                            <div className="mt-2 text-sm text-slate-300">
                                Algorithms, Data Structures, Problem Solving Patterns & Optimized Solutions
                            </div>
                        </motion.div>
                    </div>
                </motion.section>



                {/* 🏆 ACHIEVEMENTS */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-10">
                        Achievements
                    </h2>
                    <ul className="list-disc list-inside space-y-3 text-slate-300 text-lg leading-relaxed pl-4">
                        <li>🏅 Winner — Web Development Award in Academics (1st Year, 2023)</li>
                        <li>📜 Certified in Web Development & DSA — ApnaCollege.in</li>
                        <li>🌐 Built practical web projects using Next.js, React, Node.js, and Tailwind CSS</li>
                        <li>💻 Solved 150+ DSA problems to strengthen algorithmic skills</li>
                    </ul>
                </motion.section>

            </main>
        </>
    );
}
