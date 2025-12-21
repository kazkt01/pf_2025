'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function About() {
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
      
      {/* Accent */}
      <div className="w-2 h-2 rounded-full bg-[#C84C4C] opacity-0 animate-in mb-8" />

      {/* Title */}
      <h1 className="text-4xl md:text-7xl font-medium italic text-foreground mb-12 opacity-0 animate-in text-center"
          style={{ fontFamily: 'var(--font-playfair)' }}>
        Unfolding the Logic
      </h1>

      {/* Bio */}
      <div className="max-w-xl text-center space-y-8 text-foreground/80 font-light leading-relaxed opacity-0 animate-in">
        <p>
          I believe that code is not just a set of instructions, but a medium for expression. 
          Like weaving a tapestry, I thread logic with emotion to create digital experiences that resonate.
        </p>
        <p>
          Based in Tokyo, I explore the intersection of full-stack engineering and interactive art. 
          My work is an ongoing dialogue between structure and fluidity.
        </p>
      </div>

    </div>
  )
}
