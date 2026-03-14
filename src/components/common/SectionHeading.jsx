import React from 'react'
import { motion } from 'framer-motion'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../../constants/animations'

export default function SectionHeading({ title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: ANIMATION_DURATIONS.entrance, delay, ease: 'easeOut' }}
      className="text-center mb-10 md:mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-3 leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: ANIMATION_DURATIONS.entrance, delay: delay + ANIMATION_DELAYS.stagger, ease: 'easeOut' }}
        className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
        style={{ width: '80px' }}
      />
    </motion.div>
  )
}
