import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { CheckCircle2, Award, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Check vs Mate Chess Academy — our story, our coaches Puneet Manchanda & Chirag Atreja, and our mission to develop chess excellence in young minds.',
  openGraph: {
    title: 'About Us | Check vs Mate Chess Academy',
    description: 'Our story, our coaches, and our mission.',
  },
}

const values = [
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We push every student toward their personal best — whether that means their first checkmate or a national medal.',
  },
  {
    icon: Heart,
    title: 'Passion',
    desc: "Chess is not just a game here — it's a way of thinking, growing, and building character.",
  },
  {
    icon: Target,
    title: 'Structure',
    desc: 'Every lesson follows a proven methodology. Clear goals, measurable progress, and deliberate practice.',
  },
  {
    icon: CheckCircle2,
    title: 'Integrity',
    desc: 'We believe in fair play, respect for opponents, and honest self-assessment — on and off the board.',
  },
]

const coaches = [
  {
    name: 'Puneet Manchanda',
    role: 'Founder & Head Coach',
    since: 'Est. 2013 · 12+ Years Coaching',
    bio: [
      'Puneet Manchanda founded Check vs Mate Chess Academy in 2013 with a single vision: to make quality chess education accessible to every young mind in Delhi/NCR.',
      'Over 12+ years of full-time coaching, he has mentored hundreds of students across all age groups and competitive levels — from curious beginners to national-level competitors.',
      'His teaching philosophy centres on building a strong foundation of fundamentals, instilling the habit of deep thinking, and nurturing a love for the game that lasts a lifetime.',
    ],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face',
    // TODO: Replace with real photo — save as /public/images/puneet-manchanda.jpg
  },
  {
    name: 'Chirag Atreja',
    role: 'Co-Founder & Coach',
    since: 'Coaching since 2020',
    bio: [
      'Chirag Atreja joined Check vs Mate in 2020 as a co-founder and has since become an integral part of the academy\'s coaching team.',
      'His approach is rooted in concept clarity and structured preparation — ensuring students truly understand each idea before moving forward.',
      'Chirag specialises in building the competitive mindset young players need to perform under pressure in tournament settings.',
    ],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=face',
    // TODO: Replace with real photo — save as /public/images/chirag-atreja.jpg
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title="Our Story & Our Team"
        subtitle="Founded in 2013, Check vs Mate has been shaping young chess minds across Delhi/NCR for over a decade."
      />

      {/* Our Story */}
      <section className="py-20 bg-cream" aria-label="Our story" id="our-story">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&h=450&fit=crop"
                alt="Kids in a chess class at Check vs Mate Academy"
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-gold/20 -z-10" aria-hidden="true" />
          </div>
          <div>
            <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="section-title">A Decade of Chess Excellence</h2>
            <div className="space-y-4 mt-4">
              <p className="font-body text-gray-600 leading-relaxed">
                Check vs Mate Chess Academy was founded in 2013 by Puneet Manchanda with a clear mission — to provide structured, high-quality chess coaching to children in Delhi/NCR.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                What started as a small coaching centre has grown into a trusted institution where 100+ students have been trained, and many have gone on to represent their districts, states, and compete at national levels across age categories including Under 7, 9, 11, and 13.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                {/* TODO: Add more about the academy's journey */}
                Today, we offer group classes at our academy, live online sessions, and personalised home coaching — all built on the same proven methodology that has delivered consistent results for over a decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 bg-maroon/5" aria-label="Meet the coaches" id="coaches">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">The Team</p>
            <h2 className="section-title mx-auto">Meet the Coaches</h2>
          </div>

          <div className="space-y-12">
            {coaches.map(({ name, role, since, bio, image }, idx) => (
              <div
                key={name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`relative ${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto lg:mx-0">
                    <Image
                      src={image}
                      alt={`Photo of ${name}, ${role}`}
                      width={500}
                      height={500}
                      className="w-full object-cover aspect-square"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-flex items-center gap-2 bg-maroon/10 rounded-full px-3 py-1 text-xs text-maroon font-semibold mb-4">
                    ♟ {since}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-maroon">{name}</h3>
                  <p className="font-body text-gold font-semibold mt-1">{role}</p>
                  <div className="space-y-3 mt-4">
                    {bio.map((para, i) => (
                      <p key={i} className="font-body text-gray-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-cream" aria-label="Mission and values" id="values">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="section-title mx-auto">Mission &amp; Values</h2>
            <p className="section-subtitle mx-auto text-center mt-3">
              Every lesson at Check vs Mate is guided by these core principles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card border border-maroon/10 text-center hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-maroon text-lg">{title}</h3>
                <p className="font-body text-sm text-gray-600 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
