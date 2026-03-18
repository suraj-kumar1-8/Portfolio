import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import { ANIMATION_DURATIONS } from '../constants/animations'

export default function ProjectCaseStudy({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    document.body.style.overflow = 'hidden'

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'auto'
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        key={project.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: ANIMATION_DURATIONS.quick }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance }}
          onClick={(event) => event.stopPropagation()}
          className="w-[90%] max-w-2xl rounded-xl bg-slate-950/95 border border-white/10 shadow-2xl"
        >
            <div className="border-b border-white/10 p-5 md:p-6 flex items-start justify-between gap-4 bg-slate-950/60 backdrop-blur-xl">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-100">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="p-2 rounded-lg hover:bg-slate-800/60 transition-colors text-slate-400 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto p-5 md:p-6 space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                  Problem Statement
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">{project.problem || project.desc}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                  Description
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">{project.desc}</p>
              </section>

              {project.architecture && (
                <section>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                    Architecture / Working Explanation
                  </h3>
                  <div className="glass-card rounded-xl p-4 border border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.architecture.split(/(MongoDB|JWT|OpenAI|Express|AWS)/g).map((part, idx) => {
                        const keyTech = ['MongoDB', 'JWT', 'OpenAI', 'Express', 'AWS']
                        if (keyTech.includes(part)) {
                          return (
                            <span key={idx} className="text-emerald-300">
                              {part}
                            </span>
                          )
                        }
                        return <span key={idx}>{part}</span>
                      })}
                    </p>
                  </div>
                </section>
              )}

              <section>
                <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-500/20 via-sky-400/20 to-emerald-400/20 border border-white/10 text-sm text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-white/10 hover:border-sky-400/50 transition-colors text-slate-200 hover:text-white"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 via-sky-400/20 to-emerald-400/20 border border-white/10 hover:border-sky-400/50 transition-colors text-slate-200 hover:text-white"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-white/10 hover:border-white/30 transition-colors text-slate-200 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    ,
    document.body
  )
}
