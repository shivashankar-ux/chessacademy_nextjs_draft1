import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import AboutSummary from '@/components/AboutSummary'
import ProgramsOverview from '@/components/ProgramsOverview'
import CoachesIntro from '@/components/CoachesIntro'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import ContactTeaser from '@/components/ContactTeaser'

export const metadata: Metadata = {
  title: 'Check vs Mate Chess Academy — Expert Chess Coaching for Kids',
  description:
    'Delhi/NCR chess academy for children. Group classes, online sessions & home coaching. 100+ kids trained. 4.9★ Google rating. Book a free demo today!',
  openGraph: {
    title: 'Check vs Mate Chess Academy',
    description: 'Expert chess coaching for kids — group, online & home. Book a free demo!',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSummary />
      <ProgramsOverview />
      <CoachesIntro />
      <Testimonials />
      <CTABanner />
      <ContactTeaser />
    </>
  )
}
