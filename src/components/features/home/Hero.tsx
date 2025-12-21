'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Hero() {
  // Refs for animation
  // Refs for animation
  const subtitleRef = useRef<HTMLDivElement>(null)
  const accentRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    gsap.set(".char", { y: 100, opacity: 0 })
    gsap.set([subtitleRef.current, accentRef.current, scrollRef.current], { opacity: 0, y: 30 })

    tl.to(accentRef.current, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out'
    })
    .to(".char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1.5,
        ease: "power4.out"
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

  const renderSplitText = (text: string, isItalic: boolean = false) => (
    <div className={`overflow-hidden flex py-2 pr-4 pl-2 -my-2 -mr-4 -ml-2 ${isItalic ? 'italic' : ''}`}>
        {text.split('').map((char, i) => (
            <span key={i} className="char inline-block translate-y-[100px] opacity-0">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ))}
    </div>
  )

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-6 pb-24 md:pb-40">
      
      {/* Centered Composition */}
      <div className="relative z-10 text-center flex flex-col items-center">
        
        {/* The Wild Flower Accent */}
        <div ref={accentRef} className="mb-12 opacity-0">
             <div className="w-3 h-3 rounded-full bg-[#C84C4C] shadow-[0_0_20px_rgba(200,76,76,0.4)] animate-pulse" />
        </div>

        {/* Main Title - Serif & Elegant */}
        <h1 className="flex flex-col items-center leading-[0.9] text-foreground"
            style={{ textShadow: '0 2px 20px rgba(255, 255, 255, 0.8)' }}
        >
            <div 
                className="font-medium tracking-tight"
                style={{ 
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(3.5rem, 13vw, 9rem)'
                }}
            >
                {renderSplitText("Kazuki", true)}
            </div>
            <div 
                className="font-normal tracking-tight"
                style={{ 
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(3.5rem, 13vw, 9rem)'
                }}
            >
                 {renderSplitText("Tachibana")}
            </div>
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
