'use client';
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "1. Introduction",
            content:
                "Welcome to my personal portfolio website. I'm Gaurav Kumawat, a full-stack developer who values your privacy. This Privacy Policy explains what data is collected through the contact form and how it is used."
        },
        {
            title: "2. Information I Collect",
            content:
                "When you submit the contact form, I may collect your name, email address, and message. This data is sent directly to my email inbox for the sole purpose of communication. No other personal data is stored or processed on the website."
        },
        {
            title: "3. How I Use Your Information",
            content:
                "I use your submitted information only to read and respond to your inquiries or collaboration requests. Your data is not shared, sold, or used for marketing purposes."
        },
        {
            title: "4. Data Retention",
            content:
                "Your contact details are stored only within my email account for as long as needed to complete our conversation or maintain a record of past communication. You can request deletion of your message anytime by contacting me directly."
        },
        {
            title: "5. Cookies & Analytics",
            content:
                "This website does not use cookies, tracking tools, or analytics services. Your visit remains anonymous and untracked."
        },
        {
            title: "6. Third-party Services",
            content:
                "The website is hosted on platforms such as Vercel or Netlify, which may collect basic technical information (like IP address or browser type) for performance and security. I do not control these logs and recommend reviewing their respective privacy policies."
        },
        {
            title: "7. Data Security",
            content:
                "Reasonable security measures are taken to protect your information. However, please note that data transmission over the internet is never completely secure, and I cannot guarantee absolute security."
        },
        {
            title: "8. Your Rights",
            content:
                "You can request to access, correct, or delete any information you have sent through the contact form by emailing me at gaurav18kumawat@gmail.com."
        },
        {
            title: "9. Changes to This Policy",
            content:
                "This Privacy Policy may be updated occasionally to reflect technical or legal changes. Updates will always be posted on this page with the revised date below."
        },
        {
            title: "10. Contact",
            content:
                "If you have questions about this Privacy Policy or how your data is handled, you can reach me directly at gaurav18kumawat@gmail.com."
        },
    ];


    return (
        <>
            <main className="max-w-5xl mx-auto px-6 pt-24">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mb-4 pb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        We respect your privacy and are committed to protecting your personal data.
                    </p>
                </div>

                {/* Policy Content */}
                <div className="space-y-10">
                    {sections.map((section, idx) => (
                        <section key={idx} className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-700 shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
                            <h2 className="md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                                {section.title}
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-20 text-center text-slate-500 dark:text-slate-400 text-sm">
                    <p>Last updated on <span className="text-pink-400 font-medium">October 2025</span>.</p>
                </div>
            </main>
        </>
    );
}
