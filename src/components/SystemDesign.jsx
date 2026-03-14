import React from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiServer, FiDatabase } from 'react-icons/fi'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'
import useInView from '../hooks/useInView'

export default function SystemDesign() {
  const [ref, inView] = useInView(0.2)

  const components = [
    { name: 'Client', icon: FiMonitor, color: 'text-purple-400' },
    { name: 'API', icon: FiServer, color: 'text-sky-400' },
    { name: 'Server', icon: FiServer, color: 'text-cyan-400' },
    { name: 'Database', icon: FiDatabase, color: 'text-emerald-400' }
  ]

  return (
    <section ref={ref} aria-label="System design approach" className="relative">
      <SectionHeading
        title="System Design Approach"
        subtitle="Clean, scalable architecture patterns for modern applications"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {components.map((comp, idx) => {
            const Icon = comp.icon
            return (
              <React.Fragment key={comp.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{
                    delay: idx * ANIMATION_DELAYS.stagger,
                    duration: ANIMATION_DURATIONS.entrance,
                    ease: 'easeOut'
                  }}
                  className="glass-card rounded-xl p-4 border border-white/10 flex flex-col items-center gap-2 min-w-[100px]"
                >
                  <Icon className={`text-2xl ${comp.color}`} />
                  <span className="text-xs font-semibold text-slate-200">{comp.name}</span>
                </motion.div>

                {idx < components.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{
                      delay: idx * ANIMATION_DELAYS.stagger + ANIMATION_DURATIONS.standard,
                      duration: ANIMATION_DURATIONS.entrance,
                      ease: 'easeOut'
                    }}
                    className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400"
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
