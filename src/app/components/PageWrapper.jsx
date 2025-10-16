'use client';
import { motion } from "framer-motion";
import { Suspense } from "react";

export default function PageWrapper({ children }) {
    return (
        <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen"
            >
                {children}
            </motion.div>
        </Suspense>
    );
}
