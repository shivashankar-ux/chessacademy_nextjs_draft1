import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "See Check vs Mate Chess Academy in action — tournament wins, classroom moments, and our students' incredible achievements.",
  openGraph: {
    title: 'Gallery | Check vs Mate Chess Academy',
    description: 'Photos from our academy, tournaments, and student achievements.',
  },
}

// TODO: Replace all images below with real client photos
// Save photos to /public/images/gallery/ and update the src values
// Recommended: Use square or 4:3 ratio photos, minimum 800px wide
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&h=450&fit=crop',
    alt: 'Students in a chess class at Check vs Mate Academy',
    caption: 'Group Class Session',
  },
  {
    src: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&h=450&fit=crop',
    alt: 'Young chess player concentrating during a match',
    caption: 'Tournament Focus',
  },
  {
    src: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=600&h=450&fit=crop',
    alt: 'Chess board during a training session',
    caption: 'Training in Progress',
  },
  {
    src: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&h=450&fit=crop',
    alt: 'Coach teaching chess strategies to a student',
    caption: 'One-on-One Coaching',
  },
  {
    src: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&h=450&fit=crop',
    alt: 'Students participating in a chess tournament',
    caption: 'District Tournament',
  },
  {
    src: 'https://images.unsplash.com/photo-1609372332255-611485350f25?w=600&h=450&fit=crop',
    alt: 'Award ceremony at a chess competition',
    caption: 'Trophy & Awards',
  },
  {
    src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=450&fit=crop',
    alt: 'Online chess coaching session',
    caption: 'Online Class',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop',
    alt: 'Happy students celebrating chess achievements',
    caption: 'Celebrating Wins',
  },
  {
    src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=450&fit=crop',
    alt: 'Students analysing a chess game together',
    caption: 'Post-Game Analysis',
  },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        title="Our Academy in Action"
        subtitle="Moments from classrooms, tournaments, and celebrations — the Check vs Mate journey in pictures."
      />

      {/* Photo Grid */}
      <section className="py-20 bg-cream" aria-label="Photo gallery" id="gallery">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-body text-gray-500 text-sm">
              {/* TODO: Update count when you add real photos */}
              Showing highlights from our academy and tournaments. More photos coming soon!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map(({ src, alt, caption }) => (
              <div
                key={caption}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maroon/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-white text-sm font-semibold">{caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social follow prompt */}
          <div className="mt-14 text-center bg-maroon/5 rounded-2xl p-8 border border-maroon/10">
            <p className="font-display font-bold text-maroon text-xl">See More on Instagram</p>
            <p className="font-body text-gray-600 text-sm mt-2">
              Follow us for daily updates, student achievements, and tournament highlights.
            </p>
            <a
              href="https://instagram.com/checkvsmateacademy" // TODO: replace with real handle
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 inline-flex"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
