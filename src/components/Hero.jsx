import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import Typewriter from 'typewriter-effect'
import HeroGeometry from './common/HeroGeometry'
import surajImage from '../../surajport.jpeg'

import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

export default function Hero() {
  const typingTexts = [
    'Software Developer',
    'Aspiring Software Engineer',
    'Backend-Focused Developer',
    'Problem Solving Enthusiast'
  ]

  // Removed parallax tilt for performance

  return (
    <section
      aria-label="Hero section introducing Suraj Kumar"
      className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16"
    >
      {/* Abstract geometry background */}
      <HeroGeometry />

      {/* Simplified static background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-16 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl opacity-60" />
        <div className="absolute bottom-0 -left-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl opacity-60" />
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.section, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Hi, I'm Suraj Kumar
              </h1>

              {/* Mini Stats Badges */}
              {/* <div className="flex flex-wrap gap-2">
                {[
                  { text: '100+ LeetCode Problems', icon: '💻' },
                  { text: '5+ Full Stack Projects', icon: '🚀' },
                  { text: 'MERN + AWS', icon: '☁️' }
                ].map((badge, idx) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ANIMATION_DELAYS.section + idx * 0.05, duration: ANIMATION_DURATIONS.entrance }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-xs font-medium text-slate-200 shadow-sm"
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>

            {/* Typing text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.section * 2, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-slate-300 min-h-[40px]"
            >
              <span className="text-cyan-400">
                <Typewriter
                  options={{
                    strings: typingTexts,
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                    pauseFor: 1300
                  }}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.section * 2.5, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
              className="max-w-xl text-sm md:text-base text-slate-300 leading-relaxed"
            >
              Full Stack Developer | Software Developer | Problem Solver
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.section * 3, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
              className="max-w-xl text-sm md:text-base text-slate-400 leading-relaxed"
            >
              Building scalable web applications using MERN stack and cloud technologies
            </motion.p>

            {/* Resume + socials */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.section * 3.5, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row sm:items-center gap-5 pt-3"
            >
              <motion.a
                href="/suraj kumar.pdf"
                download
                whileHover={{ y: HOVER_EFFECTS.lift, scale: HOVER_EFFECTS.scale }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 shadow-lg shadow-sky-500/40 transition-all duration-300"
              >
                <span className="absolute -inset-px rounded-full bg-gradient-to-r from-purple-500/40 via-sky-400/40 to-emerald-400/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <FiDownload className="text-slate-900" />
                <span>Download Resume</span>
              </motion.a>

              {/* Social Icons with brand colors */}
              <div className="flex gap-5 text-2xl">
                {[
                  { 
                    Icon: FaGithub, 
                    href: 'https://github.com/suraj-kumar1-8',
                    color: 'text-white',
                    hoverColor: 'text-white',
                    glowColor: 'bg-white/25'
                  },
                  { 
                    Icon: FaLinkedin, 
                    href: 'https://www.linkedin.com/in/suraj-kumar2111/',
                    color: 'text-[#0A66C2]',
                    hoverColor: 'text-[#0A66C2]',
                    glowColor: 'bg-[#0A66C2]/35'
                  },
                  { 
                    Icon: SiLeetcode, 
                    href: 'https://leetcode.com/u/HtVI08YLj0/',
                    color: 'text-[#FFA116]',
                    hoverColor: 'text-[#FFA116]',
                    glowColor: 'bg-[#FFA116]/35'
                  },
                  { 
                    Icon: FaEnvelope, 
                    href: 'mailto:surajkumargupta7491@gmail.com',
                    color: 'text-slate-300',
                    hoverColor: 'text-white',
                    glowColor: 'bg-gradient-to-tr from-purple-500/30 via-sky-400/30 to-emerald-400/30'
                  }
                ].map(({ Icon, href, color, hoverColor, glowColor }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.05, y: HOVER_EFFECTS.lift }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative inline-flex items-center justify-center group transition-all duration-300 ${color} hover:${hoverColor}`}
                  >
                    <span className={`absolute h-9 w-9 rounded-full ${glowColor} blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <span className="relative z-10">
                      <Icon />
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: ANIMATION_DELAYS.section * 2, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 z-10">
              {/* Static gradient ring - CSS animation only */}
              <div
                className="absolute inset-0 rounded-full p-[2px] z-20 animate-spin-slow"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(129, 140, 248, 0.15), rgba(45, 212, 191, 0.7), rgba(236, 72, 153, 0.7), rgba(129, 140, 248, 0.15))',
                  animation: 'spin 20s linear infinite'
                }}
              >
                <div className="h-full w-full rounded-full bg-slate-950" />
              </div>

              {/* Profile image with refined layered lighting */}
              <div className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-purple-600/60 via-sky-500/60 to-slate-900 z-30">
                {/* ss*/}
                <img
  src={surajImage}
  alt="Suraj Kumar"
  className="h-full w-full object-cover rounded-full"
/>


                {/* Refined layered inner glow - depth hierarchy */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-sky-400/25 to-transparent blur-2xl z-10" />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/15 via-transparent to-purple-500/15 blur-xl z-20" />
              </div>

              {/* Simplified outer glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500/15 via-sky-400/15 to-emerald-400/15 blur-3xl z-0" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: ANIMATION_DELAYS.section * 3, duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
        className="absolute inset-x-0 bottom-8 flex justify-center z-20"
      >
        <div className="flex flex-col items-center gap-2 text-xs text-slate-400">
          <span>Scroll</span>
          <div className="h-9 w-5 rounded-full border border-slate-500/60 flex items-start justify-center py-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-slate-400/70"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
