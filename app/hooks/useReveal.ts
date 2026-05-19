'use client'
import { useEffect } from 'react'

export function useReveal(threshold = 0.1) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), 80)
            io.unobserve(e.target)
          }
        })
      },
      { threshold }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [threshold])
}
