import React, { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setWidth(docHeight ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all" style={{ width: `${width}%` }} />
    </div>
  )
}
