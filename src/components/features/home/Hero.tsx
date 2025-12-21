'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Hero() {
  // Refs for animation
  const titleLine1Ref = useRef<HTMLHeadingElement>(null)
  const titleLine2Ref = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const accentRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    gsap.set([titleLine1Ref.current, titleLine2Ref.current, subtitleRef.current, accentRef.current, scrollRef.current], { opacity: 0, y: 30 })

    tl.to(accentRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out'
    })
    .to([titleLine1Ref.current, titleLine2Ref.current], {
        opacity: 1,
        y: 0,
        duration: 1.8,
        stagger: 0.3,
        ease: 'power3.out'
    }, "-=1.5")
    .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out'
    }, "-=1.0")
    .to(scrollRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5
    }, "-=1.0")

  }, [])

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-6 pb-40">
      
      {/* Centered Composition */}
      <div className="relative z-10 text-center flex flex-col items-center">
        
        {/* The Wild Flower Accent */}
        <div ref={accentRef} className="mb-12 opacity-0">
             <div className="w-3 h-3 rounded-full bg-[#C84C4C] shadow-[0_0_20px_rgba(200,76,76,0.4)] animate-pulse" />
        </div>

        {/* Main Title - Serif & Elegant */}
        <h1 className="flex flex-col items-center leading-[0.9] text-foreground">
            <span 
                ref={titleLine1Ref}
                className="text-[13vw] md:text-[8rem] font-medium tracking-tight opacity-0 italic"
                style={{ fontFamily: 'var(--font-playfair)' }}
            >
                Kazuki
            </span>
            <span 
                ref={titleLine2Ref}
                className="text-[13vw] md:text-[8rem] font-normal tracking-tight opacity-0"
                style={{ fontFamily: 'var(--font-playfair)' }}
            >
                Tachibana
            </span>
        </h1>

        {/* Subtitle - Clean Sans */}
        <div ref={subtitleRef} className="mt-8 md:mt-12 space-y-2 opacity-0">
            <p className="text-sm md:text-base font-light tracking-[0.2em] text-foreground/80 uppercase">
                Full-Stack Logic & Emotional Interaction
            </p>
            <p className="text-xs md:text-sm font-light text-foreground/50 tracking-widest">
                TOKYO, JAPAN — EST. 2025
            </p>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div ref={scrollRef} className="absolute bottom-12 opacity-0">
          <p className="text-[10px] tracking-[0.3em] text-foreground/40 uppercase animate-bounce">
              Scroll to Explore
          </p>
      </div>

    </div>
  )
}
