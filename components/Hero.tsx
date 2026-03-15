import Link from 'next/link'
import Image from 'next/image'
import { Star, Trophy, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-maroon"
      aria-label="Hero section"
      id="hero"
    >
      {/* Chess board pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-conic-gradient(rgba(255,255,255,0.15) 0% 25%, transparent 0% 50%)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-maroon-950 via-maroon to-maroon-800"
        aria-hidden="true"
      />

      {/* Decorative chess pieces */}
      <div className="absolute top-12 right-8 text-white/5 text-[200px] font-serif leading-none select-none hidden lg:block" aria-hidden="true">
        ♛
      </div>
      <div className="absolute bottom-8 left-4 text-white/5 text-[120px] font-serif leading-none select-none hidden md:block" aria-hidden="true">
        ♜
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text content */}
        <div className="text-white animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-body mb-6">
            <Star size={14} className="text-gold fill-gold" />
            <span>4.9 ★ on Google · 97+ Reviews</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Where Young Minds{' '}
            <span className="text-gold">Master Chess</span>
          </h1>

          <p className="font-body text-white/80 text-lg mt-6 leading-relaxed max-w-lg">
            Expert chess coaching for children of all ages — through group classes, online sessions, and personalised home coaching. Join 100+ kids already on their chess journey.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: Users, label: '100+ Kids Trained' },
              { icon: Trophy, label: 'District · State · National' },
              { icon: Star, label: 'Est. 2013 · 12+ Years' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                <Icon size={16} className="text-gold flex-shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact" className="btn-gold text-base px-8 py-3.5">
              Book Free Demo
            </Link>
            <Link href="/programs" className="btn-secondary border-white text-white hover:bg-white hover:text-maroon text-base px-8 py-3.5">
              View Programs
            </Link>
          </div>
        </div>

        {/* Image card */}
        <div className="relative animate-fade-in animate-delay-300 hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
            <Image
              src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=700&h=500&fit=crop"
              alt="Children learning chess at Check vs Mate Chess Academy"
              width={700}
              height={500}
              className="w-full object-cover"
              priority
            />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <p className="font-display font-bold text-maroon text-lg">100+ Kids</p>
              <p className="font-body text-xs text-gray-500">Trained Successfully</p>
            </div>
          </div>

          {/* Decorative corner element */}
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gold/30 -z-10"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  )
}
