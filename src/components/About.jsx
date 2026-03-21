import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS } from '../constants/animations'

export default function About() {
  const [ref, inView] = useInView(0.2)

  return (
    <div ref={ref} aria-label="About Suraj Kumar" className="relative">
      <SectionHeading
        title="About Me"
        subtitle="Building production-ready web experiences with a focus on performance and reliability"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
        className="glass-card p-6 md:p-8 rounded-2xl shadow-lg shadow-black/10 border border-white/5 bg-slate-900/40 relative z-10"
      >
        <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
          I&apos;m a Software Developer and aspiring Software Engineer focused on building scalable, reliable
          applications. I care about how systems behave in production, how data flows through backend services,
          and how clean architecture makes products easier to extend over time.
        </p>

        <div className="mt-6 grid gap-3 text-sm md:text-base text-slate-200">
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
            <span>Software Developer with a strong foundation in web technologies and backend systems.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400/80" />
            <span>Aspiring Software Engineer, actively improving problem-solving through regular DSA practice.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            <span>Passionate about designing and building scalable applications that remain maintainable as they grow.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400/80" />
            <span>Particularly interested in backend systems, problem solving, and clean, well-structured architecture.</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

