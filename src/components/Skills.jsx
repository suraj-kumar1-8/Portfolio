import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiApachetomcat,
  SiJsonwebtokens
} from 'react-icons/si'
import { FaGitlab, FaJava } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const skillsData = {
  Frontend: [
    { name: 'HTML', icon: SiHtml5, level: 95 },
    { name: 'CSS', icon: SiCss3, level: 90 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    { name: 'JavaScript', icon: SiJavascript, level: 92 },
    { name: 'React', icon: SiReact, level: 85 }
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, level: 85 },
    { name: 'Express.js', icon: SiExpress, level: 85 },
    { name: 'REST APIs', icon: SiNodedotjs, level: 80 },
    { name: 'Authentication / JWT', icon: SiJsonwebtokens, level: 80 },
    { name: 'MongoDB', icon: SiMongodb, level: 85 }
  ],
  'Programming Languages': [
    { name: 'JavaScript', icon: SiJavascript, level: 92 },
    { name: 'Python', icon: SiPython, level: 75 },
    { name: 'C++', icon: SiCplusplus, level: 70 },
    { name: 'Java', icon: FaJava, level: 72 }
  ],
  Databases: [
    { name: 'MongoDB', icon: SiMongodb, level: 85 },
    { name: 'MySQL', icon: SiMysql, level: 80 }
  ],
  'Cloud & AWS': [
    { name: 'AWS EC2', icon: SiAmazonaws, level: 75 },
    { name: 'AWS S3', icon: SiAmazonaws, level: 75 },
    { name: 'AWS IAM', icon: SiAmazonaws, level: 72 },
    { name: 'AWS CloudFront', icon: SiAmazonaws, level: 70 },
    { name: 'AWS Lambda', icon: SiAmazonaws, level: 75 },
    { name: 'Deployment', icon: SiAmazonaws, level: 78 }
  ],
  DevOps: [
    { name: 'Docker', icon: SiDocker, level: 80 },
    { name: 'Kubernetes', icon: SiKubernetes, level: 72 },
    { name: 'Jenkins', icon: SiJenkins, level: 75 },
    { name: 'Tomcat', icon: SiApachetomcat, level: 70 },
    { name: 'CI/CD Pipelines', icon: FaGitlab, level: 75 }
  ]
}

const categoryOrder = ['Frontend', 'Backend', 'Programming Languages', 'Databases', 'Cloud & AWS', 'DevOps']

export default function Skills() {
  const [ref, inView] = useInView(0.2)
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const activeCategorySkills = skillsData[activeCategory]

  return (
    <section ref={ref} aria-label="Technical skills" className="relative py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/8 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <SectionHeading
        title="Skills"
        subtitle="A comprehensive view of my technical expertise across modern web development"
      />

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
        className="max-w-6xl mx-auto mb-10"
      >
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categoryOrder.map((category, idx) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                delay: idx * ANIMATION_DELAYS.stagger,
                duration: ANIMATION_DURATIONS.entrance
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 md:px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 group ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow-lg shadow-purple-500/30'
                  : 'glass-card border border-white/10 text-slate-300 hover:border-white/20 hover:shadow-md hover:shadow-purple-500/10'
              }`}
            >
              {activeCategory !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-sky-400/0 to-emerald-400/0 group-hover:from-purple-500/5 group-hover:via-sky-400/5 group-hover:to-emerald-400/5 rounded-full transition-all duration-300 pointer-events-none" />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: ANIMATION_DURATIONS.standard }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategorySkills.map((skill, idx) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: idx * ANIMATION_DELAYS.stagger,
                    duration: ANIMATION_DURATIONS.entrance
                  }}
                  whileHover={{ y: HOVER_EFFECTS.lift, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-card rounded-xl p-6 border border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 relative group overflow-hidden cursor-pointer"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-sky-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-sky-400/20 group-hover:from-purple-500/30 group-hover:to-sky-400/30 transition-all duration-300">
                        <Icon className="text-2xl text-sky-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-100">{skill.name}</h3>
                        <p className="text-sm text-slate-400">{skill.level}%</p>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative h-2 rounded-full bg-slate-700/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: idx * ANIMATION_DELAYS.stagger + 0.1,
                          duration: 0.8,
                          ease: 'easeOut'
                        }}
                        className="h-full bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 rounded-full shadow-lg shadow-sky-400/50"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
