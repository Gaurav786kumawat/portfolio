
import { motion } from "framer-motion";

export default function TermsConditions() {
    const sections = [
        {
            title: "1. Introduction",
            content:
                "Welcome to the personal portfolio website of Gaurav Kumawat. By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using the website."
        },
        {
            title: "2. Use of This Website",
            content:
                "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment. Any attempt to interfere with the site’s operation, security, or server is strictly prohibited."
        },
        {
            title: "3. Intellectual Property",
            content:
                "All content, projects, designs, images, and source code displayed on this website are the intellectual property of Gaurav Kumawat unless stated otherwise. You may not reproduce, distribute, or reuse any content without prior written permission."
        },
        {
            title: "4. Accuracy of Information",
            content:
                "While I strive to keep all information up to date and accurate, some details such as project features or descriptions may change over time. I make no warranties about the completeness or accuracy of any content on this website."
        },
        {
            title: "5. Third-Party Links",
            content:
                "This website may include links to third-party websites such as GitHub, LinkedIn, or other external resources. These links are provided for reference only, and I am not responsible for the content or privacy practices of those websites."
        },
        {
            title: "6. Limitation of Liability",
            content:
                "This website is provided 'as is' without any guarantees or warranties. I am not responsible for any loss or damage, direct or indirect, arising from your use of this site or reliance on its content."
        },
        {
            title: "7. Modifications to Terms",
            content:
                "I reserve the right to update or modify these Terms & Conditions at any time without prior notice. Updates will be reflected on this page with a revised date at the bottom."
        },
        {
            title: "8. Governing Law",
            content:
                "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Rajasthan, India."
        },
        {
            title: "9. Contact Information",
            content:
                "If you have any questions or concerns regarding these Terms & Conditions, you can reach out through the contact form on this website or directly via email at gaurav18kumawat@gmail.com."
        },
    ];


    return (
        <>
            <main className="max-w-5xl mx-auto px-6 pt-24">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Please read these terms carefully before using this website or any of its services.
                    </p>
                </motion.div>

                {/* Terms Sections */}
                <div className="space-y-10">
                    {sections.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-700 shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                        >
                            <h2 className="md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
                                {section.title}
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                {section.content}
                            </p>
                        </motion.section>
                    ))}
                </div>

                {/* Footer Note */}
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
        </>
    );
}
