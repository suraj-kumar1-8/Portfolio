import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import SectionHeading from './common/SectionHeading'
import useInView from '../hooks/useInView'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

export default function Contact() {
  const [ref, inView] = useInView(0.2)
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (status === 'sending') return

    // Validate form
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
      return
    }

    setStatus('sending')

    emailjs.sendForm(
      'service_j6lv5fm',
      'template_ksf0toi',
      formRef.current,
      'EXqvHgKpKmKUsXj0o'
    )
      .then(() => {
        alert('Message sent successfully!')
        setStatus('success')
        setFormData({ user_name: '', user_email: '', message: '' })
        if (formRef.current) {
          formRef.current.reset()
        }
        setTimeout(() => setStatus('idle'), 4000)
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        alert('Failed to send message')
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      })
  }

  const contactInfo = [
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@suraj-kumar1-8',
      link: 'https://github.com/suraj-kumar1-8',
      color: 'text-slate-300'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Suraj Kumar',
      link: 'https://www.linkedin.com/in/suraj-kumar2111/',
      color: 'text-blue-400'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'surajkumargupta7491@gmai.com',
      link: 'mailto:surajkumargupta7491@gmai.com',
      color: 'text-red-400'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 6206239371',
      link: 'tel:+916206239371',
      color: 'text-green-400'
    }
  ]

  return (
    <section ref={ref} aria-label="Contact section" className="relative py-12 md:py-16">
      <SectionHeading
        title="Let's Connect"
        subtitle="Have a question or want to collaborate? I'd love to hear from you."
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Contact Form - Left Side (wider) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: ANIMATION_DURATIONS.entrance, delay: ANIMATION_DELAYS.stagger }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Send me a Message</h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: ANIMATION_DELAYS.stagger * 2 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="peer w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder-transparent focus:border-sky-400 focus:outline-none focus:ring-0 transition-colors"
                  />
                  <label className="pointer-events-none absolute left-4 top-3 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[11px] peer-focus:text-sky-400 bg-slate-950 px-1">
                    Name
                  </label>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: ANIMATION_DELAYS.stagger * 3 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your email"
                    className="peer w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder-transparent focus:border-sky-400 focus:outline-none focus:ring-0 transition-colors"
                  />
                  <label className="pointer-events-none absolute left-4 top-3 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[11px] peer-focus:text-sky-400 bg-slate-950 px-1">
                    Email
                  </label>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: ANIMATION_DELAYS.stagger * 4 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    placeholder="Your message"
                    className="peer w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder-transparent focus:border-sky-400 focus:outline-none focus:ring-0 resize-none transition-colors"
                  />
                  <label className="pointer-events-none absolute left-4 top-3 text-xs text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-2 peer-focus:left-3 peer-focus:text-[11px] peer-focus:text-sky-400 bg-slate-950 px-1">
                    Message
                  </label>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: ANIMATION_DELAYS.stagger * 5 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'sending'}
                    className="w-full relative inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="inline-block animate-spin mr-2">⚙️</span>
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: ANIMATION_DURATIONS.standard }}
                      className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 flex items-center gap-2"
                    >
                      <span>✓</span>
                      <span>Message sent successfully! I'll get back to you shortly.</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: ANIMATION_DURATIONS.standard }}
                      className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-300 flex items-center gap-2"
                    >
                      <span>✕</span>
                      <span>Something went wrong. Please try again or reach out via email.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: ANIMATION_DURATIONS.entrance, delay: ANIMATION_DELAYS.stagger * 2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{
                    delay: idx * ANIMATION_DELAYS.stagger,
                    duration: ANIMATION_DURATIONS.entrance
                  }}
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-sky-400/20 group-hover:from-purple-500/30 group-hover:to-sky-400/30 transition-all">
                      <Icon className={`text-lg ${info.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm md:text-base font-semibold text-slate-100 truncate group-hover:text-slate-50 transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-slate-600 group-hover:text-sky-400 transition-colors">
                      ↗
                    </div>
                  </div>
                </motion.a>
              )
            })}

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: contactInfo.length * ANIMATION_DELAYS.stagger,
                duration: ANIMATION_DURATIONS.entrance
              }}
              className="mt-4 glass-card rounded-xl p-5 md:p-6 border border-white/5"
            >
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Quick Links
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Resume', href: '#' },
                  { label: 'Portfolio', href: '#' },
                  { label: 'Blog', href: '#' }
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:border-purple-400/50 hover:text-purple-200 transition-all"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

