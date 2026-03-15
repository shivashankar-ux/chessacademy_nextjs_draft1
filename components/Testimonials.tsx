import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Riya K.',
    role: 'Parent of student',
    text: "My son's confidence and chess skills have soared since joining Check vs Mate Academy. The coaches are incredibly patient and know exactly how to bring out the best in each child.",
    rating: 5,
  },
  {
    name: 'Amit S.',
    role: 'Parent of student',
    text: 'The coaches are patient and really know how to bring out the best in kids. My daughter went from knowing nothing about chess to winning her first district tournament in just 8 months!',
    rating: 5,
  },
  {
    name: 'Priya M.',
    role: 'Parent of student',
    text: 'Excellent coaching methodology. Puneet sir takes individual attention very seriously and the structured curriculum has helped my child develop focus and critical thinking beyond just chess.',
    rating: 5,
  },
  {
    name: 'Rahul V.',
    role: 'Parent of student',
    text: 'We joined the online batch and the quality is just as good as in-person. The kids are engaged and the coaches are very responsive. Highly recommend Check vs Mate!',
    rating: 5,
  },
  // TODO: Add more testimonials from your Google reviews
]

export default function Testimonials() {
  return (
    <section
      className="py-20 bg-maroon text-white relative overflow-hidden"
      aria-label="Student testimonials"
      id="testimonials"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-conic-gradient(rgba(255,255,255,0.2) 0% 25%, transparent 0% 50%)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 text-white/5 text-[300px] font-serif leading-none select-none hidden xl:block" aria-hidden="true">
        ♛
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            What Parents Are Saying
          </h2>
          <p className="font-body text-white/70 mt-3 max-w-2xl mx-auto">
            Rated 4.9 ★ on Google with 97+ reviews — our parents speak for us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ name, role, text, rating }) => (
            <div
              key={name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-white/85 leading-relaxed text-sm italic">
                &ldquo;{text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/30 flex items-center justify-center font-display font-bold text-gold text-sm">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-white text-sm">{name}</p>
                  <p className="font-body text-white/50 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/checkvsmate/review" // TODO: replace with actual Google review link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body text-white/70 hover:text-gold transition-colors"
          >
            <Star size={14} className="text-gold fill-gold" />
            Read all 97+ reviews on Google
          </a>
        </div>

      </div>
    </section>
  )
}
