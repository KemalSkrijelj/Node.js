import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Books Not Found</h2>
      <p className="text-gray-600 mb-4">Could not find the requested book.</p>
      <Link
        href="/" 
        className="text-blue-500 hover:text-blue-700"
      >
        ← Back 
      </Link>
    </div>
  )
} 