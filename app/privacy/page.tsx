import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Check vs Mate Chess Academy.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero breadcrumb="Legal" title="Privacy Policy" />
      <section className="py-16 bg-cream" aria-label="Privacy policy content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm font-body text-gray-700">
          <p className="text-gray-400 text-xs mb-8">Last updated: {new Date().getFullYear()}</p>
          {/* TODO: Replace with actual privacy policy */}
          <h2 className="font-display text-maroon font-bold text-xl mt-8 mb-3">1. Information We Collect</h2>
          <p>We collect information you provide when you fill out our contact form, including your name, email address, and phone number. We use this information only to respond to your enquiry and schedule demo classes.</p>
          <h2 className="font-display text-maroon font-bold text-xl mt-8 mb-3">2. How We Use Your Information</h2>
          <p>Your information is used solely to contact you regarding your enquiry about our chess programs. We do not sell, trade, or share your personal information with third parties.</p>
          <h2 className="font-display text-maroon font-bold text-xl mt-8 mb-3">3. Contact Us</h2>
          <p>If you have questions about this privacy policy, please email us at <a href="mailto:checkvsmate@gmail.com" className="text-maroon">checkvsmate@gmail.com</a>.</p>
        </div>
      </section>
    </>
  )
}
