// AnimatedLayout.jsx (client component)

import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLayout({ children, routeKey }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={routeKey ?? "default"} // fallback key if none provided
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
