import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Users, Monitor, Home, Trophy, CheckCircle2, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Explore chess programs at Check vs Mate — group classes, online sessions, home coaching & tournament prep for Under 6, Under 10, Under 14 and above.',
  openGraph: {
    title: 'Programs | Check vs Mate Chess Academy',
    description: 'Chess programs for all age groups — group, online, home & tournament coaching.',
  },
}

const ageGroups = [
  {
    label: 'Under 6',
    icon: '🐣',
    color: 'bg-pink-50 border-pink-200',
    titleColor: 'text-pink-700',
    desc: 'A fun, play-based introduction to chess. Children learn the names and moves of pieces through games, puzzles, and stories. Focus is on enjoying the game and building concentration.',
    outcomes: ['Piece names & movements', 'Basic rules & captures', 'Simple checkmates', 'Chess etiquette'],
  },
  {
    label: 'Under 10',
    icon: '🌱',
    color: 'bg-emerald-50 border-emerald-200',
    titleColor: 'text-emerald-700',
    desc: 'Core chess concepts come alive. Students learn tactical patterns, basic openings, and how to think ahead. First tournament experience is introduced at this stage.',
    outcomes: ['Tactical patterns (forks, pins)', 'Opening principles', 'Basic endgames', 'Tournament rules'],
  },
  {
    label: 'Under 14',
    icon: '⚡',
    color: 'bg-blue-50 border-blue-200',
    titleColor: 'text-blue-700',
    desc: 'Advanced strategy, positional play, and in-depth opening preparation. Students at this level are actively competing in district and state-level tournaments.',
    outcomes: ['Opening repertoire', 'Middlegame strategy', 'Complex endgames', 'Tournament preparation'],
  },
  {
    label: 'Above 14',
    icon: '🏆',
    color: 'bg-amber-50 border-amber-200',
    titleColor: 'text-amber-700',
    desc: 'Serious competitive preparation with deep opening analysis, game reviews, and psychological readiness for high-stakes tournaments at state and national level.',
    outcomes: ['Deep opening analysis', 'Game annotation & review', 'Time management under pressure', 'National-level prep'],
  },
]

const formats = [
  {
    icon: Users,
    title: 'Group Classes at Academy',
    desc: 'Join our in-person batch at the academy. Small groups ensure every child gets individual attention while benefiting from peer competition and teamwork. Sessions are structured, progressive, and fun.',
    highlight: 'Most popular',
  },
  {
    icon: Monitor,
    title: 'Online Chess Classes',
    desc: 'Live, interactive sessions via Zoom or Google Meet. Same structured curriculum as in-person. Perfect for families outside our immediate area or those with busy schedules.',
    highlight: 'Flexible timing',
  },
  {
    icon: Home,
    title: 'Home Visit Coaching',
    desc: 'Our coaches come to your home for personalised, one-on-one sessions tailored entirely to your child\'s pace, style, and goals. Available on request — contact us for availability.',
    highlight: 'Available on request',
  },
  {
    icon: Trophy,
    title: 'Tournament Preparation',
    desc: 'Dedicated coaching for students preparing for upcoming FIDE, state, or district-rated tournaments. Includes opening prep, psychological readiness, and post-game analysis.',
    highlight: 'Competitive track',
  },
]

const faqs = [
  {
    q: 'What is the minimum age to join?',
    a: 'We accept students from age 5 and above. Our Under 6 program is specially designed for very young learners with a play-based, story-driven approach.',
  },
  {
    q: 'Do you need prior chess knowledge to join?',
    a: 'Not at all! We have batches for complete beginners. Our coaches will assess your child\'s level and place them in the most appropriate batch.',
  },
  {
    q: 'How long is each session?',
    a: 'Group sessions are typically 60–90 minutes. Online sessions are 60 minutes. Home coaching sessions are flexible based on your requirement.',
  },
  {
    q: 'How many students are there per batch?',
    a: 'We keep batches small — typically 6–10 students — to ensure each child gets proper individual attention from the coach.',
  },
  {
    q: 'Do you prepare students for tournaments?',
    a: 'Yes! Tournament preparation is a core part of our curriculum for Under 10 and above. Many of our students have won at district, state, and national levels.',
  },
  {
    q: 'Can I switch from online to offline or vice versa?',
    a: 'Yes, we are flexible. Just let us know in advance and we will arrange the transition as smoothly as possible.',
  },
  // TODO: Add more FAQs based on common parent questions
]

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Programs"
        title="Chess Training for Every Level"
        subtitle="Structured, age-appropriate programs designed to take your child from their first move to the winner's podium."
      />

      {/* Age Group Cards */}
      <section className="py-20 bg-cream" aria-label="Programs by age group" id="age-groups">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">Age Groups</p>
            <h2 className="section-title mx-auto">Find the Right Program</h2>
            <p className="section-subtitle mx-auto text-center mt-3">Every program has a clear curriculum matched to the child's developmental stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ageGroups.map(({ label, icon, color, titleColor, desc, outcomes }) => (
              <div key={label} className={`rounded-2xl border p-6 ${color} hover:-translate-y-1 transition-all duration-200`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{icon}</span>
                  <h3 className={`font-display font-bold text-2xl ${titleColor}`}>{label}</h3>
                </div>
                <p className="font-body text-gray-700 text-sm leading-relaxed">{desc}</p>
                <ul className="mt-4 space-y-2">
                  {outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm font-body text-gray-600">
                      <CheckCircle2 size={15} className="text-maroon flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-20 bg-maroon/5 chess-pattern" aria-label="Training formats" id="formats">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">How We Teach</p>
            <h2 className="section-title mx-auto">Flexible Training Formats</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formats.map(({ icon: Icon, title, desc, highlight }) => (
              <div key={title} className="card border border-maroon/10 relative hover:shadow-lg transition-shadow duration-200">
                {highlight && (
                  <span className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {highlight}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-maroon flex items-center justify-center mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-maroon text-xl">{title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mt-3">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream" aria-label="Frequently asked questions" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 className="section-title mx-auto">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="card border border-maroon/10 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-body font-semibold text-maroon">
                  {q}
                  <ChevronDown size={18} className="flex-shrink-0 text-maroon transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="font-body text-gray-600 text-sm leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
