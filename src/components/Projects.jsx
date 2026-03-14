import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectCaseStudy from './ProjectCaseStudy'
import SectionHeading from './common/SectionHeading'
import useInView from '../hooks/useInView'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'

const projects = [
  {
    title: 'Mental Health AI Chatbot',
    desc: 'Conversational assistant that helps students track mood, reflect on patterns and surface helpful resources in a safe space.',
    category: 'Full Stack',
    problem: 'Students often struggle with mental health issues but lack accessible, non-judgmental platforms to express their feelings and track their emotional patterns over time.',
    architecture: 'Built with MERN stack using React for the frontend, Node.js/Express for RESTful API, MongoDB for user data and conversation history, integrated with OpenAI API for intelligent responses.',
    tags: ['MERN', 'JWT Auth', 'MongoDB', 'OpenAI API'],
    imageHint: 'Chat interface with sentiment-aware responses',
    github: 'https://github.com/suraj-kumar1-8/Mental-health-chatbot',
    demo: '#',
    challenges: [
      'Implementing secure JWT authentication while maintaining smooth UX',
      'Optimizing API calls to OpenAI to reduce latency and costs',
      'Designing intuitive UI for sensitive mental health conversations'
    ],
    learnings: [
      'Learned to balance user privacy with helpful AI assistance',
      'Gained experience in sentiment analysis and conversation flow design',
      'Improved understanding of secure authentication patterns'
    ]
  },
  {
    title: 'AICTE Curriculum Portal',
    category: 'Full Stack',
    desc: 'The AICTE Curriculum Portal offers structured syllabi, course content, and guidelines for engineering, management, and diploma programs, helping colleges align their curriculum with industry requirements and modern academic standards.',
    problem: 'Many technical institutions follow outdated or inconsistent syllabi, creating a gap between academic learning and industry requirements. This leads to skill mismatches, reduced employability, and lack of uniformity in technical education.',
    architecture: 'A full-stack web application built with React for the frontend, Node.js/Express for the backend API, MongoDB for storing curriculum data, and JWT for secure admin authentication. The portal features a user-friendly interface for browsing syllabi and an admin dashboard for managing content.',
    tags: ['React', 'Express', 'MongoDB', 'JWT'],
    imageHint: 'Curriculum browsing interface with admin dashboard',
    github: 'https://github.com/suraj-kumar1-8/AICTE_Curriculum_Portal',
    demo: '#',
    challenges: [
      'Designing a flexible data model to accommodate various course structures and content types',
      'Implementing secure JWT-based authentication for admin users while ensuring a seamless content management experience',
      'Creating an intuitive UI that allows students to easily navigate and understand complex syllabi'
    ],
    learnings: [
      'Gained experience in designing scalable data models for educational content',
      'Learned best practices for implementing secure authentication in content management systems',
      'Improved skills in UI/UX design for educational platforms to enhance user engagement'
    ]
  },
  {
    title: 'DEKHOINIDA - Heritage & Culture Portal',
    category: 'Frontend',
    desc: 'A platform that showcases the rich heritage and culture of India through interactive content, virtual tours and educational resources.',
    problem: 'Many people, especially younger generations, are disconnected from the rich heritage and culture of India due to lack of engaging platforms that make learning about it accessible and enjoyable.',
    architecture: 'DEKHOINDIA uses a 3-tier web architecture where the frontend (HTML, CSS, JavaScript) provides the user interface, the backend (PHP) processes requests and handles logic, and the MySQL database stores state-wise heritage and culture data. The portal features interactive maps, virtual tours and multimedia content to engage users in exploring India’s diverse heritage.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    imageHint: 'Interactive portal showcasing India’s heritage and culture',
    github: 'https://github.com/suraj-kumar1-8/INDIAN-HERITAGE',
    demo: '#',
    challenges: [
      'Designing an engaging UI that effectively showcases the diversity of India’s heritage while remaining user-friendly',
      'Optimizing the backend to handle multimedia content and interactive features without performance issues',
      'Ensuring the accuracy and authenticity of the heritage information presented on the portal'
    ],
    learnings: [
      'Gained experience in full-stack web development using PHP and MySQL',
      'Learned how to design and implement interactive features that enhance user engagement',
      'Improved skills in content curation and presentation for educational platforms'
    ]
  },
  {
    title: 'Developer Productivity Hub',
    category: 'Full Stack',
    desc: 'Centralized dashboard that brings together GitHub activity, LeetCode progress and deployment status into a single, focused view.',
    problem: 'Engineers often juggle multiple tools and dashboards, making it hard to quickly understand personal progress, deployment health and outstanding work at a glance.',
    architecture: 'Backend built with Node.js/Express exposing REST APIs, MongoDB for storing activity snapshots, JWT-based authentication layer, and integrations with GitHub, LeetCode and a lightweight AWS deployment monitor.',
    tags: ['React', 'Express', 'MongoDB', 'JWT', 'AWS'],
    imageHint: 'Unified dashboard for coding activity and deployments',
    github: '#',
    demo: '#',
    challenges: [
      'Designing a data model that can aggregate activity from multiple external services',
      'Implementing robust JWT authentication across the dashboard and APIs',
      'Handling rate limits and failures gracefully when calling third‑party APIs'
    ],
    learnings: [
      'Strengthened understanding of backend integration patterns with external developer tools',
      'Gained experience securing APIs and dashboards with JWT and role-based checks',
      'Learned to design a UI that surfaces only the most important metrics without noise'
    ]
  }
]

const categories = ['All Projects', 'Full Stack', 'Frontend', 'AI']

export default function Projects() {
  const [ref, inView] = useInView(0.2)
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const handleCaseStudyClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section ref={ref} aria-label="Highlighted projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of work that reflects how I think about product, reliability and UX"
      />

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: ANIMATION_DURATIONS.entrance }}
        className="max-w-4xl mx-auto mb-10 flex flex-wrap justify-center gap-3"
      >
        {categories.map((category, idx) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{
              delay: idx * ANIMATION_DELAYS.stagger,
              duration: ANIMATION_DURATIONS.entrance
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 md:px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow-lg shadow-purple-500/30'
                : 'glass-card border border-white/10 text-slate-300 hover:border-white/20'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <AnimatePresence>
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                delay: idx * ANIMATION_DELAYS.stagger * 2,
                duration: ANIMATION_DURATIONS.entrance
              }}
            >
              <ProjectCard 
                {...p} 
                onCaseStudyClick={() => handleCaseStudyClick(p)}
                categoryBadge={p.category}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-slate-400"
        >
          <p>No projects found in this category.</p>
        </motion.div>
      )}

      <ProjectCaseStudy project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}
