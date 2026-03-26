import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si'
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
  },
  gfg: {
    codingScore: 70,
    solved: 33,
    instituteRank: 10176,
    articlesPublished: null
  }
}

const PROFILE_URLS = {
  leetcode: 'https://leetcode.com/u/HtVI08YLj0/',
  hackerrank: 'https://www.hackerrank.com/profile/surajkumargupt11',
  gfg: 'https://www.geeksforgeeks.org/profile/surajkumaranb7'
}

export default function LiveStats() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Coding Platform Stats" className="relative">
      <SectionHeading
        title="Coding Platform Stats"
        subtitle="Current progress on LeetCode, HackerRank, and GeeksforGeeks"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

          <motion.a
            href={PROFILE_URLS.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-900 shadow-lg shadow-amber-500/20"
          >
            View LeetCode Profile
          </motion.a>
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

          <motion.a
            href={PROFILE_URLS.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-400 to-lime-300 text-slate-900 shadow-lg shadow-emerald-500/20"
          >
            View HackerRank Profile
          </motion.a>
        </motion.div>

        {/* GeeksforGeeks Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, delay: ANIMATION_DELAYS.section * 2, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <SiGeeksforgeeks className="text-2xl text-emerald-400" />
            <h3 className="text-lg font-semibold text-slate-100">GeeksforGeeks</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Coding Score</span>
              <span className="text-lg font-semibold text-emerald-400">
                <AnimatedCounter value={stats.gfg.codingScore} />
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Problems Solved</span>
              <span className="text-lg font-semibold text-emerald-400">
                <AnimatedCounter value={stats.gfg.solved} />
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Institute Rank</span>
              <span className="text-lg font-semibold text-emerald-400">
                <AnimatedCounter value={stats.gfg.instituteRank} />
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Articles Published</span>
              <span className="text-lg font-semibold text-emerald-400">
                {stats.gfg.articlesPublished == null ? '—' : <AnimatedCounter value={stats.gfg.articlesPublished} />}
              </span>
            </div>
          </div>

          <motion.a
            href={PROFILE_URLS.gfg}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-900 shadow-lg shadow-emerald-500/20"
          >
            View GFG Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
