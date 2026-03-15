import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, Clock, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Check vs Mate Chess Academy. Book a free demo, ask about programs, or find our location in Delhi/NCR.',
  openGraph: {
    title: 'Contact Us | Check vs Mate Chess Academy',
    description: 'Book a free demo or get in touch — we would love to hear from you.',
  },
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 98104 36745',
    href: 'tel:+919810436745',
    sub: 'Mon–Sat, 9am–7pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'checkvsmate@gmail.com',
    href: 'mailto:checkvsmate@gmail.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Academy Location',
    value: 'Delhi / NCR, India',
    href: '#map',
    // TODO: Add full address here
    sub: 'See map below for directions',
  },
  {
    icon: Clock,
    label: 'Batch Timings',
    value: 'Mon – Sat',
    href: undefined,
    // TODO: Add exact batch timings
    sub: '9am – 7pm (batches vary)',
  },
]

const socialLinks = [
  { href: 'https://instagram.com/checkvsmateacademy', label: 'Instagram', icon: Instagram },
  { href: 'https://facebook.com/checkvsmateacademy', label: 'Facebook', icon: Facebook },
  { href: 'https://youtube.com/@checkvsmateacademy', label: 'YouTube', icon: Youtube },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Get In Touch"
        subtitle="Have a question or want to book your child's free demo class? We'd love to hear from you."
      />

      {/* Main contact section */}
      <section className="py-20 bg-cream" aria-label="Contact details and form" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — info */}
          <div>
            <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">Reach Us</p>
            <h2 className="section-title">Let's Connect</h2>
            <p className="font-body text-gray-600 mt-3 leading-relaxed">
              Whether you have questions about our programs, want to know about the next batch, or are ready to book a free demo — we're just a message away.
            </p>

            {/* Contact cards */}
            <div className="mt-8 space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, sub }) => {
                const content = (
                  <div className="flex items-start gap-4 card border border-maroon/10 hover:border-maroon/30 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-11 h-11 rounded-xl bg-maroon flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                      <p className="font-body font-semibold text-gray-800 text-sm mt-0.5">{value}</p>
                      <p className="font-body text-xs text-gray-500 mt-0.5">{sub}</p>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} className="block">{content}</a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919810436745?text=Hi!%20I%20want%20to%20book%20a%20free%20demo%20class."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1ebe5d] transition-colors shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Social links */}
            <div className="mt-8">
              <p className="font-body text-sm font-semibold text-gray-700 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-maroon/10 hover:bg-maroon text-maroon hover:text-white transition-colors duration-200 flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-dark" aria-label="Map location" id="map">
        {/*
          TODO: Replace the iframe src with the actual Google Maps embed for your academy address.
          1. Go to maps.google.com → search your address → click Share → Embed a map → copy the src URL
          2. Paste it below replacing the placeholder URL
        */}
        <div className="w-full h-72 bg-maroon/10 flex items-center justify-center text-maroon/50 font-body text-sm">
          {/* Placeholder — replace with real Google Maps embed */}
          <div className="text-center">
            <MapPin size={32} className="mx-auto mb-2 text-maroon/30" />
            <p>Map coming soon — check back after adding your address</p>
            <p className="text-xs mt-1 text-gray-400">
              (Replace this section with a Google Maps iframe in /app/contact/page.tsx)
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
