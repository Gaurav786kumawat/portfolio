// layout.jsx (server component)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";


export const metadata = {
  title: 'Gaurav Kumawat | Portfolio',
  description: 'Gaurav Kumawat — Frontend Developer. Projects, skills, experience, and contact.',
  metadataBase: new URL('https://gauravkumawat.online'), // <-- ADD THIS
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Gaurav Kumawat | Portfolio',
    description: 'Frontend Developer Projects and Skills',
    images: '/images/og-image.png',
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
