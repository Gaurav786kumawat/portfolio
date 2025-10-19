import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  // ✅ Use relative path from project root (Linux + Windows safe)
  const postsDir = path.join(process.cwd(), "src/app/blog/posts");

  let files = [];
  try {
    files = fs.readdirSync(postsDir);
  } catch (error) {
    console.error("❌ Blog folder not found:", error.message);
    return (
      <div className="p-10 text-center mt-15">
        <h1 className="text-2xl font-bold mb-4">No blog posts found 😭</h1>
        <p className="text-gray-500">
          Make sure your posts are inside:
          <code> src/app/blog/posts </code>
        </p>
      </div>
    );
  }

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const fileContent = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(fileContent);
    return { slug, title: data.title, date: data.date, description: data.description };
  });

  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts 📝</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
