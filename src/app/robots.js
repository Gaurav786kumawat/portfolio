/**
 * =========================================================
 * ROBOTS.JS
 * =========================================================
 * ✔ App Router native robots
 * ✔ SEO + AI crawler ready
 * ✔ Crawl budget optimized
 * =========================================================
 */

export default function robots() {
  const BASE_URL = "https://portfolio.gauravkumawat.online";

  return {
    rules: [
      // ============================
      // GLOBAL RULE (ALL BOTS)
      // ============================
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
      },

      // ============================
      // GOOGLE
      // ============================
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },

      // ============================
      // BING / MICROSOFT
      // ============================
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "MSNBot",
        allow: "/",
      },

      // ============================
      // YANDEX / DUCKDUCKGO
      // ============================
      {
        userAgent: "Yandex",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },

      // ============================
      // AI / LLM CRAWLERS (FUTURE SEO)
      // ============================
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      // ============================
      // SOCIAL MEDIA CRAWLERS
      // ============================
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "Slackbot",
        allow: "/",
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
