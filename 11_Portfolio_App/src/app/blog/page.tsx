import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

async function getBlogs() {
  const contentPath = path.join(process.cwd(), "public/content/blog");
  const filenames = await fs.readdir(contentPath);

  const blogs = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(contentPath, filename);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(".md", ""),
        title: data.title ,
        date: data.date,
      };
    })
  );

  return blogs;
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="justify-center items-center">
      <h1 className="text-center ">Blog Posts</h1>
      <ul className="flex flex-col justify-center items-center gap-3">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              Title: {blog.title}, Date: {blog.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
