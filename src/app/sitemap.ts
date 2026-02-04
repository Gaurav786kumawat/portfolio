import { MetadataRoute } from "next";

/**
 * =========================================================
 * SITEMAP CONFIG
 * =========================================================
 * ✔ App Router native sitemap
 * ✔ TypeScript safe
 * ✔ SEO optimized priorities
 * ✔ Easy to scale (blogs, projects, pages)
 * =========================================================
 */

const BASE_URL = "https://portfolio.gauravkumawat.online";

/**
 * Helper function to generate sitemap entries
 */
const createUrl = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // ======================
        // CORE PAGES (HIGH PRIORITY)
        // ======================
        createUrl("/", 1.0, "weekly"),
        createUrl("/projects", 0.95, "weekly"),
        createUrl("/blog", 0.9, "weekly"),

        // ======================
        // SECONDARY PAGES
        // ======================
        createUrl("/about", 0.85, "monthly"),
        createUrl("/skills", 0.8, "monthly"),
        createUrl("/contact", 0.75, "yearly"),

        // ======================
        // LEGAL / INFO PAGES
        // ======================
        createUrl("/privacy-policy", 0.3, "yearly"),
        createUrl("/terms", 0.3, "yearly"),
        createUrl("/cookie-policy", 0.3, "yearly"),
        createUrl("/faq", 0.4, "yearly"),

        // ======================
        // FUTURE READY (BLOG POSTS)
        // ======================
        ...getBlogUrls(),

        // ======================
        // FUTURE READY (PROJECT PAGES)
        // ======================
        ...getProjectUrls(),
    ];
}

/**
 * =========================================================
 * DYNAMIC BLOG URLS (STATIC FOR NOW – CAN CONNECT TO DB/MDX)
 * =========================================================
 */
function getBlogUrls(): MetadataRoute.Sitemap {
    const blogSlugs = [
        "how-i-built-my-portfolio-with-nextjs",
        "react-vs-nextjs",
        "how-to-become-full-stack-developer",
    ];

    return blogSlugs.map((slug) =>
        createUrl(`/blog/${slug}`, 0.7, "monthly")
    );
}

/**
 * =========================================================
 * DYNAMIC PROJECT URLS
 * =========================================================
 */
function getProjectUrls(): MetadataRoute.Sitemap {
    const projectSlugs = [
        "portfolio-website",
        "mern-ecommerce",
        "nextjs-dashboard",
    ];

    return projectSlugs.map((slug) =>
        createUrl(`/projects/${slug}`, 0.8, "monthly")
    );
}
