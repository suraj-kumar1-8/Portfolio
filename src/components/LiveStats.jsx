import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
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

// Generate contribution heatmap data
const generateHeatmap = () => {
  const weeks = 20
  const days = 7
  return Array.from({ length: weeks }, () =>
    Array.from({ length: days }, () => Math.random() * 0.8 + 0.1)
  )
}

const stats = {
  github: {
    contributions: generateHeatmap()
  },
  leetcode: {
    total: 102,
    easy: 52,
    medium: 38,
    hard: 12
  }
}

export default function LiveStats() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Live Coding & GitHub Stats" className="relative">
      <SectionHeading
        title="Live Coding & GitHub Stats"
        subtitle="Focused view of current LeetCode progress and GitHub contribution activity"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6 flex flex-col gap-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaGithub className="text-2xl text-slate-200" />
            <h3 className="text-lg font-semibold text-slate-100">GitHub Activity</h3>
          </div>

          {/* Contribution Heatmap */}
          <div className="mt-2">
            <p className="text-sm text-slate-400 mb-3">Contribution Activity (GitHub-style grid)</p>
            <div className="overflow-x-auto">
              <div className="flex gap-1">
                {stats.github.contributions.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((value, dIdx) => {
                      const intensity =
                        value > 0.7 ? 'bg-emerald-400' :
                        value > 0.5 ? 'bg-emerald-400/70' :
                        value > 0.3 ? 'bg-emerald-400/50' :
                        value > 0.1 ? 'bg-emerald-400/30' :
                        'bg-slate-800'
                      return (
                        <div
                          key={`${wIdx}-${dIdx}`}
                          className={`w-3 h-3 rounded-sm ${intensity} transition-opacity hover:opacity-80`}
                          title={`${Math.round(value * 100)}% activity`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Last 20 weeks</p>
          </div>
        </motion.div>

        {/* LeetCode Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, delay: ANIMATION_DELAYS.section, ease: 'easeOut' }}
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
              <AnimatedCounter value={stats.leetcode.total} />
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
      </div>
    </section>
  )
}
