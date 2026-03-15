import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cream px-4">
      <div className="text-center">
        <div className="text-9xl font-serif text-maroon/20 select-none leading-none mb-4" aria-hidden="true">
          ♟
        </div>
        <h1 className="font-display text-5xl font-bold text-maroon">404</h1>
        <p className="font-body text-gray-600 mt-3 text-lg">Oops — this page made an illegal move.</p>
        <p className="font-body text-gray-400 mt-2 text-sm">The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Go Back Home
        </Link>
      </div>
    </section>
  )
}
