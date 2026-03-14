import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const timeline = [
  {
    year: '2024',
    title: 'Algorithmic Problem Solving',
    detail: 'Crossed 100+ LeetCode questions with a focus on patterns over memorisation.',
    side: 'left'
  },
  {
    year: '2023',
    title: 'Full Stack Projects',
    detail: 'Designed and shipped 5+ full stack apps including dashboards, SaaS-style tools and visualisers.',
    side: 'right'
  },
  {
    year: '2023',
    title: 'Hackathon Experience',
    detail: 'Participated in college and online hackathons, building production-quality prototypes in 24–48 hours.',
    side: 'left'
  }
]

export default function Achievements() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Achievements timeline" className="relative">
      <SectionHeading title="Achievements" />

      <div className="relative max-w-4xl mx-auto">
        {/* Central timeline line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/60 via-sky-400/40 to-emerald-400/60" />

        <div className="space-y-10">
          {timeline.map((item, idx) => {
            const isLeft = item.side === 'left'
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -24 : 24 }}
                transition={{ delay: idx * ANIMATION_DELAYS.group, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
                className={`relative flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-slate-950 border-2 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: HOVER_EFFECTS.scale, y: HOVER_EFFECTS.lift }}
                  className={`flex-1 glass-card rounded-xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-all duration-300 shadow-md shadow-black/5 ${isLeft ? 'text-right' : 'text-left'}`}
                >
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>

                {/* Spacer for alignment */}
                <div className="w-1/2 flex-shrink-0" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

