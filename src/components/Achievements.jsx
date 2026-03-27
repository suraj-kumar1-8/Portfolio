import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaStar, FaTrophy, FaGithub, FaCloud, FaRocket } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const achievements = [
  {
    icon: FaCode,
    title: 'Solved 200+ DSA Problems',
    highlight: '200+',
    highlightLabel: 'DSA Problems',
    description: 'Solving data structures and algorithms problems on LeetCode since 2025, focusing on consistency and improving problem-solving skills.',
    year: '2025 - Present',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: FaStar,
    title: '4★ Rating',
    highlight: '4★',
    highlightLabel: 'Rating',
    description: 'Achieved 4-star rating in JavaScript, Python, Java, C++, and Problem Solving on HackerRank.',
    year: '2025',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: FaTrophy,
    title: 'AIR 201',
    organization: 'Myntra (via MyCareerNet)',
    highlight: 'AIR 201',
    highlightLabel: 'Rank',
    description: 'Participated in HackVega coding contest and secured All India Rank 201.',
    year: '2025',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: FaGithub,
    title: 'MERN Stack Development',
    highlight: 'MERN',
    highlightLabel: 'Journey',
    description: 'Building full stack applications using MongoDB, Express.js, React, and Node.js since 2025. Deployed one project and working on improving development skills through real-world projects.',
    year: '2025 - Present',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: FaCloud,
    title: 'Cloud & DevOps (Beginner Level)',
    highlight: 'Cloud',
    highlightLabel: 'Hands-on',
    description: 'Hands-on experience with cloud and DevOps concepts including application deployment, Docker basics, and working with cloud services. Familiar with building and deploying projects using modern development workflows and tools, with a basic understanding of production-ready practices.',
    year: '2025',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: FaRocket,
    title: '2+ Live Projects Deployed',
    highlight: '2+',
    highlightLabel: 'Live Projects',
    description: 'Successfully deployed and maintained multiple full stack projects with live URLs, focusing on reliability, performance, and clean user experience.',
    year: '2025 - Present',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10'
  }
]

export default function Achievements() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Achievements" className="relative">
      <SectionHeading 
        title="Achievements" 
        subtitle="Real milestones across problem solving, full stack development, and cloud experience"
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
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-900/70 border border-white/10 text-slate-300 tracking-wide uppercase mb-2">
                          {achievement.year}
                        </span>
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

                    {achievement.organization && (
                      <p className="text-xs text-slate-400 mb-2">{achievement.organization}</p>
                    )}

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

