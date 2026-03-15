import { Star, Users, Trophy, Clock } from 'lucide-react'

const stats = [
  { icon: Star, value: '4.9 ★', label: 'Google Rating', sub: '97+ Reviews' },
  { icon: Users, value: '100+', label: 'Kids Trained', sub: 'Successfully' },
  { icon: Trophy, value: 'National', label: 'Level Achievers', sub: 'District · State · National' },
  { icon: Clock, value: '12+', label: 'Years Experience', sub: 'Est. 2013' },
]

export default function StatsBar() {
  return (
    <section
      className="bg-cream-dark border-y border-maroon/10"
      aria-label="Academy stats"
      id="stats"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mb-1">
                <Icon size={22} className="text-maroon" />
              </div>
              <p className="font-display font-bold text-2xl text-maroon">{value}</p>
              <p className="font-body font-semibold text-sm text-gray-800">{label}</p>
              <p className="font-body text-xs text-gray-500">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
