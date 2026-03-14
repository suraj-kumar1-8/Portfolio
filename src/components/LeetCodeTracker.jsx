import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'

const difficultyData = [
  { name: 'Easy', value: 52, color: '#22c55e' },
  { name: 'Medium', value: 38, color: '#eab308' },
  { name: 'Hard', value: 12, color: '#ef4444' }
]

// Simple animated counter for stats
function AnimatedNumber({ value, duration = 1000 }) {
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

// Generate a pseudo heatmap matrix for contributions
const weeks = 18
const days = 7
const heatmap = Array.from({ length: weeks }, () =>
  Array.from({ length: days }, () => Math.random())
)

export default function LeetCodeTracker() {
  const totalSolved = difficultyData.reduce((acc, d) => acc + d.value, 0)

  return (
    <section aria-label="LeetCode progress tracker">
      <SectionHeading
        title="LeetCode Tracker"
        subtitle="Consistent data-structures and algorithms practice aimed at top product companies"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {/* Stats cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <p className="text-sm text-slate-400">Total Problems Solved</p>
            <p className="mt-2 text-4xl md:text-5xl font-bold text-emerald-400">
              <AnimatedNumber value={totalSolved} />
            </p>
          </div>
          <button
            onClick={() => window.open('https://leetcode.com', '_blank')}
            className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-900 shadow-lg shadow-amber-500/20"
          >
            View LeetCode Profile
          </button>
        </motion.div>

        {/* Difficulty breakdown chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: ANIMATION_DURATIONS.complex, delay: ANIMATION_DELAYS.section, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6 md:col-span-2"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-200">Difficulty breakdown</span>
            <span className="text-xs text-slate-400">LeetCode practice snapshot</span>
          </div>
          <div className="h-44 md:h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={difficultyData}>
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: '#cbd5f5', fontSize: 12 }}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: 'rgba(148,163,184,0.1)' }}
                  contentStyle={{
                    backgroundColor: '#020617',
                    borderRadius: 12,
                    border: '1px solid rgba(148,163,184,0.35)'
                  }}
                  labelStyle={{ color: '#e5e7eb' }}
                />
                <Bar
                  dataKey="value"
                  radius={[8, 8, 0, 0]}
                  animationDuration={900}
                  isAnimationActive
                >
                  {difficultyData.map((entry, index) => (
                    <cell
                      // eslint-disable-next-line react/no-array-index-key
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Contribution-style heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: ANIMATION_DURATIONS.complex, delay: ANIMATION_DELAYS.section * 1.5, ease: 'easeOut' }}
        className="mt-10 glass-card rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-slate-200">Practice streak heatmap</span>
          <span className="text-xs text-slate-500">Inspired by GitHub contribution graph</span>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-1">
            {heatmap.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((value, dIdx) => {
                  const intensity =
                    value > 0.75 ? 'bg-emerald-400' :
                    value > 0.5 ? 'bg-emerald-400/80' :
                    value > 0.25 ? 'bg-emerald-400/60' :
                    value > 0.1 ? 'bg-emerald-400/30' :
                    'bg-slate-800'
                  return (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${wIdx}-${dIdx}`}
                      className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-[4px] ${intensity}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

