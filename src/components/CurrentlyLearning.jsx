import React from 'react'
import { motion } from 'framer-motion'
import { FiBook } from 'react-icons/fi'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'
import useInView from '../hooks/useInView'

const learning = [
  { topic: 'System Design', icon: '🏗️' },
  { topic: 'Kubernetes', icon: '☸️' },
  { topic: 'Advanced React Patterns', icon: '⚛️' }
]

export default function CurrentlyLearning() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Currently learning" className="relative">
      <SectionHeading
        title="Currently Learning"
        subtitle="Continuous growth in modern engineering practices"
      />

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {learning.map((item, idx) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                delay: idx * ANIMATION_DELAYS.stagger,
                duration: ANIMATION_DURATIONS.entrance,
                ease: 'easeOut'
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-slate-200"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.topic}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
