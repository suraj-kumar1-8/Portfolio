import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const buildDescription = (title) => {
  if (title.toLowerCase().includes('network')) {
    return 'Focused on networking fundamentals, protocols, and practical communication concepts across modern systems.'
  }
  if (title.toLowerCase().includes('prompt engineering') || title.toLowerCase().includes('generative ai')) {
    return 'Covers practical AI workflows, prompt strategies, and applied usage of modern large language model tools.'
  }
  if (title.toLowerCase().includes('cloud')) {
    return 'Introduces cloud service models, deployment approaches, and foundational concepts for scalable infrastructure.'
  }
  if (title.toLowerCase().includes('python')) {
    return 'Builds core programming fundamentals with Python syntax, problem-solving logic, and hands-on coding exercises.'
  }
  if (title.toLowerCase().includes('responsive web design')) {
    return 'Covers modern responsive layout techniques, accessibility basics, and standards-driven frontend design practices.'
  }
  if (title.toLowerCase().includes('data structures') || title.toLowerCase().includes('automata') || title.toLowerCase().includes('theory')) {
    return 'Strengthens algorithmic thinking with structured problem-solving, complexity awareness, and foundational CS principles.'
  }
  if (title.toLowerCase().includes('hardware') || title.toLowerCase().includes('operating systems')) {
    return 'Explores computer hardware architecture and operating system fundamentals for strong systems-level understanding.'
  }
  if (title.toLowerCase().includes('c++')) {
    return 'Hands-on training in C++, object-oriented design, and DSA techniques used in real interview-style problems.'
  }
  return 'Professional certification focused on practical technical skills and applied learning through structured modules.'
}

const certifications = [
  {
    title: 'Problem Solving (HackerRank)',
    organization: 'HackerRank',
    year: 'Add Year',
    badge: '4★',
    description: 'Earned 4★ in Problem Solving by solving 200+ DSA questions.',
    certificateUrl: '#',
    certificateImage: '/pp.pdf'
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    organization: 'Google (Coursera)',
    year: '2024',
    description: buildDescription('The Bits and Bytes of Computer Networking'),
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/2GO88PDOZ6ZP',
    certificateImage: '/bits:bytes.pdf'
  },
  {
    title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI, & LLMs',
    organization: 'Infosys',
    year: '2025',
    description: buildDescription('ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI, & LLMs'),
    certificateUrl: '#',
    certificateImage: '/chatgpt-4.pdf'
  },
  {
    title: 'Build Generative AI Apps and Solutions with No-Code Tools',
    organization: 'Infosys',
    year: '2025',
    description: buildDescription('Build Generative AI Apps and Solutions with No-Code Tools'),
    certificateUrl: '#',
    certificateImage: '/genai.pdf'
  },
  {
    title: 'Cloud Computing',
    organization: 'NPTEL',
    score: '54%',
    year: '2025',
    description: buildDescription('Cloud Computing'),
    certificateUrl: '#',
    certificateImage: '/cloud.pdf'
  },
  {
    title: 'Fundamentals of Network Communication',
    organization: 'University of Colorado',
    year: '2024',
    description: buildDescription('Fundamentals of Network Communication'),
    certificateUrl: '#',
    certificateImage: '/cn.pdf'
  },
  {
    title: 'Computational Theory: Language Principles & Finite Automata theory',
    organization: 'Infosys',
    year: '2025',
    description: buildDescription('Computational Theory: Language Principles & Finite Automata theory'),
    certificateUrl: '#',
    certificateImage: '/computationaltheory.pdf'
  },
  {
    title: 'C++ Programming: OOPS and DSA (Summer Training)',
    organization: 'CSE Pathshala',
    duration: '1 Month',
    year: '2025',
    description: buildDescription('C++ Programming: OOPS and DSA (Summer Training)'),
    certificateUrl: '#',
    certificateImage: '/csepathshala.pdf'
  },
  {
    title: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    year: '2023',
    description: buildDescription('Responsive Web Design'),
    certificateUrl: '#',
    certificateImage: '/freecodecamp.pdf'
  },
  
  {
    title: 'Introduction to Python',
    organization: 'Infosys',
    year: '2024',
    description: buildDescription('Introduction to Python'),
    certificateUrl: '#',
    certificateImage: '/introductiontopython.pdf'
  },
  {
    title: 'Data Structures and Algorithms (72 Hours)',
    organization: 'New Collab',
    year: '2024',
    description: buildDescription('Data Structures and Algorithms (72 Hours)'),
    certificateUrl: '#',
    certificateImage: '/neocolab.pdf'
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    organization: 'IBM',
    year: '2024',
    description: buildDescription('Introduction to Hardware and Operating Systems'),
    certificateUrl: '#',
    certificateImage: '/os.pdf'
  }
]

