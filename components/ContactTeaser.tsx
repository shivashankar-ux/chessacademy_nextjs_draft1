import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactTeaser() {
  return (
    <section
      className="py-16 bg-cream-dark"
      aria-label="Contact information"
      id="contact-teaser"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-body text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="section-title mx-auto">We'd Love to Hear From You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: Phone,
              label: 'Call / WhatsApp',
              value: '+91 98104 36745',
              href: 'tel:+919810436745',
            },
            {
              icon: Mail,
              label: 'Email Us',
              value: 'checkvsmate@gmail.com',
              href: 'mailto:checkvsmate@gmail.com',
            },
            {
              icon: MapPin,
              label: 'Find Us',
              value: 'Delhi / NCR, India', // TODO: update with full address
              href: '/contact',
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="card border border-maroon/10 flex flex-col items-center text-center gap-3 hover:border-maroon/30 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-maroon/10 group-hover:bg-maroon transition-colors duration-200 flex items-center justify-center">
                <Icon size={20} className="text-maroon group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="font-body text-xs text-gray-400 uppercase tracking-wide">{label}</p>
                <p className="font-body font-semibold text-gray-800 text-sm mt-1">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/contact" className="btn-primary">
            Send Us a Message
          </Link>
        </div>
      </div>
    </section>
  )
}
