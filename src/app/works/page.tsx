'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const projects = [
    { title: "Ethereal Commerce", date: "2024", type: "Web Application" },
    { title: "Mist & Stone", date: "2023", type: "Interactive Experience" },
    { title: "Urban Pulse", date: "2025", type: "Data Visualization" },
    { title: "Silence", date: "2024", type: "Audio Reactive" }
]

export default function Works() {
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
    <div ref={containerRef} className="min-h-screen w-full flex flex-col justify-center items-center px-6 relative z-10 pb-40">
      
      <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-16 opacity-0 animate-in text-center"
          style={{ fontFamily: 'var(--font-playfair)' }}>
        Selected Works
      </h1>

      <div className="w-full max-w-2xl">
          {projects.map((project, index) => (
              <div key={index} className="group flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-foreground/10 py-6 opacity-0 animate-in hover:border-foreground/30 transition-colors cursor-pointer gap-2 md:gap-0">
                  <div className="flex items-baseline gap-4">
                      <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#C84C4C] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <h2 className="text-2xl md:text-3xl font-light text-foreground group-hover:translate-x-2 transition-transform duration-500"
                          style={{ fontFamily: 'var(--font-playfair)' }}>
                          {project.title}
                      </h2>
                  </div>
                  <div className="text-xs md:text-sm font-light text-foreground/40 font-mono pl-4 md:pl-0">
                      {project.date} — {project.type}
                  </div>
              </div>
          ))}
      </div>

    </div>
  )
}
