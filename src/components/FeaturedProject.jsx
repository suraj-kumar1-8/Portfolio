import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'
import useInView from '../hooks/useInView'

const featuredProject = {
  title: 'Mental Health AI Chatbot',
  problem: 'Students often struggle with mental health issues but lack accessible, non-judgmental platforms to express their feelings and track their emotional patterns over time.',
  solution: 'Built an intelligent conversational assistant that provides safe, anonymous support while tracking mood patterns and surfacing helpful resources. The system uses sentiment analysis to understand emotional context and responds with empathy.',
  techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'JWT Auth'],
  impact: [
    'Reduced user anxiety through accessible 24/7 support',
    'Enabled mood pattern tracking for better self-awareness',
    'Integrated seamlessly with existing mental health resources'
  ]
}

export default function FeaturedProject() {
  const [ref, inView] = useInView(0.2)

  return (
    <section ref={ref} aria-label="Featured project" className="relative">
      <SectionHeading
        title="Featured Project"
        subtitle="A deep dive into solving real-world problems with modern technology"
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Preview Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, ease: 'easeOut' }}
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden glass-card border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-sky-500 to-slate-900 opacity-80" />
          <div className="relative z-10 h-full flex items-center justify-center p-6">
            <div className="text-center text-slate-200">
              <p className="text-sm font-semibold mb-2">Project Preview</p>
              <p className="text-xs text-slate-300">Chat interface with sentiment-aware responses</p>
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance, delay: ANIMATION_DELAYS.section, ease: 'easeOut' }}
          className="space-y-5"
        >
          <div>
            <h3 className="text-2xl font-semibold text-slate-100 mb-3">{featuredProject.title}</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Problem</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{featuredProject.problem}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Solution</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{featuredProject.solution}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-white/10 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Impact</h4>
                <ul className="space-y-1.5">
                  {featuredProject.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-white/10 hover:border-sky-400/50 transition-colors text-sm text-slate-200 hover:text-white"
            >
              <FiGithub />
              <span>View Code</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 via-sky-400/20 to-emerald-400/20 border border-white/10 hover:border-sky-400/50 transition-colors text-sm text-slate-200 hover:text-white"
            >
              <FiExternalLink />
              <span>Live Demo</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
