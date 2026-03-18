import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { ANIMATION_DURATIONS, HOVER_EFFECTS } from '../constants/animations'

export default function ProjectCard({ title, desc, tags, github, demo, imageHint, onCaseStudyClick }) {
  const getTagClasses = (tag) => {
    const lower = tag.toLowerCase()
    const isKeyTech =
      lower.includes('mongodb') ||
      lower.includes('jwt') ||
      lower.includes('openai') ||
      lower.includes('express') ||
      lower.includes('aws')

    if (isKeyTech) {
      return 'bg-emerald-500/5 border-emerald-400/60 text-emerald-200'
    }

    return 'bg-slate-900/70 border-white/10 text-slate-200'
  }
  return (
    <motion.article
      whileHover={{ y: HOVER_EFFECTS.lift, scale: HOVER_EFFECTS.scale }}
      transition={{ duration: ANIMATION_DURATIONS.standard, ease: 'easeOut' }}
      className="group relative rounded-2xl bg-slate-900/60 border border-white/8 overflow-hidden shadow-lg shadow-black/10 hover:border-white/15 transition-all duration-300 cursor-pointer"
      onClick={onCaseStudyClick}
    >
      {/* Glow layer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-purple-600/15 via-sky-400/12 to-emerald-400/15 z-0" />

      {/* Preview image / gradient */}
      <div className="relative h-32 md:h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-sky-500 to-slate-900 opacity-80" />
        <div className="relative z-10 flex h-full items-end justify-between px-4 pb-3">
          <div className="text-xs text-slate-100/80">
            <p className="font-semibold uppercase tracking-wide">Preview</p>
            <p className="text-[11px] text-slate-200/80">{imageHint}</p>
          </div>
          <div className="flex gap-2 text-xs text-slate-100/80">
            <span className="rounded-full bg-slate-900/40 px-2 py-0.5 border border-white/20">
              Live Demo
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 md:p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-slate-50">{title}</h3>
            <p className="mt-1 text-xs md:text-sm text-slate-300 leading-relaxed">{desc}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <motion.a
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 border border-white/10 text-slate-100 hover:text-white hover:border-sky-400 hover:bg-slate-800 transition-all duration-300 group"
            >
              <span className="absolute h-5 w-5 rounded-full bg-sky-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FiGithub className="relative z-10" />
            </motion.a>
            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                onCaseStudyClick()
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 border border-white/10 text-slate-100 hover:text-white hover:border-emerald-400 hover:bg-slate-800 transition-all duration-300 group"
            >
              <span className="absolute h-5 w-5 rounded-full bg-emerald-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FiExternalLink className="relative z-10" />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((t) => (
            <span
              key={t}
              className={`text-[11px] md:text-xs px-2 py-1 rounded-full ${getTagClasses(t)}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

