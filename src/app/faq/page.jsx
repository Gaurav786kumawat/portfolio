'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What kind of work do you do?",
            answer:
                "I build modern, responsive, and high-performance web applications using Next.js, React, Node.js, and Tailwind CSS. My focus is on clean architecture, intuitive UI, and smooth user experiences."
        },
        {
            question: "Do you take freelance or client projects?",
            answer:
                "Yes, absolutely! I’m open to freelance and collaboration opportunities — whether it’s building a full product, optimizing an existing site, or contributing to a team project. You can reach out anytime via the contact page or at gaurav18kumawat@gmail.com."
        },
        {
            question: "What’s your main tech stack?",
            answer:
                "I primarily work with the MERN stack — MongoDB, Express, React, and Node.js — along with TypeScript, Next.js, and Tailwind CSS. I’m also familiar with tools like Git, Docker, Postman, and deployment platforms like Vercel and Netlify."
        },
        {
            question: "Do you work on the backend too?",
            answer:
                "Yes, I’m a full-stack developer. I build and manage APIs, handle authentication, integrate databases, and deploy production-ready apps — not just front-end interfaces."
        },
        {
            question: "Do you have experience with DSA or problem-solving?",
            answer:
                "Yes — I’ve solved 150+ DSA problems to strengthen my logic, algorithms, and optimization skills, using Java."
        },
        {
            question: "Can you design as well?",
            answer:
                "Yes! I have hands-on experience with Figma and an understanding of UI/UX principles. I enjoy turning wireframes into clean, user-friendly interfaces that align with modern design trends."
        },
        {
            question: "How can I contact you?",
            answer:
                "You can message me through the contact form on this site or email me directly at gaurav18kumawat@gmail.com. I usually reply within a day."
        }
    ];


    return (
        <main className="max-w-5xl mx-auto px-6 pt-24">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 mb-4 pb-3">
                    FAQ (Frequently Asked Questions)
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Answers to some of the most common questions people ask me.
                </p>
            </motion.div>

            {/* FAQ List */}
            <div className="space-y-6">
                {faqs.map((faq, idx) => (
                    <motion.div
                        key={idx}
                        className="rounded-2xl bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-700 hover:border-pink-500/40 shadow-lg hover:shadow-pink-500/20 transition-all"
                        layout
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
                        >
                            <h2 className="md:text-1xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                {faq.question}
                            </h2>
                            <ChevronDown
                                className={`w-6 h-6 text-pink-400 transition-transform ${openIndex === idx ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-6 pb-6 text-slate-300 text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-20 text-center text-slate-500 dark:text-slate-400 text-sm"
            >
                <p>Last updated on <span className="text-pink-400 font-medium">October 2025</span>.</p>
            </motion.div>
        </main>
    );
}
