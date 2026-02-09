import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Head from "next/head";


export default function ContactPage() {
    return (
        <>

  <Head>
                {/* Primary Meta Tags */}
                <title>Contact Me - Gaurav Kumawat | Get In Touch for Web Development Projects</title>
                <meta name="title" content="Contact Me - Gaurav Kumawat | Get In Touch for Web Development Projects" />
                <meta 
                    name="description" 
                    content="Ready to start your next web project? Contact Gaurav Kumawat, a Full Stack Developer specializing in MERN Stack, Next.js, and React. Available for freelance projects, collaborations, and full-time opportunities. Get a response within 24 hours." 
                />
                <meta 
                    name="keywords" 
                    content="contact web developer, hire full stack developer, freelance developer, MERN stack developer for hire, Next.js developer contact, React developer hire, web development services, Gaurav Kumawat contact, freelance projects, collaboration opportunities" 
                />
                <meta name="author" content="Gaurav Kumawat" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio.gauravkumawat.online/contact" />
                <meta property="og:title" content="Contact Me - Gaurav Kumawat | Get In Touch for Web Development Projects" />
                <meta 
                    property="og:description" 
                    content="Ready to start your next web project? Contact me for freelance work, collaborations, and full-time opportunities. Response within 24 hours guaranteed." 
                />
                <meta property="og:image" content="https://portfolio.gauravkumawat.online/images/contact-og.png" />
                <meta property="og:site_name" content="Gaurav Kumawat Portfolio" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://portfolio.gauravkumawat.online/contact" />
                <meta property="twitter:title" content="Contact Me - Gaurav Kumawat | Get In Touch for Web Development Projects" />
                <meta 
                    property="twitter:description" 
                    content="Ready to start your next web project? Contact me for freelance work, collaborations, and full-time opportunities. Response within 24 hours guaranteed." 
                />
                <meta property="twitter:image" content="https://portfolio.gauravkumawat.online/images/contact-og.png" />
                <meta property="twitter:creator" content="@GauravKumawat" />

                {/* Additional SEO Tags */}
                <link rel="canonical" href="https://portfolio.gauravkumawat.online/contact" />
                <meta name="theme-color" content="#e11d48" />
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />

                {/* Contact Information - Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            name: "Contact Gaurav Kumawat",
                            description: "Get in touch with Gaurav Kumawat for web development projects, freelance work, and collaborations",
                            url: "https://portfolio.gauravkumawat.online/contact",
                            mainEntity: {
                                "@type": "Person",
                                name: "Gaurav Kumawat",
                                jobTitle: "Full Stack Developer",
                                email: "gaurav18kumawat@gmail.com",
                                url: "https://portfolio.gauravkumawat.online",
                                sameAs: [
                                    "https://github.com/Gaurav786kumawat",
                                    "https://linkedin.com/in/gauravkumawatkirodiwal"
                                ],
                                contactPoint: {
                                    "@type": "ContactPoint",
                                    contactType: "Professional Services",
                                    email: "gaurav18kumawat@gmail.com",
                                    availableLanguage: ["English", "Hindi"]
                                }
                            }
                        })
                    }}
                />

                {/* Service Offering - Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            name: "Gaurav Kumawat Web Development Services",
                            description: "Full Stack Web Development services including MERN Stack, Next.js, React, and Node.js development",
                            provider: {
                                "@type": "Person",
                                name: "Gaurav Kumawat",
                                jobTitle: "Full Stack Developer"
                            },
                            areaServed: {
                                "@type": "Place",
                                name: "Worldwide"
                            },
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Web Development Services",
                                itemListElement: [
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Full Stack Development",
                                            description: "Complete web application development using MERN stack"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Frontend Development",
                                            description: "Modern responsive UI development with React and Next.js"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Backend Development",
                                            description: "Scalable backend APIs with Node.js and Express"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />

                {/* Breadcrumb Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://portfolio.gauravkumawat.online"
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Contact",
                                    item: "https://portfolio.gauravkumawat.online/contact"
                                }
                            ]
                        })
                    }}
                />

                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Gaurav Kumawat - Full Stack Developer",
                            url: "https://portfolio.gauravkumawat.online",
                            logo: "https://portfolio.gauravkumawat.online/images/profile.png",
                            contactPoint: {
                                "@type": "ContactPoint",
                                email: "gaurav18kumawat@gmail.com",
                                contactType: "Customer Service",
                                availableLanguage: ["en", "hi"]
                            },
                            sameAs: [
                                "https://github.com/Gaurav786kumawat",
                                "https://linkedin.com/in/gauravkumawatkirodiwal"
                            ]
                        })
                    }}
                />

                {/* FAQ Schema for Common Questions */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [
                                {
                                    "@type": "Question",
                                    name: "How quickly do you respond to inquiries?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "I usually respond within 24 hours to all project inquiries and collaboration requests."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    name: "What services do you offer?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "I offer full stack web development services including MERN stack development, Next.js applications, React frontend development, Node.js backend APIs, and database management."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    name: "Are you available for freelance work?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Yes, I am available for freelance projects, collaborations, and full-time opportunities. Feel free to reach out through the contact form."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    name: "What technologies do you work with?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "I specialize in Next.js, React, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, Tailwind CSS, and modern web development tools."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </Head>

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
