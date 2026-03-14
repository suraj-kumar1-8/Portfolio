import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 45, density: { enable: true, area: 800 } },
          color: { value: ['#7c3aed', '#06b6d4'] },
          opacity: { value: 0.08 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.4 },
          links: { enable: true, distance: 120, color: '#7c3aed', opacity: 0.06 }
        },
        detectRetina: true
      }}
      style={{ position: 'fixed', zIndex: 0, inset: 0, pointerEvents: 'none' }}
    />
  )
}
