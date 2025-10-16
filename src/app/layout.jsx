// layout.jsx (server component)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";


export const metadata = {
  title: 'Gaurav Kumawat | Portfolio',
  description: 'Gaurav Kumawat — Frontend Developer. Projects, skills, experience, and contact.',
  metadataBase: new URL('https://portfolio.gauravkumawat.online'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Gaurav Kumawat | Portfolio',
    description: 'Frontend Developer Projects and Skills',
    images : [
      {
        url: "https://portfolio.gauravkumawat.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Portfolio Preview",
      },
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <AnimatedLayout>{children}</AnimatedLayout>
        <Footer />
      </body>
    </html>
  );
}
