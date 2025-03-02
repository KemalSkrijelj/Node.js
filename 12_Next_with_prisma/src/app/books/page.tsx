import { Category } from "@prisma/client";
import Link from "next/link";
import { DeleteDialog } from "./components/DeleteDialog";

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

export default async function BookPage() {
  const books = await getCategories();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Books</h1>
        <Link
          href="/courses/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Book
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((categories: Books) => (
          <div key={categories.id}>
            <Link href={`/categories/${categories.id}`}>
              <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <DeleteDialog
                    courseId={categories.id}
                    courseTitle={categories.name}
                  />
                </div>
                <p className="text-gray-600">{categories.name}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {categories.description}
                </p>
                <p className="text-sm font-medium mt-2">
                  Duration: {categories.duration} 
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
