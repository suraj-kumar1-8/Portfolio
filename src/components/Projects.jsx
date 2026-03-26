import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectCaseStudy from './ProjectCaseStudy'
import SectionHeading from './common/SectionHeading'
import useInView from '../hooks/useInView'
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants/animations'

const projects = [
  {
    title: 'CloudShare – Cloud File Sharing Platform',
    desc: 'A cloud-based file sharing platform where users can upload and manage files securely. The project uses AWS services and Docker for deployment and storage.',
    category: 'Full Stack',
    problem: 'Users need a secure, scalable solution to upload, store, and share files with others without worrying about data security or storage limitations.',
    architecture: 'Frontend built with React, backend with Node.js/Express, MongoDB for metadata storage, AWS S3 for file storage, AWS IAM for security, and Docker for containerized deployment and scaling.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AWS', 'Docker'],
    image: '/project-previews/cloudshare.png',
    imageHint: 'Cloud file management dashboard with sharing options',
    github: 'https://github.com/suraj-kumar1-8/CloudShare-Cloud-File-Sharing-Platform',
    demo: 'https://cloudsharecloudfilesharing.vercel.app/',
    challenges: [
      'Implementing secure file upload and storage with AWS S3',
      'Managing user permissions and access controls efficiently',
      'Optimizing file transfer speeds and handling large file uploads'
    ],
    learnings: [
      'Gained hands-on experience with AWS services including S3, IAM, and EC2',
      'Learned containerization and deployment strategies using Docker',
      'Improved understanding of secure file handling and access management'
    ]
  },
  {
    title: 'AICTE Curriculum Portal',
    desc: 'A comprehensive portal that provides students and educators with easy access to AICTE curriculum guidelines, course structures, and regulatory information.',
    category: 'Full Stack',
    problem: 'Students and educators often struggle to find accurate and up-to-date information about AICTE curriculum requirements and guidelines, leading to confusion and inefficiency in academic planning.',
    architecture: 'Frontend built with React for dynamic content rendering, Node.js/Express for backend API handling, MongoDB for storing curriculum data and user interactions. The portal features a searchable database of AICTE regulations, interactive course maps, and a chatbot for quick queries.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: '/project-previews/aicte.png',
    imageHint: 'Dashboard showcasing AICTE curriculum guidelines and interactive course maps',
    github: 'https://github.com/suraj-kumar1-8/AICTE_Curriculum_Portal',
    demo: '#',
    challenges: [
      'Structuring and organizing complex regulatory information in an accessible way',
      'Implementing an efficient search and filter system for curriculum data',
      'Designing an intuitive UI that caters to both students and educators'
    ],
    learnings: [
      'Gained experience in full-stack development with a focus on educational platforms',
      'Learned how to handle and present complex data structures effectively',
      'Improved skills in creating user-friendly interfaces for information-heavy applications'
    ]
  },
  
  {
    title: 'DEKHOINDIA – Heritage & Cultural Portal',
    desc: 'A cultural and heritage portal that showcases information about different states of India.',
    category: 'Full Stack',
    problem: 'Many people lack accessible platforms to learn about Indias diverse cultural heritage and regional information in an engaging way.',
    architecture: 'Frontend built with HTML, CSS, JavaScript, and Tailwind CSS. Backend developed with PHP for server-side logic. MySQL database stores comprehensive information about Indian states, culture, heritage, and attractions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL'],
    image: '/project-previews/dekhoindia.png',
    imageHint: 'Cultural portal showcasing Indian heritage and states',
    github: 'https://github.com/suraj-kumar1-8/INDIAN-HERITAGE',
    demo: '#',
    challenges: [
      'Organizing vast amounts of cultural and heritage data efficiently',
      'Creating engaging UI/UX to make cultural information compelling',
      'Ensuring accurate and authentic representation of diverse Indian cultures'
    ],
    learnings: [
      'Gained experience in full-stack development with PHP and MySQL',
      'Learned content curation and presentation strategies',
      'Improved skills in creating responsive, engaging cultural interfaces'
    ]
  },
  {
    title: 'Developer Portfolio Website',
    desc: 'A personal portfolio website showcasing projects, skills, certifications and achievements. The site is deployed online and built using modern frontend technologies.',
    category: 'Full Stack',
    problem: 'Developers need an impressive online presence to showcase their work, skills, and accomplishments to potential employers and collaborators.',
    architecture: 'Built entirely with React for the frontend, utilizing Tailwind CSS for responsive design, JavaScript for interactivity, and modern animation libraries. Deployed on Vercel for fast, reliable hosting.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    image: '/project-previews/portfolio.png',
    imageHint: 'Personal portfolio displaying projects and skills',
    github: 'https://github.com/suraj-kumar1-8/portfolio',
    demo: 'https://suraj-fullstack.vercel.app/',
    challenges: [
      'Designing a visually appealing portfolio that stands out',
      'Optimizing performance for smooth animations and fast loading',
      'Making the portfolio responsive across all device sizes'
    ],
    learnings: [
      'Gained experience in modern React development and component design',
      'Learned advanced CSS and animation techniques with Tailwind CSS',
      'Improved skills in creating user-focused portfolio presentations'
    ]
  },
  {
    title: 'Mental Health Chatbot',
    desc: 'An AI-powered chatbot designed to provide mental health support and resources. The chatbot uses natural language processing to understand user queries and provide empathetic responses, along with links to helpful resources.',
    category: 'AI',
    problem: 'Many individuals struggle to find accessible and immediate mental health support, especially during times of crisis. An AI chatbot can provide a first line of support, offering empathetic responses and directing users to appropriate resources.',
    architecture: 'Frontend built with React for a conversational interface, Node.js/Express for backend API handling, MongoDB for storing user interactions and resources. The chatbot integrates with NLP models to understand user queries and generate empathetic responses.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Python', 'AI Integration'],
    image: '/project-previews/mentalhealth.png',
    imageHint: 'AI chatbot conversation interface',
    github: 'https://github.com/suraj-kumar1-8/Mental-health-chatbot',
    demo: '#',
    challenges: [
      'Integrating NLP models to understand and respond to user queries effectively',
      'Ensuring the chatbot provides empathetic and supportive responses',
      'Designing a user-friendly conversational interface'
    ],
    learnings: [
      'Gained experience in AI integration and natural language processing',
      'Learned how to design and implement conversational interfaces',
      'Improved skills in handling user data and interactions securely'
    ]
  }
]

const categories = ['All Projects', 'Full Stack', 'AI']

export default function Projects() {
  const [ref, inView] = useInView(0.2)
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [selectedProject, setSelectedProject] = useState(null)

  console.log(selectedProject)

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const handleCloseModal = () => setSelectedProject(null)

  return (
    <>
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
                onCaseStudyClick={() => setSelectedProject(p)}
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

      </section>

      {selectedProject && (
        <ProjectCaseStudy project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  )
}
