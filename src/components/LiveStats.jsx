import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'
import useInView from '../hooks/useInView'

// Animated counter component
function AnimatedCounter({ value, duration = 1500 }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (value - start) * progress)
      setDisplay(current)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value, duration])

  return <span>{display}</span>
}

const stats = {
  leetcode: {
    total: 200,
    easy: 80,
    medium: 90,
    hard: 30
  },
  hackerrank: {
    rating: 5,
    badges: ['JavaScript', 'Python', 'Java', 'C++', 'Problem Solving']
  }
}

export default function LiveStats() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Coding Platform Stats" className="relative">
      <SectionHeading
        title="Coding Platform Stats"
        subtitle="Current progress on LeetCode and HackerRank"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <SiLeetcode className="text-2xl text-[#FFA116]" />
            <h3 className="text-lg font-semibold text-slate-100">LeetCode Progress</h3>
          </div>

          {/* Total Solved */}
          <div className="mb-6">
            <p className="text-sm text-slate-400 mb-2">Problems Solved</p>
            <p className="text-4xl font-bold text-[#FFA116]">
              <AnimatedCounter value={stats.leetcode.total} />+
            </p>
          </div>

          {/* Difficulty Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Easy</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(stats.leetcode.easy / stats.leetcode.total) * 100}%` } : { width: 0 }}
                    transition={{ duration: ANIMATION_DURATIONS.complex, delay: ANIMATION_DELAYS.section * 1.5 }}
                    className="h-full bg-emerald-400 rounded-full"
                  />
                </div>
                <span className="text-sm font-semibold text-emerald-400 w-8 text-right">
                  <AnimatedCounter value={stats.leetcode.easy} />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Medium</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(stats.leetcode.medium / stats.leetcode.total) * 100}%` } : { width: 0 }}
                    transition={{ duration: ANIMATION_DURATIONS.complex, delay: ANIMATION_DELAYS.section * 2 }}
                    className="h-full bg-[#FFA116] rounded-full"
                  />
                </div>
                <span className="text-sm font-semibold text-[#FFA116] w-8 text-right">
                  <AnimatedCounter value={stats.leetcode.medium} />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Hard</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(stats.leetcode.hard / stats.leetcode.total) * 100}%` } : { width: 0 }}
                    transition={{ duration: ANIMATION_DURATIONS.complex, delay: ANIMATION_DELAYS.section * 2.5 }}
                    className="h-full bg-red-500 rounded-full"
                  />
                </div>
                <span className="text-sm font-semibold text-red-500 w-8 text-right">
                  <AnimatedCounter value={stats.leetcode.hard} />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* HackerRank Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, delay: ANIMATION_DELAYS.section, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <SiHackerrank className="text-2xl text-[#00EA64]" />
            <h3 className="text-lg font-semibold text-slate-100">HackerRank Achievement</h3>
          </div>

          {/* Rating */}
          <div className="mb-8">
            <p className="text-sm text-slate-400 mb-2">Overall Rating</p>
            <div className="flex items-baseline gap-2">
              <p className="text-5xl font-bold text-[#00EA64]">
                <AnimatedCounter value={stats.hackerrank.rating} />
              </p>
              <p className="text-2xl text-[#00EA64]">★</p>
            </div>
          </div>

          {/* Skills Badges */}
          <div className="space-y-3">
            <p className="text-sm text-slate-400 mb-4">5-Star Rating In:</p>
            <div className="flex flex-wrap gap-2">
              {stats.hackerrank.badges.map((badge, idx) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    delay: idx * ANIMATION_DELAYS.stagger,
                    duration: ANIMATION_DURATIONS.entrance
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00EA64]/10 border border-[#00EA64]/30 text-sm font-medium text-[#00EA64]"
                >
                  <span>✓</span>
                  <span>{badge}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
