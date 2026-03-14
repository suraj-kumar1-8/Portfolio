import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLeaf, FaCode } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const experiences = [
  {
    title: 'Community Development Project (CDP)',
    subtitle: 'NGO Collaboration',
    description: [
      'Worked with an NGO as part of a Community Development Project.',
      'Participated in tree plantation drives.',
      'Contributed to environmental awareness initiatives.',
      'Engaged in community-level sustainability activities.'
    ],
    icon: FaLeaf,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    certificateLabel: 'View Certificate'
  },
  {
    title: 'Summer Training – CSC Pathshala',
    subtitle: 'C++ Programming, OOPS & DSA',
    description: [
      'Completed structured summer training program.',
      'Learned C++ fundamentals and Object-Oriented Programming.',
      'Practiced Data Structures & Algorithms.',
      'Strengthened problem-solving skills.'
    ],
    icon: FaCode,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    badge: 'Summer 2024',
    certificateLabel: 'View Certificate'
  }
]

export default function Experience() {
  const [ref, inView] = useInView(0.2)
  const [activeCertificate, setActiveCertificate] = useState(null)

  return (
    <section ref={ref} aria-label="Experience & Community Engagement" className="relative">
      <SectionHeading
        title="Experience & Community Engagement"
        subtitle="Contributions to community development and professional growth"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: ANIMATION_DURATIONS.entrance, delay: idx * ANIMATION_DELAYS.group, ease: 'easeOut' }}
              whileHover={{ y: HOVER_EFFECTS.lift, scale: HOVER_EFFECTS.scale }}
              className="glass-card rounded-2xl p-6 md:p-7 border border-white/5 hover:border-white/10 transition-all duration-300 relative group shadow-md shadow-black/5"
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-5">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${exp.iconBg} ${exp.borderColor} border group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className={`${exp.iconColor} text-xl`} />
                </div>
                {exp.badge && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800/60 border border-white/10 text-slate-300">
                    {exp.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-1">
                {exp.title}
              </h3>
              {exp.subtitle && (
                <p className="text-sm text-slate-400 mb-4">{exp.subtitle}</p>
              )}

              <ul className="space-y-3">
                {exp.description.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: idx * ANIMATION_DELAYS.group + itemIdx * ANIMATION_DELAYS.stagger + ANIMATION_DURATIONS.standard, duration: ANIMATION_DURATIONS.smooth, ease: 'easeOut' }}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400/60 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {exp.certificateLabel && (
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(exp)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-emerald-400/60 hover:text-emerald-200 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    <span>{exp.certificateLabel}</span>
                  </button>
                </div>
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-sky-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setActiveCertificate(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
              className="fixed inset-6 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md z-50"
            >
              <div className="glass-card rounded-2xl border border-white/10 shadow-xl shadow-black/30 p-5 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {activeCertificate.title}
                    </h3>
                    {activeCertificate.subtitle && (
                      <p className="text-xs text-slate-400 mt-1">{activeCertificate.subtitle}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(null)}
                    className="text-slate-400 hover:text-slate-100 transition-colors text-sm"
                  >
                    Close
                  </button>
                </div>

                <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="h-40 md:h-44 rounded-lg bg-gradient-to-br from-emerald-400/10 via-sky-400/10 to-purple-500/10 border border-dashed border-emerald-400/40 flex items-center justify-center text-xs text-slate-300 text-center">
                    Certificate preview area. Replace this placeholder with an image when available.
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
