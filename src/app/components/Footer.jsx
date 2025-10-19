'use client';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();
    const iconHover = { scale: 1.25, rotate: 8 };
    const iconTransition = { type: "spring", stiffness: 300, damping: 15 };

    return (
        <footer className="w-full mt-20 backdrop-blur-2xl bg-white/30 dark:bg-slate-900/30 border-t border-white/20 dark:border-slate-800/60 shadow-[0_-4px_25px_rgba(255,255,255,0.05)]">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

                {/* Left: Branding */}
                <div>
                    <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent mb-3 tracking-tight">
                        Gaurav Kumawat
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                        Crafting sleek, responsive, and immersive digital experiences with code & creativity.
                    </p>

                    <div className="flex gap-5 text-xl mt-5">
                        <motion.a
                            href="https://github.com/Gaurav786kumawat"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={iconHover}
                            transition={iconTransition}
                            className="hover:text-pink-500 dark:hover:text-pink-400 transition"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/gauravkumawatkirodiwal"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={iconHover}
                            transition={iconTransition}
                            className="hover:text-pink-500 dark:hover:text-pink-400 transition"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="https://instagram.com/arnavsingh820"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={iconHover}
                            transition={iconTransition}
                            className="hover:text-pink-500 dark:hover:text-pink-400 transition"
                        >
                            <FaInstagram />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/GauravKumawat_7"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={iconHover}
                            transition={iconTransition}
                            className="hover:text-pink-500 dark:hover:text-pink-400 transition"
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>
                </div>

                {/* Right Section Wrapper (Explore + Legal side by side on small screens) */}
                <div className="sm:col-span-2 md:col-span-2 grid grid-cols-2 gap-10 md:gap-20">
                    {/* Explore Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/about" className="hover:text-pink-500 transition">About</Link></li>
                            <li><Link href="/projects" className="hover:text-pink-500 transition">Projects</Link></li>
                            <li><Link href="/skills" className="hover:text-pink-500 transition">Skills</Link></li>
                            <li><Link href="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="/privacy-policy" className="hover:text-pink-500 transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-pink-500 transition">Terms & Conditions</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-pink-500 transition">Cookie Policy</Link></li>
                            <li><Link href="/faq" className="hover:text-pink-500 transition">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-white/20 dark:border-slate-800/60 py-5 text-center text-sm text-slate-600 dark:text-slate-400">
                © {year} <span className="font-semibold text-pink-500">Gaurav</span>. All rights reserved.
            </div>
        </footer>
    );
}
