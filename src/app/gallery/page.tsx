'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const images = [
  '/daosijoai.jpg',
  '/idesite.jpg',
  '/sample.jpg',
  '/sample02.jpg',
  '/fog.jpg',
  '/daosijoai.jpg', // Repeat to fill grid
]

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.fromTo(".animate-in", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "power3.out" }
        )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen w-full flex flex-col items-center px-6 py-20 md:py-32 relative z-10">
      
      <h1 className="text-4xl md:text-6xl font-normal italic text-foreground mb-20 opacity-0 animate-in text-center"
          style={{ fontFamily: 'var(--font-playfair)' }}>
        Visual Journey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {images.map((src, i) => (
              <div key={i} className={`relative aspect-[3/4] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 opacity-0 animate-in group ${i % 2 === 1 ? 'md:translate-y-12' : ''}`}>
                  <Image 
                    src={src} 
                    alt={`Gallery Image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                    <p className="font-mono text-xs text-white tracking-widest uppercase">
                        View Details
                    </p>
                  </div>
              </div>
          ))}
      </div>

    </div>
  )
}
