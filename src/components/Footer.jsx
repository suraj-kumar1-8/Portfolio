import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  const socialLinks = [
    { 
      Icon: FaGithub, 
      href: 'https://github.com', 
      label: 'GitHub',
      color: 'text-slate-300',
      hoverColor: 'hover:text-white',
      glowColor: 'bg-white/20'
    },
    { 
      Icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/suraj-kumar2111/', 
      label: 'LinkedIn',
      color: 'text-[#0A66C2]',
      hoverColor: 'hover:text-[#0A66C2]',
      glowColor: 'bg-[#0A66C2]/30'
    },
    { 
      Icon: SiLeetcode, 
      href: 'https://leetcode.com/u/HtVI08YLj0/', 
      label: 'LeetCode',
      color: 'text-[#FFA116]',
      hoverColor: 'hover:text-[#FFA116]',
      glowColor: 'bg-[#FFA116]/30'
    },
    { 
      Icon: FaEnvelope, 
      href: 'mailto:suraj@example.com', 
      label: 'Email',
      color: 'text-slate-300',
      hoverColor: 'hover:text-white',
      glowColor: 'bg-gradient-to-tr from-purple-500/30 via-sky-400/30 to-emerald-400/30'
    }
  ]

  return (
    <footer className="relative mt-20 pt-8 pb-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <p className="text-sm text-slate-400 mb-4">
            suraj.kumar@example.com
          </p>
          
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ Icon, href, label, color, hoverColor, glowColor }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/60 border border-white/10 ${color} ${hoverColor} transition-colors duration-300`}
                aria-label={label}
              >
                <span className={`absolute inset-0 rounded-full ${glowColor} blur-md opacity-0 hover:opacity-100 transition-opacity duration-300`} />
                <Icon className="relative z-10" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-4 border-t border-white/5">
          <p>Built with React & Tailwind</p>
          <p className="mt-1">© {new Date().getFullYear()} Suraj Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
