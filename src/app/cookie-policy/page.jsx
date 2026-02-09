
import { motion } from "framer-motion";

export default function CookiePolicy() {
    const sections = [
        {
            title: "1. Introduction",
            content:
                "This Cookie Policy explains how cookies and similar technologies may be used on this portfolio website built by Gaurav Kumawat. By continuing to browse or use the site, you acknowledge and accept the practices described here."
        },
        {
            title: "2. Do We Use Cookies?",
            content:
                "This website does not use any tracking, advertising, or analytics cookies. It functions without storing or reading cookies on your device."
        },
        {
            title: "3. Third-Party Services",
            content:
                "The website may be hosted on services like Vercel or Netlify, which can automatically log limited technical information such as your IP address or browser type for performance and security purposes. These logs are handled under their own privacy policies, not by me directly."
        },
        {
            title: "4. Embedded Content",
            content:
                "Some project pages may include embedded demos, videos, or external resources. Such third-party content (for example, YouTube or CodePen embeds) might set their own cookies. I have no control over these cookies, and you should review the respective site’s cookie policy."
        },
        {
            title: "5. Managing Cookies",
            content:
                "You can clear or block cookies at any time through your browser settings. Since this site doesn’t rely on cookies, doing so will not affect your experience here."
        },
        {
            title: "6. Updates to This Policy",
            content:
                "This Cookie Policy may be updated if I add new integrations or technologies that use cookies. The latest version will always be available on this page with an updated date."
        },
        {
            title: "7. Contact",
            content:
                "If you have any questions regarding this Cookie Policy or data usage, you can reach me directly at gaurav18kumawat@gmail.com."
        }
    ];


    return (
        <>
            <main className="max-w-5xl mx-auto px-6 pt-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mb-4 pb-3">
                        Cookie Policy
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Learn how and why we use cookies to enhance your browsing experience.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {sections.map((section, idx) => (
                        <section key={idx} className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-700 shadow-xl hover:shadow-pink-500/20 transition-all duration-300" >
                            <h2 className="md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                                {section.title}
                            </h2>
                            <p
                                className="text-slate-300 leading-relaxed text-base whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </section>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-20 text-center text-slate-500 dark:text-slate-400 text-sm">
                    <p>Last updated on <span className="text-pink-400 font-medium">October 2025</span>.</p>
                </div>
            </main>
        </>
    );
}
