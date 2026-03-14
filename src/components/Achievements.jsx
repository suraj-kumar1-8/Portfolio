import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaStar, FaTrophy, FaLightbulb, FaGithub, FaAws } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const achievements = [
  {
    icon: FaCode,
    title: 'LeetCode',
    highlight: '200+',
    highlightLabel: 'Problems',
    description: 'Solved 200+ Data Structures & Algorithms problems with focus on patterns and best practices',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: FaStar,
    title: 'HackerRank',
    highlight: '5★',
    highlightLabel: 'Rating',
    description: 'Achieved 5-star rating across JavaScript, Python, Java, C++, and Problem Solving',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: FaTrophy,
    title: 'HackVega Coding Contest',
    highlight: 'AIR 221',
    highlightLabel: 'Rank',
    description: 'Achieved All India Rank 221 in HackVega Coding Contest by Myntra via MyCareerNet',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: FaLightbulb,
    title: 'Strong DSA Foundation',
    highlight: '100%',
    highlightLabel: 'Commitment',
    description: 'Dedicated practice in critical problem-solving patterns, optimization techniques, and algorithmic thinking',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: FaGithub,
    title: 'Full Stack Portfolio',
    highlight: '5+',
    highlightLabel: 'Projects',
    description: 'Built and deployed multiple production-quality MERN stack applications with real-world features',
    color: 'from-slate-400 to-slate-600',
    bgColor: 'bg-slate-500/10'
  },
  {
    icon: FaAws,
    title: 'Cloud Deployment',
    highlight: '∞',
    highlightLabel: 'Scaling',
    description: 'Experienced in AWS deployments, EC2 instances, S3 storage, and cloud infrastructure optimization',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-500/10'
  }
]

export default function Achievements() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Achievements" className="relative">
      <SectionHeading 
        title="Achievements" 
        subtitle="A showcase of milestones, skills, and accomplishments in my development journey"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  delay: idx * ANIMATION_DELAYS.stagger,
                  duration: ANIMATION_DURATIONS.entrance
                }}
                whileHover={{ y: HOVER_EFFECTS.lift, scale: HOVER_EFFECTS.scale }}
                className="group relative"
              >
                <div className={`glass-card rounded-2xl p-6 md:p-7 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col ${achievement.bgColor}`}>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-sky-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                        <Icon className={`text-xl text-white`} />
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.highlight}
                        </p>
                        <p className="text-xs font-medium text-slate-400 tracking-wide uppercase mt-1">
                          {achievement.highlightLabel}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2">
                      {achievement.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed flex-1">
                      {achievement.description}
                    </p>

                    {/* Bottom accent */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{
                        delay: idx * ANIMATION_DELAYS.stagger + 0.2,
                        duration: 0.6
                      }}
                      className={`mt-4 h-1 w-full rounded-full bg-gradient-to-r ${achievement.color} origin-left`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

