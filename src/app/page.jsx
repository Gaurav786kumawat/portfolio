'use client';
import Link from "next/link";
import PageWrapper from "./components/PageWrapper";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiLeetcode } from "react-icons/si";
import Image from "next/image";

export default function Home() {
  const featuredProjects = [
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
      desc: "A performance-first Next.js portfolio with Framer Motion animations and server-side optimizations.",
      image: "/images/projects/portfolio.jpeg",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/Gaurav786kumawat/portfolio/",
      live: "https://portfolio.gauravkumawat.online/"
    },
    {
      title: "AI Chatbot",
      desc: "AI-powered chat interface integrating OpenAI with conversational memory and prompt controls.",
      image: "/images/projects/devBlog2.jpeg",
      tech: ["React", "Node.js", "OpenAI"],
      github: "https://github.com/Gaurav786kumawat/",
      live: "https://chatgpt-demo.vercel.app"
    },
    {
      title: "E-Commerce Dashboard",
      desc: "Full-stack e-commerce admin dashboard with analytics, product management, and Stripe payments.",
      image: "/images/projects/ecommerce5.jpeg",
      tech: ["Next.js", "MongoDB", "Stripe"],
      github: "https://github.com/Gaurav786kumawat/",
      live: "https://store-demo.vercel.app"
    }
  ];

  const currentSkills = [
    "Next.js", "React", "Tailwind CSS", "HTML5", "CSS3",
    "JavaScript", "TypeScript", "Node.js", "Express.js",
    "MongoDB", "MySQL", "PostgreSQL", "Redux", "Framer Motion"
  ];

  const learningSkills = [
    "TensorFlow.js", "LangChain", "Prisma",
    "Serverless Patterns", "Performance Optimization", "GraphQL", "Redis"
  ];

  const testimonials = [
    { name: "Rahul (Designer)", text: "Gaurav elevated our product UI — pixel perfect and fast." },
    { name: "Pritam (PM)", text: "Reliable, communicates clearly, and ships production-quality features." }
  ];


  return (
    <>
      <PageWrapper>
        <main className="max-w-7xl mx-auto px-4 py-20 space-y-32">

          {/* 1. HERO */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-wider text-rose-500">Hi — I’m</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Gaurav Kumawat
                <span className="block text-xl md:text-2xl font-semibold text-slate-500 mt-2">
                  Full-Stack Developer | MERN | Next.js | DSA Enthusiast
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                I craft scalable web solutions from concept to deployment.
                As a full-stack developer, I blend modern frontend precision with robust backend logic — building high-performance apps that are fast, secure, and beautifully designed.
                My goal is to turn complex problems into elegant digital experiences that just "work".
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="#projects" className="inline-flex items-center px-5 py-3 rounded-lg border border-rose-600 text-rose-600 font-semibold hover:bg-rose-600 hover:text-white transition">
                  View Projects
                </Link>

                <Link href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 transition">
                  Contact Me
                </Link>

                <a href="./docs/My_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:shadow-lg transition">
                  Download Resume
                </a>
              </div>

              {/* small badges */}
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-rose-50 text-rose-700 dark:bg-rose-800/30 dark:text-rose-200">Full-Stack</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-700 dark:bg-purple-800/30 dark:text-purple-200">DSA • 150+ solved</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-50 text-slate-700 dark:bg-slate-800/30 dark:text-slate-200">Open Source</span>
              </div>
            </motion.div>

            {/* Right: Image + subtle gradient/glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative flex items-center justify-center"
            >
              {/* Glowing gradient background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-pink-400/10 to-rose-400/15 blur-3xl"></div>

              {/* Main profile card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 dark:border-slate-700 shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Gaurav Kumawat"
                  width={384} // w-96
                  height={384} // h-96
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl"
                  priority
                />

                {/* Small floating stat card */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/85 px-4 py-2 rounded-2xl shadow-md border border-slate-200/40 dark:border-slate-700/40 flex items-center gap-3">
                  <SiLeetcode className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="text-xs text-slate-500">DSA</div>
                    <div className="text-sm font-semibold">150+ Problems</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 2. ABOUT PREVIEW */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 space-y-4"
            >
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                I am a Full-Stack Web Developer with a passion for building scalable and performant applications.
                From crafting responsive, user-friendly interfaces to designing robust backend systems with Node.js, Express, and MongoDB, I enjoy creating solutions that balance usability, speed, and maintainability.
                I also have a strong foundation in DSA, which helps me write optimized algorithms, solve complex problems efficiently, and build clean, reliable code.
              </p>

              <div className="flex gap-4">
                <Link href="/about" className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                  Read More
                </Link>
                <Link href="/projects" className="px-4 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-700 transition">
                  View Projects
                </Link>
              </div>
            </motion.div>


            {/* Quick Expertise Column */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40 shadow"
            >
              <h3 className="text-lg font-semibold">Expertise</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li><strong>Frontend:</strong> Next.js, React, Tailwind CSS, TypeScript</li>
                <li><strong>Backend:</strong> Node.js, Express.js, REST & GraphQL APIs</li>
                <li><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Redis</li>
                <li><strong>Problem Solving:</strong> Intermediate DSA (150+ algorithm & data structure challenges)</li>
                <li><strong>Dev Tools & Deployment:</strong> Git, Vercel, Netlify, Docker</li>
              </ul>
            </motion.div>

          </section>

          {/* 3. TECH STACK (Current / Learning) */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center md:text-left">Tech Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-700/40"
              >
                <h3 className="text-xl font-semibold mb-4 text-rose-400">Current Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {currentSkills.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-100 text-sm font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-6 text-sm text-slate-300">
                  <SiNextdotjs className="w-6 h-6" />
                  <FaReact className="w-5 h-5" />
                  <SiTailwindcss className="w-5 h-5" />
                  <FaNodeJs className="w-5 h-5" />
                  <SiMongodb className="w-5 h-5" />
                </div>
              </motion.div>

              {/* Learning */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="p-6 rounded-2xl bg-slate-50/60 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-700/40"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Currently Learning</h3>
                <div className="flex flex-wrap gap-3">
                  {learningSkills.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-100 text-sm font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Focused on practical integration of AI, edge patterns, and modern tooling.</p>
              </motion.div>
            </div>
          </section>

          {/* 4. FEATURED PROJECTS */}
          <section id="projects" className="space-y-6">
            {/* Section header */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <Link href="/projects" className="text-sm text-rose-600 font-medium hover:underline">
                View all projects →
              </Link>
            </div>

            {/* Project cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((p, idx) => (
                <motion.article
                  key={idx}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-700/40 bg-white/60 dark:bg-slate-900/40 shadow-lg"
                >
                  {/* Project image */}
                  <div className="h-44 md:h-48 overflow-hidden relative">
                    <Image
                      src={p.image.startsWith("/") ? p.image : `/${p.image}`} // ensure valid path
                      alt={p.title}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx === 0} // preload first image
                    />
                  </div>

                  {/* Project content */}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-rose-600">{p.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{p.desc}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-rose-100 text-rose-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      >
                        <FaGithub /> <span>GitHub</span>
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-rose-600 text-white hover:opacity-95 transition"
                      >
                        <FaExternalLinkAlt /> <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* View More Projects Button */}
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold hover:shadow-lg transition transform hover:scale-[1.02]"
              >
                View More Projects
              </Link>
            </div>
          </section>



          {/* 5. DSA / Problem-Solving Showcase */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-700/40 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-rose-400">Problem Solving & DSA</h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                I sharpen algorithms & data structures daily, building both "efficient solutions" and "problem-solving intuition".
                Focused practice on LeetCode, GFG, and real-world challenges keeps me ready for scalable, clean, and optimized code.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                {/* Problems Solved */}
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-900/30 border border-rose-100 dark:border-rose-800 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Problems Solved</div>
                  <div className="text-2xl sm:text-3xl font-bold text-rose-600 mt-1">150+</div>
                </div>

                {/* Platforms */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-200 text-sm sm:text-base">
                  <div className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                    <SiLeetcode className="w-6 h-6" /> <span>LeetCode</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                    <FaDatabase className="w-5 h-5" /> <span>GFG / Practice</span>
                  </div>
                </div>

                {/* Button */}
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white transition w-full sm:w-auto"
                >
                  My DSA Journey
                </Link>
              </div>
            </div>


            {/* Small achievement card */}
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/45 border border-slate-200/40 dark:border-slate-700/40 shadow text-center hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="text-sm text-slate-500 uppercase tracking-wide">Years Building</div>
              <div className="text-3xl font-bold text-purple-500 mt-1">2+</div>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Experience across "frontend & backend", delivering polished web apps
              </div>
            </div>

          </section>

          {/* 6. Testimonials / Achievements */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Testimonials & Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40 shadow"
                >
                  <p className="text-slate-700 dark:text-slate-200">“{t.text}”</p>
                  <footer className="mt-4 text-sm text-slate-500">— {t.name}</footer>
                </motion.blockquote>
              ))}

              <motion.div className="p-6 rounded-2xl bg-gradient-to-tr from-purple-500/10 via-pink-200/8 to-rose-400/8 border border-slate-200/30 dark:border-slate-700/30 shadow">
                <h3 className="text-xl font-semibold">Milestones</h3>
                <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li>• Built 10+ production-grade full-stack features</li>
                  <li>• Certificate of FullStack Web Development & DSA from Apna-College</li>
                  <li>• 150+ DSA problems solved</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* 7. Contact / CTA */}
          <section id="contact" className="text-center p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-800/70 border border-slate-700/40">
            <h2 className="text-3xl font-bold text-white">Let’s Build Something Amazing Together 🚀</h2>
            <p className="text-slate-300 mt-3">I’m available for freelance projects, collaborations, and full-time roles. Reach out and let’s talk.</p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="mailto:gaurav18kumawat@gmail.com" className="px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 transition">Email Me</a>
              <Link href="/contact" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition">Contact Page</Link>
              <a href="https://linkedin.com/in/gauravkumawatkirodiwal" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold">LinkedIn</a>
            </div>
          </section>

        </main>
      </PageWrapper>
    </>
  );
}
