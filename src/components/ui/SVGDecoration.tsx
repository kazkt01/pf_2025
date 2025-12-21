'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function SVGDecoration() {
  const circleRef1 = useRef<SVGCircleElement>(null)
  const circleRef2 = useRef<SVGCircleElement>(null)
  const lineRef = useRef<SVGLineElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    if (circleRef1.current) {
        const length = circleRef1.current.getTotalLength()
        gsap.set(circleRef1.current, { strokeDasharray: length, strokeDashoffset: length })
        tl.to(circleRef1.current, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' })
    }

    if (circleRef2.current) {
        const length = circleRef2.current.getTotalLength()
        gsap.set(circleRef2.current, { strokeDasharray: length, strokeDashoffset: length })
        tl.to(circleRef2.current, { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' }, "-=1.5")
    }
    
    if (lineRef.current) {
         const length = lineRef.current.getTotalLength()
         gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length })
         tl.to(lineRef.current, { strokeDashoffset: 0, duration: 1.5, ease: 'power2.out' }, "-=2")
    }

  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        {/* Large structural circle */}
        <circle 
            ref={circleRef1}
            cx="1400" cy="540" r="400" 
            fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" 
        />
        {/* Inner concentric circle */}
        <circle 
            ref={circleRef2}
            cx="1400" cy="540" r="250" 
            fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" 
        />
        {/* Connecting line */}
        <line 
            ref={lineRef}
            x1="0" y1="540" x2="1000" y2="540"
            stroke="rgba(255,255,255,0.1)" strokeWidth="1"
        />
      </svg>
    </div>
  )
}
