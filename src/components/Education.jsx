import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool, FaBookOpen } from 'react-icons/fa'
import SectionHeading from './common/SectionHeading'
import useInView from '../hooks/useInView'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const education = [
  {
    title: 'B.Tech in Computer Science (CSE)',
    institution: 'Lovely Professional University (LPU)',
    meta: '2023 – Present',
    result: 'CGPA: 7.21',
    icon: FaGraduationCap,
    details: ['Focused on core CS fundamentals, DSA, and modern web development.']
  },
  {
    title: 'Intermediate (12th - PCM)',
    institution: 'S B College, Ara, Bihar',
    meta: '2019 - 2021',
    result: 'Result: 76%',
    icon: FaBookOpen,
    details: ['Stream: Physics, Chemistry, Mathematics']
  },
  {
    title: 'Matriculation (10th)',
    institution: 'R D M High School, Ara, Bihar',
    meta: '2018 - 2019',
    result: 'Result: 81%',
    icon: FaSchool,
    details: []
  }
]

export default function Education() {
  const [ref, inView] = useInView(0.2)

  return (
    <div ref={ref} aria-label="Education" className="relative">
      <SectionHeading
        title="Education"
        subtitle="A quick timeline of my academic journey"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 md:pl-10">
          {/* Timeline line */}
          <div className="absolute left-2.5 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 via-sky-400/30 to-emerald-400/30" />

          <div className="space-y-5 md:space-y-6">
            {education.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{
                    duration: ANIMATION_DURATIONS.entrance,
                    delay: idx * ANIMATION_DELAYS.stagger * 2,
                    ease: 'easeOut'
                  }}
                  className="relative"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-0 top-4 -translate-x-1/2">
                    <div className="h-9 w-9 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur flex items-center justify-center shadow-lg shadow-black/20">
                      <Icon className="text-sky-300" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 via-sky-400/10 to-emerald-400/10 blur-md" />
                  </div>

                  <motion.div
                    whileHover={{ y: HOVER_EFFECTS.lift, scale: HOVER_EFFECTS.scale }}
                    transition={{ duration: ANIMATION_DURATIONS.standard, ease: 'easeOut' }}
                    className="glass-card rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 px-5 py-5 md:px-6 md:py-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-semibold text-slate-100">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          {item.institution}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-900/60 border border-white/10 text-slate-300 whitespace-nowrap">
                          {item.meta}
                        </span>
                        {item.result && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 whitespace-nowrap">
                            {item.result}
                          </span>
                        )}
                      </div>
                    </div>

                    {item.details?.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                            <span className="leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
