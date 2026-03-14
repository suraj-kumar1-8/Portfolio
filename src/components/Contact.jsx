import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from 'emailjs-com'
import SectionHeading from './common/SectionHeading'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    try {
      // TODO: Replace with your own EmailJS config
      // Create a service, template and public key at https://dashboard.emailjs.com
      const SERVICE_ID = 'service_te9xebf'
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
      const PUBLIC_KEY = 'EXqvHgKpKmKUsXj0o'

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section aria-label="Contact form" className="max-w-2xl mx-auto">
      <SectionHeading
        title="Let's Connect"
        subtitle="Open to full‑stack roles, internships and collaborations around modern web products"
      />
      <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 shadow-lg shadow-black/10">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div className="relative">
            <input
              type="text"
              name="from_name"
              required
              className="peer w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3 text-sm text-slate-100 placeholder-transparent focus:border-sky-400 focus:outline-none focus:ring-0"
              placeholder="Your name"
            />
            <label className="pointer-events-none absolute left-3 top-3 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-[11px] peer-focus:text-sky-400 bg-slate-950 px-1 rounded">
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="reply_to"
              required
              className="peer w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3 text-sm text-slate-100 placeholder-transparent focus:border-sky-400 focus:outline-none focus:ring-0"
              placeholder="Your email"
            />
            <label className="pointer-events-none absolute left-3 top-3 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-[11px] peer-focus:text-sky-400 bg-slate-950 px-1 rounded">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="subject"
              required
              className="peer w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3 text-sm text-slate-100 placeholder-transparent focus:border-sky-400 focus:outline-none focus:ring-0"
              placeholder="Subject"
            />
            <label className="pointer-events-none absolute left-3 top-3 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-[11px] peer-focus:text-sky-400 bg-slate-950 px-1 rounded">
              Subject
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows={5}
              required
              className="peer w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3 text-sm text-slate-100 placeholder-transparent focus:border-sky-400 focus:outline-none focus:ring-0 resize-none"
              placeholder="Message"
            ></textarea>
            <label className="pointer-events-none absolute left-3 top-3 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-[11px] peer-focus:text-sky-400 bg-slate-950 px-1 rounded">
              Message
            </label>
          </div>

          <div className="flex justify-center mt-6">
            <motion.button
              type="submit"
              whileHover={{ y: -1, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
              className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 shadow-lg shadow-sky-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </motion.button>
          </div>
        </form>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300"
            >
              Message sent successfully. I&apos;ll get back to you shortly.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="mt-4 rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-300"
            >
              Something went wrong while sending. Please try again in a moment.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

