import Link from 'next/link'
import { Users, Monitor, Home, Trophy } from 'lucide-react'

const ageGroups = [
  { label: 'Under 6', desc: 'Fun, game-based intro to chess fundamentals for little ones.' },
  { label: 'Under 10', desc: 'Core tactics, openings, and building a competitive mindset.' },
  { label: 'Under 14', desc: 'Advanced strategy, endgames, and tournament preparation.' },
  { label: 'Above 14', desc: 'Deep analysis, opening repertoire & serious competitive play.' },
]

const formats = [
  {
    icon: Users,
    title: 'Group Classes',
    desc: 'Interactive sessions at our academy fostering teamwork and peer competition.',
  },
  {
    icon: Monitor,
    title: 'Online Sessions',
    desc: 'Live one-on-one and group coaching from the comfort of your home.',
  },
  {
    icon: Home,
    title: 'Home Coaching',
    desc: "Personalised lessons at your doorstep, tailored to your child's pace.",
  },
  {
    icon: Trophy,
    title: 'Tournament Prep',
    desc: 'Specialised training for district, state, and national-level competitions.',
  },
]

export default function ProgramsOverview() {
  return (
    <section
      className="py-20 bg-maroon/5 chess-pattern"
      aria-label="Programs overview"
      id="programs-overview"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Our Programs
          </p>
          <h2 className="section-title mx-auto">Chess Training for All Age Groups</h2>
          <p className="section-subtitle mx-auto text-center mt-3">
            Structured curricula designed for every stage of a child's chess journey.
          </p>
        </div>

        {/* Age groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {ageGroups.map(({ label, desc }) => (
            <div
              key={label}
              className="card border border-maroon/10 text-center hover:border-maroon/30 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-display font-bold text-maroon text-lg">♟</span>
              </div>
              <h3 className="font-display font-bold text-maroon text-lg">{label}</h3>
              <p className="font-body text-xs text-gray-500 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Training formats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card flex flex-col gap-3 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-maroon flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-maroon text-base">{title}</h3>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/programs" className="btn-primary">
            See All Programs
          </Link>
        </div>

      </div>
    </section>
  )
}
