import React from 'react'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { Particles } from '@tsparticles/react'

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: ['#7c3aed', '#06b6d4', '#3b82f6'] },
          opacity: { value: 0.12 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.5 },
          links: { enable: true, distance: 120, color: '#7c3aed', opacity: 0.08 }
        },
        detectRetina: true
      }}
      style={{ position: 'fixed', zIndex: 0, inset: 0, pointerEvents: 'none' }}
    />
  )
}
