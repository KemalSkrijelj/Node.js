<<<<<<< HEAD
import { Books } from "@prisma/client";
import Link from "next/link";
import { DeleteDialog } from "./components/DeleteDialog";

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
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
          href="/books/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Book
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book: Books) => (
          <div key={book.id}>
            <Link href={`/books/${books.id}`}>
              <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <DeleteDialog
                    bookId={book.id}
                    bookTitle={book.title}
                  />
                </div>
                <p className="text-gray-600">{book.title}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {book.description}
                </p>
                <p className="text-sm font-medium mt-2">
                  Author: {book.author} 
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
=======
import React from 'react'


export default function Page() {
  return (
    <div>Books page</div>
  )
}
>>>>>>> f250926fdc3f4eee8b0691595dfe34c4ccf60946
