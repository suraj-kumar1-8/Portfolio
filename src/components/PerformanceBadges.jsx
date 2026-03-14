import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiSmartphone, FiSearch } from 'react-icons/fi'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'
import useInView from '../hooks/useInView'

const badges = [
  { icon: FiZap, label: 'Lighthouse Score: 90+', color: 'text-yellow-400' },
  { icon: FiSmartphone, label: 'Fully Responsive', color: 'text-blue-400' },
  { icon: FiSearch, label: 'SEO Optimized', color: 'text-green-400' }
]

export default function PerformanceBadges() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Performance metrics" className="relative">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  delay: idx * ANIMATION_DELAYS.stagger,
                  duration: ANIMATION_DURATIONS.entrance,
                  ease: 'easeOut'
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Icon className={`text-lg ${badge.color}`} />
                <span className="text-xs font-medium text-slate-300">{badge.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
