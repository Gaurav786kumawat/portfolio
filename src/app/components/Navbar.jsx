'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="w-full fixed top-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-slate-900/40 border-b border-white/20 dark:border-slate-800/60 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

                {/* --- Logo --- */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300"
                >
                    Gaurav
                </Link>

                {/* --- Desktop Menu --- */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <motion.div key={link.name} whileHover={{ y: -2 }}>
                                <Link
                                    href={link.href}
                                    className={`relative text-base font-medium transition-colors duration-200 ${isActive
                                            ? "text-pink-600 dark:text-pink-400"
                                            : "text-slate-700 dark:text-slate-200 hover:text-pink-500 dark:hover:text-pink-400"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 rounded-full"
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* --- Mobile Menu Button --- */}
                <motion.button
                    className="md:hidden p-2 rounded-lg bg-white/40 dark:bg-slate-800/40 border border-slate-200/20 dark:border-slate-700/40 backdrop-blur-md hover:shadow-md transition"
                    onClick={() => setOpen(!open)}
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    aria-label="Menu"
                >
                    {open ? "✕" : "☰"}
                </motion.button>
            </div>

            {/* --- Mobile Menu Dropdown --- */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden px-6 pt-3 pb-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200/20 dark:border-slate-800/60 shadow-lg rounded-b-3xl"
                    >
                        <div className="flex flex-col gap-4 text-center">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`block text-lg font-medium transition-colors duration-200 ${isActive
                                                ? "text-pink-600 dark:text-pink-400 underline underline-offset-4"
                                                : "text-slate-700 dark:text-slate-200 hover:text-pink-500 dark:hover:text-pink-400"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
