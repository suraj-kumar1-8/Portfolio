import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

// Sticky navbar with active section highlight using IntersectionObserver
export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { root: null, threshold: 0.5 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => sections.forEach((s) => obs.unobserve(s))
  }, [])

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent" />

      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="backdrop-blur-xl bg-slate-900/70 border border-white/10 rounded-3xl shadow-lg shadow-black/30 px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap"
          >
            Suraj Kumar
          </motion.div>

          <ul className="hidden md:flex gap-1.5 items-center">
            {items.map((it, idx) => (
              <React.Fragment key={it.id}>
                <li className="relative">
                  <ScrollLink
                    to={it.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`relative px-4 py-2 rounded-xl cursor-pointer text-sm font-medium transition-all duration-300 ${
                      active === it.id
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {it.label}

                    {/* Active indicator */}
                    {active === it.id && (
                      <motion.div
                        layoutId="activeNav"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-sky-400/15 to-emerald-400/20 border border-white/10"
                      />
                    )}

                    {/* Hover underline - smooth animated */}
                    {active !== it.id && (
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 origin-left rounded-full"
                      />
                    )}
                  </ScrollLink>
                </li>
                {/* Insert Resume button after Achievements */}
                {it.id === 'achievements' && (
                  <li className="relative pl-1.5 ml-1.5">
                    <motion.a
                      href="/suraj.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative px-4 py-2 rounded-xl cursor-pointer text-sm font-medium text-slate-400 hover:text-slate-200 transition-all duration-300"
                    >
                      Resume
                      {/* Hover underline - smooth animated */}
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 origin-left rounded-full"
                      />
                    </motion.a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
