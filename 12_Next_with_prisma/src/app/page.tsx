import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center ">
      <Link
        href="/courses"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
      >
        View Courses
      </Link>
      <Link
        href="/categories"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
      >
        View Categories
      </Link>
      <Link
        href="/books"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
      >
        View Books
      </Link>
    </div>
  )
}
