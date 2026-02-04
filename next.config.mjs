import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // =========================
  // MDX SUPPORT
  // =========================
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // =========================
  // PERFORMANCE
  // =========================
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // =========================
  // SECURITY + SEO HEADERS
  // =========================
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // 🔐 Security
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // ⚡ SEO + Performance
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "img-src * data: blob:; " +
              "media-src 'self' https:; " +
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; " +
              "style-src 'self' 'unsafe-inline'; " +
              "font-src 'self' data: https:; " +
              "connect-src *;",
          },
        ],
      },
    ];
  },

  // =========================
  // EXPERIMENTAL (SAFE ONES)
  // =========================
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default withMDX(nextConfig);
