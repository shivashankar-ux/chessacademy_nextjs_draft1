'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  ageGroup: string
  format: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  ageGroup: '',
  format: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL ?? ''

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      if (!formspreeUrl || formspreeUrl.includes('YOUR_FORM_ID')) {
        // Dev mode — simulate success
        await new Promise((res) => setTimeout(res, 1200))
        setStatus('success')
        setForm(initialForm)
        return
      }

      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card border border-green-200 bg-green-50 text-center py-12 flex flex-col items-center gap-4">
        <CheckCircle2 size={48} className="text-green-600" />
        <h3 className="font-display font-bold text-green-800 text-2xl">Message Sent!</h3>
        <p className="font-body text-green-700 max-w-sm">
          Thank you for reaching out. We'll get back to you within 24 hours to confirm your free demo.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-primary mt-2"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="card border border-maroon/10 space-y-5">
      <h3 className="font-display font-bold text-maroon text-xl">Send Us a Message</h3>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-body text-sm font-semibold text-gray-700 mb-1">
          Your Name <span className="text-maroon">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors"
        />
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block font-body text-sm font-semibold text-gray-700 mb-1">
            Email <span className="text-maroon">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-body text-sm font-semibold text-gray-700 mb-1">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors"
          />
        </div>
      </div>

      {/* Age Group + Format row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ageGroup" className="block font-body text-sm font-semibold text-gray-700 mb-1">
            Child's Age Group
          </label>
          <select
            id="ageGroup"
            name="ageGroup"
            value={form.ageGroup}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors bg-white"
          >
            <option value="">Select age group</option>
            <option>Under 6</option>
            <option>Under 10</option>
            <option>Under 14</option>
            <option>Above 14</option>
          </select>
        </div>
        <div>
          <label htmlFor="format" className="block font-body text-sm font-semibold text-gray-700 mb-1">
            Preferred Format
          </label>
          <select
            id="format"
            name="format"
            value={form.format}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors bg-white"
          >
            <option value="">Select format</option>
            <option>Group Classes at Academy</option>
            <option>Online Classes</option>
            <option>Home Coaching</option>
            <option>Tournament Preparation</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-body text-sm font-semibold text-gray-700 mb-1">
          Message <span className="text-maroon">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your child, their age, chess experience, and any questions you have..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon/30 focus:border-maroon transition-colors resize-none"
        />
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg px-4 py-3 text-sm font-body">
          <AlertCircle size={16} />
          Something went wrong. Please try again or WhatsApp us directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      <p className="font-body text-xs text-gray-400 text-center">
        We typically respond within 24 hours. You can also WhatsApp us for a faster reply.
      </p>
    </form>
  )
}
