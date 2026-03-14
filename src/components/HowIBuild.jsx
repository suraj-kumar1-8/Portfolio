import React from 'react'
import { motion } from 'framer-motion'
import { FiLayers, FiCode, FiDatabase, FiBox, FiSettings } from 'react-icons/fi'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'
import useInView from '../hooks/useInView'

const principles = [
  {
    title: 'Clean Architecture',
    icon: FiLayers,
    desc: 'Modular, maintainable code structure with clear separation of concerns'
  },
  {
    title: 'RESTful API Design',
    icon: FiCode,
    desc: 'Well-designed endpoints following REST principles for scalability'
  },
  {
    title: 'Scalable Database Design',
    icon: FiDatabase,
    desc: 'Optimized schemas and indexing strategies for performance'
  },
  {
    title: 'Reusable Components',
    icon: FiBox,
    desc: 'Component-driven development for consistency and efficiency'
  },
  {
    title: 'DevOps Integration',
    icon: FiSettings,
    desc: 'Docker containerization and CI/CD pipelines for reliable deployments'
  }
]

export default function HowIBuild() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="How I build" className="relative">
      <SectionHeading
        title="How I Build"
        subtitle="Engineering principles that guide my development approach"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((principle, idx) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{
                  delay: idx * ANIMATION_DELAYS.stagger,
                  duration: ANIMATION_DURATIONS.entrance,
                  ease: 'easeOut'
                }}
                whileHover={{ y: HOVER_EFFECTS.lift, scale: HOVER_EFFECTS.scale }}
                className="glass-card rounded-xl p-5 border border-white/5 hover:border-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 via-sky-400/20 to-emerald-400/20 border border-white/10 group-hover:border-sky-400/50 transition-colors">
                    <Icon className="text-sky-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-100 mb-1.5">{principle.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
