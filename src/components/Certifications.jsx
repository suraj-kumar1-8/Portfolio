import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    certificateUrl: '#'
  },
  {
    title: 'Data Structures & Algorithms',
    organization: 'CSC Pathshala',
    year: '2024',
    description: 'In-depth training on DSA patterns and problem-solving techniques',
    certificateUrl: '#'
  },
  {
    title: 'React Advanced Patterns',
    organization: 'Frontend Masters',
    year: '2023',
    description: 'Advanced React concepts, hooks, and performance optimization',
    certificateUrl: '#'
  },
  {
    title: 'AWS Solutions Architect Associate',
    organization: 'Amazon Web Services',
    year: '2023',
    description: 'Cloud architecture, EC2, S3, and AWS deployment strategies',
    certificateUrl: '#'
  },
  {
    title: 'Node.js & Express Masterclass',
    organization: 'Udemy',
    year: '2023',
    description: 'Backend development with Node.js, Express, and REST APIs',
    certificateUrl: '#'
  },
  {
    title: 'MongoDB Complete Guide',
    organization: 'Udemy',
    year: '2023',
    description: 'Database design, aggregations, and optimization',
    certificateUrl: '#'
  },
  {
    title: 'JavaScript Algorithms & DS',
    organization: 'The Complete JavaScript Course',
    year: '2022',
    description: 'Core JavaScript concepts and algorithmic problem-solving',
    certificateUrl: '#'
  }
]

export default function Certifications() {
  const [ref, inView] = useInView(0.2)
  const [selectedCert, setSelectedCert] = useState(null)

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert)
  }

  const handleCloseCertificate = () => {
    setSelectedCert(null)
  }

  return (
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

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseCertificate}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto border border-white/10 relative"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseCertificate}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Modal Content */}
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
                    {selectedCert.title}
                  </h2>
                  <p className="text-slate-400 mb-6">
                    {selectedCert.organization} • {selectedCert.year}
                  </p>

                  <div className="bg-slate-900/60 rounded-xl p-6 mb-6 border border-white/5 flex items-center justify-center min-h-80">
                    <div className="text-center">
                      <p className="text-slate-400 mb-4">Certificate Preview</p>
                      <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-sky-400/20 flex items-center justify-center">
                        <FaExternalLinkAlt className="text-4xl text-sky-400/50" />
                      </div>
                      <p className="text-xs text-slate-500">
                        Click the button below to view the full certificate
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={selectedCert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-sky-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      Open Certificate
                    </motion.a>
                    <motion.button
                      onClick={handleCloseCertificate}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 rounded-lg border border-white/10 text-slate-300 hover:text-slate-100 font-semibold hover:border-white/20 transition-all"
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
