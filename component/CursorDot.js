'use client'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function CursorDot() {
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to('.box1', {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        delay:0.3,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="fixed w-2 h-2 rounded-full bg-[#ffffff] box1 pointer-events-none z-[9999]" />
  )
}
