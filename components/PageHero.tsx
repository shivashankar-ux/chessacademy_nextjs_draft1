interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section
      className="relative bg-maroon py-20 overflow-hidden"
      aria-label={`${title} page hero`}
    >
      {/* Chess pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-conic-gradient(rgba(255,255,255,0.15) 0% 25%, transparent 0% 50%)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 text-white/5 text-[200px] font-serif leading-none select-none hidden xl:block" aria-hidden="true">
        ♞
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="font-body text-gold text-sm font-semibold uppercase tracking-widest mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="font-body text-white/75 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