export default function Certifications() {
  const [ref, inView] = useInView(0.2)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  useEffect(() => {
    if (!selectedCertificate) return undefined
    document.body.style.overflow = 'hidden'
    setZoomLevel(1)

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'auto'
    }
  }, [selectedCertificate])

  const handleViewCertificate = (cert) => {
    setSelectedCertificate(cert)
  }

  const handleCloseCertificate = () => {
    setSelectedCertificate(null)
    setZoomLevel(1)
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1))
  }

  const handleZoomReset = () => {
    setZoomLevel(1)
  }

  return (
    <>
      <section ref={ref} aria-label="Certifications" className="relative">
        <SectionHeading
          title="Certifications"
          subtitle="Professional development and continuous learning credentials"
        />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: ANIMATION_DURATIONS.entrance }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: idx * ANIMATION_DELAYS.stagger,
                duration: ANIMATION_DURATIONS.entrance
              }}
              whileHover={{ y: HOVER_EFFECTS.lift, scale: HOVER_EFFECTS.scale }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 md:p-7 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-sky-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-sky-400/20 group-hover:from-purple-500/30 group-hover:to-sky-400/30 transition-all duration-300">
                      <FaExternalLinkAlt className="text-lg text-sky-400" />
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-2">
                      {cert.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 whitespace-nowrap">
                          {cert.badge}
                        </span>
                      )}
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 border border-white/10 text-slate-300 whitespace-nowrap">
                        {cert.score ? `${cert.year} • ${cert.score}` : cert.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-1">
                    {cert.organization}
                  </p>

                  {cert.duration && (
                    <p className="text-xs text-slate-400/90 mb-2">Duration: {cert.duration}</p>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed flex-1 mb-4">
                    {cert.description}
                  </p>

                  {/* View Certificate Button */}
                  <motion.button
                    onClick={() => handleViewCertificate(cert)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600/20 to-sky-500/20 hover:from-purple-600/30 hover:to-sky-500/30 border border-purple-500/30 hover:border-purple-400/50 text-purple-300 hover:text-purple-200 transition-all duration-300 text-sm font-medium w-fit"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      </section>

      {selectedCertificate && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseCertificate}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: ANIMATION_DURATIONS.entrance }}
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl glass-card border border-white/10 relative"
            >
              <button
                type="button"
                onClick={handleCloseCertificate}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
                aria-label="Close certificate preview"
              >
                <FaTimes className="text-xl" />
              </button>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2 pr-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                    {selectedCertificate.title}
                  </h2>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    {selectedCertificate.certificateUrl && selectedCertificate.certificateUrl !== '#' && (
                      <a
                        href={selectedCertificate.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-slate-900/70 border border-white/10 text-slate-200 hover:text-white hover:border-sky-400/50 transition-colors"
                      >
                        <span className="text-xs font-medium">Open Link</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    )}

                    {!((selectedCertificate.certificateImage || '').toLowerCase().endsWith('.pdf')) && (
                        <div className="inline-flex items-center gap-1 rounded-lg bg-slate-900/70 border border-white/10 p-1">
                          <button
                            type="button"
                            onClick={handleZoomOut}
                            className="h-8 w-8 rounded-md text-slate-200 hover:bg-slate-800/80 transition-colors"
                            aria-label="Zoom out"
                          >
                            -
                          </button>
                          <span className="min-w-14 text-center text-xs text-slate-300">
                            {Math.round(zoomLevel * 100)}%
                          </span>
                          <button
                            type="button"
                            onClick={handleZoomIn}
                            className="h-8 w-8 rounded-md text-slate-200 hover:bg-slate-800/80 transition-colors"
                            aria-label="Zoom in"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={handleZoomReset}
                            className="px-2 h-8 rounded-md text-xs text-slate-300 hover:bg-slate-800/80 transition-colors"
                            aria-label="Reset zoom"
                          >
                            Reset
                          </button>
                        </div>
                      )}
                  </div>
                </div>
                <p className="text-slate-400 mb-6">
                  {selectedCertificate.organization} • {selectedCertificate.year}
                  {selectedCertificate.score ? ` • Score: ${selectedCertificate.score}` : ''}
                  {selectedCertificate.duration ? ` • Duration: ${selectedCertificate.duration}` : ''}
                </p>

                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5 overflow-auto max-h-[70vh]">
                  {(selectedCertificate.certificateImage || '').toLowerCase().endsWith('.pdf') ? (
                    <iframe
                      title={`${selectedCertificate.title} certificate preview`}
                      src={selectedCertificate.certificateImage}
                      className="w-full h-[70vh] rounded-lg border border-white/10"
                    />
                  ) : (
                    <motion.img
                      src={selectedCertificate.certificateImage || '/certificate-placeholder.svg'}
                      alt={`${selectedCertificate.title} certificate`}
                      animate={{ scale: zoomLevel }}
                      transition={{ duration: ANIMATION_DURATIONS.standard, ease: 'easeOut' }}
                      onDoubleClick={() => {
                        if (zoomLevel === 1) {
                          setZoomLevel(2)
                        } else {
                          setZoomLevel(1)
                        }
                      }}
                      className={`w-full h-auto rounded-lg select-none ${zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
