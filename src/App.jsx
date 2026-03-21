import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import LiveStats from './components/LiveStats'
import FeaturedProject from './components/FeaturedProject'
import HowIBuild from './components/HowIBuild'
import SystemDesign from './components/SystemDesign'
import CurrentlyLearning from './components/CurrentlyLearning'
import PerformanceBadges from './components/PerformanceBadges'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import AIAssistant from './components/AIAssistant'
import ParticlesBg from './components/ParticlesBg'
import ScrollProgress from './components/common/ScrollProgress'

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-50 relative overflow-x-hidden">
      {/* Scroll progress indicator across the top */}
      <ScrollProgress />

      {/* Particle background kept behind all content */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <ParticlesBg />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transformStyle: 'preserve-3d' }}>
        <section id="home" className="pt-20 pb-16 scroll-mt-20">
          <Hero />
        </section>

        <section id="about" className="pt-20 pb-16 scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="pt-20 pb-16 scroll-mt-20">
          <Skills />
        </section>

        <section id="stats" className="pt-20 pb-16 scroll-mt-20">
          <LiveStats />
        </section>

        {/* <section id="featured" className="pt-20 pb-16 scroll-mt-20">
          <FeaturedProject />
        </section>

        <section id="how-i-build" className="pt-20 pb-16 scroll-mt-20">
          <HowIBuild />
        </section>

        <section id="system-design" className="pt-20 pb-16 scroll-mt-20">
          <SystemDesign />
        </section>

        <section id="learning" className="pt-20 pb-16 scroll-mt-20">
          <CurrentlyLearning /> */}
        {/* </section>

        <section id="performance" className="pt-20 pb-16 scroll-mt-20">
          <PerformanceBadges />
        </section> */}

        <section id="projects" className="pt-20 pb-16 scroll-mt-20">
          <Projects />
        </section>

        <section id="certifications" className="pt-20 pb-16 scroll-mt-20">
          <Certifications />
        </section>

        <section id="achievements" className="pt-20 pb-16 scroll-mt-20">
          <Achievements />
        </section>

        <section id="contact" className="pt-20 pb-20 scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
