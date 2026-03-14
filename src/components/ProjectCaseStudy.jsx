import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import { ANIMATION_DURATIONS } from '../constants/animations'

export default function ProjectCaseStudy({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: ANIMATION_DURATIONS.entrance }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-white/10 shadow-2xl z-50"
          >
            {/* Header */}
            <div className="sticky top-0 glass-card border-b border-white/10 p-6 flex items-start justify-between backdrop-blur-xl">
              <div>
                <h2 className="text-2xl font-semibold text-slate-100 mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-slate-800/60 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-800/60 transition-colors text-slate-400 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Problem Statement */}
              <section>
                <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                  Problem Statement
                </h3>
                <p className="text-slate-300 leading-relaxed">{project.problem || project.desc}</p>
              </section>

              {/* Architecture Overview */}
              {project.architecture && (
                <section>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                    Architecture Overview
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

              {/* Tech Stack */}
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

              {/* Challenges */}
              {project.challenges && (
                <section>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                    Challenges Faced
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Learnings */}
              {project.learnings && (
                <section>
                  <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full" />
                    What I Learned
                  </h3>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-white/10 hover:border-sky-400/50 transition-colors text-slate-200 hover:text-white"
                  >
                    <FiGithub />
                    <span>View Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 via-sky-400/20 to-emerald-400/20 border border-white/10 hover:border-sky-400/50 transition-colors text-slate-200 hover:text-white"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
