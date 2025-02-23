import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

async function getProjects() {
  const contentPath = path.join(process.cwd(), "public/content/projects");
  const filenames = await fs.readdir(contentPath);

  const projects = await Promise.all(
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

  return projects;
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="justify-center items-center">
      <h1 className="text-center ">Projects Posts</h1>
      <ul className="flex flex-col justify-center items-center gap-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              Title: {project.title}, Date: {project.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
