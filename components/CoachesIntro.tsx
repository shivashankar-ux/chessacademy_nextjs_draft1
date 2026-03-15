import Link from 'next/link'
import Image from 'next/image'

const coaches = [
  {
    name: 'Puneet Manchanda',
    role: 'Founder & Head Coach',
    since: 'Coaching since 2013',
    bio: 'Founder of Check vs Mate Chess Academy with 12+ years of full-time coaching experience. Puneet has mentored hundreds of students across age groups and competitive levels, helping them achieve excellence on and off the board.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    // TODO: Replace with actual photo of Puneet Manchanda
  },
  {
    name: 'Chirag Atreja',
    role: 'Co-Founder & Coach',
    since: 'Coaching since 2020',
    bio: 'A passionate chess coach actively involved in training students, with a strong focus on concept clarity, structured preparation, and building a competitive mindset in young players.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    // TODO: Replace with actual photo of Chirag Atreja
  },
]

export default function CoachesIntro() {
  return (
    <section
      className="py-20 bg-cream"
      aria-label="Meet the coaches"
      id="coaches"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            The Team
          </p>
          <h2 className="section-title mx-auto">Meet Your Coaches</h2>
          <p className="section-subtitle mx-auto text-center mt-3">
            Experienced, passionate, and dedicated to every child's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {coaches.map(({ name, role, since, bio, image }) => (
            <div
              key={name}
              className="card border border-maroon/10 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-maroon/20">
                  <Image
                    src={image}
                    alt={`Photo of ${name}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white text-sm">
                  ♟
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-maroon text-xl">{name}</h3>
                <p className="font-body text-gold text-sm font-semibold">{role}</p>
                <p className="font-body text-xs text-gray-400 mt-0.5">{since}</p>
              </div>
              <p className="font-body text-sm text-gray-600 leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/about" className="btn-secondary">
            More About Our Team
          </Link>
        </div>

      </div>
    </section>
  )
}
