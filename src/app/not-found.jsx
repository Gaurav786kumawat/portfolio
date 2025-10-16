// app/not-found.js

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0a1a2f] px-6">
            <div className="text-center">
                {/* Big 404 */}
                <h1 className="text-[10rem] md:text-[12rem] font-extrabold text-white/90 tracking-widest">
                    404
                </h1>

                {/* Main message */}
                <p className="text-2xl md:text-3xl mt-6 text-gray-200">
                    Oops! Page not found.
                </p>

                {/* Subtext */}
                <p className="mt-4 text-gray-400 max-w-md mx-auto">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Luxury gradient button */}
                <Link
                    href="/"
                    className="mt-8 inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 
                text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:scale-105 
                    transition-transform duration-300"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
}
