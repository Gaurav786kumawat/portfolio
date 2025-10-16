import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
        <>
            <main className="relative max-w-6xl mx-auto px-4 py-20">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"></div>

                <section className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-600 via-pink-500 to-purple-500 bg-clip-text text-transparent pb-2">
                        Let’s Build Something Amazing 🚀
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Got a web project, idea, or challenge? I’m here to turn it into a high-performance, beautiful, and scalable solution.
                        Whether it’s a full-stack app, algorithmic problem, or DSA challenge, drop me a message — I usually respond within 24 hours.
                    </p>
                </section>

                <ContactForm />
            </main>
        </>
    );
}
