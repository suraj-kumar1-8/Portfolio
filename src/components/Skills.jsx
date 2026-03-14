import React from 'react'
import { motion } from 'framer-motion'
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
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiLinux,
  SiGithubactions
} from 'react-icons/si'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

// Flattened skills list for compact grid with proficiency levels
const allSkills = [
  // Programming Languages
  { name: 'C++', icon: SiCplusplus, level: 85 },
  { name: 'JavaScript', icon: SiJavascript, level: 88 },
  { name: 'Python', icon: SiPython, level: 72 },
  // Frontend
  { name: 'React', icon: SiReact, level: 86 },
  { name: 'Tailwind', icon: SiTailwindcss, level: 82 },
  { name: 'HTML', icon: SiHtml5, level: 90 },
  { name: 'CSS', icon: SiCss3, level: 84 },
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, level: 80 },
  { name: 'Express.js', icon: SiExpress, level: 78 },
  // Database
  { name: 'MongoDB', icon: SiMongodb, level: 82 },
  { name: 'MySQL', icon: SiMysql, level: 74 },
  // Cloud & DevOps
  { name: 'AWS', icon: SiAmazonaws, level: 65 },
  { name: 'Docker', icon: SiDocker, level: 68 },
  { name: 'CI/CD', icon: SiGithubactions, level: 60 },
  { name: 'Linux', icon: SiLinux, level: 72 },
  { name: 'Git', icon: SiGit, level: 85 }
]

export default function Skills() {
  const [ref, inView] = useInView(0.2)

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

      {/* Compact grid layout - fits in one screen */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {allSkills.map((skill, idx) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  delay: idx * ANIMATION_DELAYS.stagger,
                  duration: ANIMATION_DURATIONS.entrance,
                  ease: 'easeOut'
                }}
                whileHover={{ 
                  y: HOVER_EFFECTS.lift, 
                  scale: HOVER_EFFECTS.scale
                }}
                className="glass-card aspect-square rounded-xl p-4 border border-white/5 hover:border-white/15 transition-all duration-300 relative group overflow-hidden cursor-default"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-sky-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-between py-2">
                  <div className="flex flex-col items-center gap-2 flex-1 justify-center">
                    {/* Icon */}
                    <div className="relative inline-flex items-center justify-center">
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-500/20 via-sky-400/20 to-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="relative z-10 text-sky-400 text-2xl md:text-3xl" />
                    </div>
                    
                    {/* Skill name */}
                    <span className="text-xs font-semibold text-slate-100 text-center leading-tight">
                      {skill.name}
                    </span>
                    
                    {/* Percentage */}
                    <span className="text-[10px] font-medium text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Thin animated progress bar */}
                  <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden mt-auto">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: ANIMATION_DURATIONS.complex, 
                        delay: idx * ANIMATION_DELAYS.stagger + ANIMATION_DURATIONS.standard,
                        ease: 'easeOut' 
                      }}
                      className="h-full bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 rounded-full"
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
