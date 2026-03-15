import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Structured training for Under 6, 10, 14 & above',
  'Group classes, online & home coaching available',
  'District, state & national tournament preparation',
  'Critical thinking, patience & focus development',
  'Small batch sizes for personalised attention',
]

export default function AboutSummary() {
  return (
    <section
      className="py-20 bg-cream"
      aria-label="About Check vs Mate"
      id="about-summary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Image side */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&h=450&fit=crop"
              alt="Chess coaching session at Check vs Mate Academy"
              width={600}
              height={450}
              className="w-full object-cover"
            />
          </div>
          {/* Floating accent */}
          <div
            className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-gold/20 -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-maroon/10 -z-10"
            aria-hidden="true"
          />
        </div>

        {/* Text side */}
        <div>
          <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            About the Academy
          </p>
          <h2 className="section-title">
            A Decade of Nurturing Chess Excellence
          </h2>
          <p className="font-body text-gray-600 mt-4 leading-relaxed">
            Check vs Mate Chess Academy is a dedicated chess training institute focused on nurturing young minds through the game of chess. Founded in 2013 by Puneet Manchanda, we have grown into a trusted name in junior chess coaching across Delhi/NCR.
          </p>
          <p className="font-body text-gray-600 mt-3 leading-relaxed">
            With a proven training methodology and experienced coaches, we help children develop critical thinking, patience, and competitive skills that go beyond the chess board.
          </p>

          <ul className="mt-6 space-y-3" role="list">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-maroon flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-primary mt-8 inline-flex">
            Learn More About Us
          </Link>
        </div>

      </div>
    </section>
  )
}
