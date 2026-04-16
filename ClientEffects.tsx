'use client'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // Header shadow on scroll
    const header = document.getElementById('main-header')
    const onScroll = () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Parallax
    const heroBg   = document.getElementById('hero-bg')
    const heroGlow = document.getElementById('hero-glow')
    const onParallax = () => {
      const y = window.scrollY
      if (heroBg)   heroBg.style.transform   = `translateY(${y * 0.3}px)`
      if (heroGlow) heroGlow.style.transform = `translateY(${y * 0.18}px)`
    }
    window.addEventListener('scroll', onParallax, { passive: true })

    // Scroll Reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onParallax)
      io.disconnect()
    }
  }, [])

  return null
}
