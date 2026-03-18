import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import useInView from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, HOVER_EFFECTS } from '../constants/animations'

const certifications = [
  {
    title: 'Full Stack Web Development',
    organization: 'Udemy',
    year: '2024',
    description: 'Comprehensive course covering MERN stack, authentication, and deployment',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'Data Structures & Algorithms',
    organization: 'CSC Pathshala',
    year: '2024',
    description: 'In-depth training on DSA patterns and problem-solving techniques',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'React Advanced Patterns',
    organization: 'Frontend Masters',
    year: '2023',
    description: 'Advanced React concepts, hooks, and performance optimization',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'AWS Solutions Architect Associate',
    organization: 'Amazon Web Services',
    year: '2023',
    description: 'Cloud architecture, EC2, S3, and AWS deployment strategies',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'Node.js & Express Masterclass',
    organization: 'Udemy',
    year: '2023',
    description: 'Backend development with Node.js, Express, and REST APIs',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'MongoDB Complete Guide',
    organization: 'Udemy',
    year: '2023',
    description: 'Database design, aggregations, and optimization',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'JavaScript Algorithms & DS',
    organization: 'The Complete JavaScript Course',
    year: '2022',
    description: 'Core JavaScript concepts and algorithmic problem-solving',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'Summer Training Certification',
    organization: 'CK Summer Training College / CAC Pathshala',
    year: '2024',
    description: 'Completed summer training where I learned core programming and problem solving concepts including DSA and UPS related programming fundamentals.',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  },
  {
    title: 'Community Development Project (CDP)',
    organization: 'College Community Development Program',
    year: '2024',
    description: 'Participated in a community development project focused on plant-based environmental initiatives and teamwork for community improvement.',
    certificateUrl: '#',
    certificateImage: '/certificate-placeholder.svg'
  }
]

export default function Certifications() {
  const [ref, inView] = useInView(0.2)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    if (!selectedCertificate) return undefined
    document.body.style.overflow = 'hidden'

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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 border border-white/10 text-slate-300 whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-1">
                    {cert.organization}
                  </p>

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
                <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 pr-10">
                  {selectedCertificate.title}
                </h2>
                <p className="text-slate-400 mb-6">
                  {selectedCertificate.organization} • {selectedCertificate.year}
                </p>

                <div className="bg-slate-900/60 rounded-xl p-3 border border-white/5">
                  {(selectedCertificate.certificateImage || '').toLowerCase().endsWith('.pdf') ? (
                    <iframe
                      title={`${selectedCertificate.title} certificate preview`}
                      src={selectedCertificate.certificateImage}
                      className="w-full h-[70vh] rounded-lg border border-white/10"
                    />
                  ) : (
                    <img
                      src={selectedCertificate.certificateImage || '/certificate-placeholder.svg'}
                      alt={`${selectedCertificate.title} certificate`}
                      className="w-full h-auto rounded-lg"
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
