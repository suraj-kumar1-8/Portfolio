import React, { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return show ? (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg animate-bounce text-white">
      <FiChevronUp size={22} />
    </button>
  ) : null
}
