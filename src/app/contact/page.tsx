'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.fromTo(".animate-in", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power3.out" }
        )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen w-full flex flex-col justify-center items-center px-6 relative z-10">
      
      <div className="w-2 h-2 rounded-full bg-[#C84C4C] opacity-0 animate-in mb-8" />

      <h1 className="text-4xl md:text-8xl font-medium text-foreground mb-8 opacity-0 animate-in text-center"
          style={{ fontFamily: 'var(--font-playfair)' }}>
        Get in Touch
      </h1>

      <p className="text-lg md:text-xl font-light text-foreground/60 mb-12 opacity-0 animate-in text-center tracking-wide">
          Let&apos;s weave something beautiful together.
      </p>

      <a href="mailto:hello@qaki.studio" 
         className="text-2xl md:text-4xl font-light text-foreground border-b border-foreground/20 hover:border-[#C84C4C] hover:text-[#C84C4C] transition-all duration-500 pb-2 opacity-0 animate-in"
         style={{ fontFamily: 'var(--font-playfair)' }}
      >
          hello@qaki.studio
      </a>

    </div>
  )
}
