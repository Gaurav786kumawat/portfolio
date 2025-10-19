"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("https://formspree.io/f/mdkwydbo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("❌ Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("⚠️ Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl space-y-6"
            >
                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-300">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-300">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Freelance Project / Collaboration"
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-rose-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-slate-600 dark:text-slate-300">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-rose-500 focus:outline-none resize-none"
                    ></textarea>
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-rose-500/30 transition disabled:opacity-70"
                >
                    {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {status && (
                    <p className="text-center text-sm text-rose-600 dark:text-rose-400 mt-2">
                        {status}
                    </p>
                )}
            </motion.form>

            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-rose-600">Get in Touch</h2>
                    <div className="space-y-4">
                        <a href="mailto:gaurav18kumawat@gmail.com" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-rose-600 transition">
                            <FaEnvelope className="text-rose-600 w-5 h-5" /> gaurav18kumawat@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/gauravkumawatkirodiwal" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-rose-600 transition">
                            <FaLinkedin className="text-rose-600 w-5 h-5" /> LinkedIn
                        </a>
                        <a href="https://github.com/Gaurav786kumawat" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-rose-600 transition">
                            <FaGithub className="text-rose-600 w-5 h-5" /> GitHub
                        </a>
                        <a href="https://instagram.com/arnavsingh820" className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-rose-600 transition">
                            <FaInstagram className="text-rose-600 w-5 h-5" /> Instagram
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-tr from-rose-500/10 to-pink-400/10 border border-slate-200 dark:border-slate-700 shadow text-center">
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                        Based in Sikar, Rajasthan, India 🇮🇳
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Available for remote and onsite collaborations.
                    </p>
                </div>

            </motion.div>
        </div>
    );
}
