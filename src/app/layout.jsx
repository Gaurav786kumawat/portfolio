// layout.jsx (server component)
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedLayout from "./components/AnimatedLayout";


export const metadata = {
  title: 'Gaurav Kumawat | Portfolio',
  description: 'Gaurav Kumawat — Full Stack Developer.',
  metadataBase: new URL('https://portfolio.gauravkumawat.online'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Gaurav Kumawat | Portfolio',
    description: 'Full Stack Developer',
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
        <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-B9HKJXT1QL"></script>
          <script id="google-analytics" strategy="afterInteractive">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B9HKJXT1QL', { page_path: window.location.pathname });
          </script>
        <Footer />
      </body>
    </html>
  );
}
