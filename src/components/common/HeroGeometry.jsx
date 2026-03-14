import React from 'react'

// Subtle background with minimal particles and wireframe sphere (CSS-only for performance)
export default function HeroGeometry() {
  // Generate minimal star particles (CSS only)
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3
  }))

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Minimal floating stars - CSS animation only */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-40"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: '2px',
            height: '2px',
            boxShadow: '0 0 3px rgba(56, 189, 248, 0.6)',
            animation: `starFloat 4s ease-in-out infinite`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Faint wireframe sphere - CSS rotation only */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-8"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
          `,
          borderRadius: '50%',
          border: '1px solid rgba(56, 189, 248, 0.15)',
          animation: 'slowRotate 40s linear infinite',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 48%, rgba(56, 189, 248, 0.15) 49%, rgba(56, 189, 248, 0.15) 51%, transparent 52%),
              linear-gradient(90deg, transparent 48%, rgba(56, 189, 248, 0.15) 49%, rgba(56, 189, 248, 0.15) 51%, transparent 52%)
            `,
            borderRadius: '50%'
          }}
        />
      </div>

      {/* Static gradient shapes */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 opacity-8"
        style={{
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(6, 182, 212, 0.08))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(40px)'
        }}
      />
      
      <div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-6"
        style={{
          background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.08), rgba(34, 197, 94, 0.08))',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          filter: 'blur(35px)'
        }}
      />
    </div>
  )
}
