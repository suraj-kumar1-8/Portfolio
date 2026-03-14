import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import { ANIMATION_DURATIONS } from '../constants/animations'

// Static response logic (lightweight, no AI model)
const responses = {
  skills: {
    keywords: ['skill', 'technology', 'tech', 'stack', 'language', 'framework', 'what can you do'],
    response: 'I specialize in MERN stack development (MongoDB, Express, React, Node.js), along with C++, JavaScript, Python, and modern tools like Docker, AWS, and CI/CD. Check out the Skills section for a complete overview!'
  },
  projects: {
    keywords: ['project', 'work', 'portfolio', 'built', 'created', 'showcase'],
    response: 'I\'ve built several full-stack projects including a Mental Health AI Chatbot, Studio Management System, and DSA Visualizer. Each project includes detailed case studies - click on any project card to learn more about the architecture, challenges, and learnings!'
  },
  experience: {
    keywords: ['experience', 'background', 'work', 'internship', 'job', 'career'],
    response: 'I\'m a B.Tech CSE student with experience in community development projects and summer training in C++ programming, OOPS, and DSA. I\'ve participated in hackathons and consistently practice LeetCode problems. See the Experience section for details!'
  },
  contact: {
    keywords: ['contact', 'email', 'reach', 'connect', 'hire', 'opportunity', 'job'],
    response: 'I\'m open to full-stack roles, internships, and collaborations! You can reach me via email or connect on LinkedIn. Check the Contact section for my email and social links. I\'m particularly interested in 30+ LPA opportunities at product companies!'
  },
  default: {
    response: 'I can help you learn about my skills, projects, experience, or contact information. Try asking about any of these topics!'
  }
}

function getResponse(message) {
  const lowerMessage = message.toLowerCase()
  
  for (const [key, data] of Object.entries(responses)) {
    if (key === 'default') continue
    if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return data.response
    }
  }
  
  return responses.default.response
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I\'m your AI assistant. I can tell you about Suraj\'s skills, projects, experience, or contact info. What would you like to know?' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Simulate thinking delay
    setTimeout(() => {
      const assistantResponse = { role: 'assistant', text: getResponse(input) }
      setMessages(prev => [...prev, assistantResponse])
    }, 500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: ANIMATION_DURATIONS.entrance }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 shadow-lg shadow-sky-500/40 flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <FiMessageCircle size={24} />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: ANIMATION_DURATIONS.entrance }}
              className="fixed bottom-24 right-6 w-96 h-[500px] glass-card rounded-2xl border border-white/10 shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">AI Assistant</h3>
                  <p className="text-xs text-slate-400">Ask about skills, projects, experience</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-800/60 transition-colors text-slate-400 hover:text-white"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-purple-500/20 to-sky-400/20 text-slate-100'
                          : 'bg-slate-800/60 text-slate-200'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about skills, projects..."
                    className="flex-1 px-3 py-2 rounded-lg bg-slate-800/60 border border-white/10 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400/50"
                  />
                  <button
                    onClick={handleSend}
                    className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-sky-400/20 hover:from-purple-500/30 hover:to-sky-400/30 transition-colors text-slate-100"
                  >
                    <FiSend size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
