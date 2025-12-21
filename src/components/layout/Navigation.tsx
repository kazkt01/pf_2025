'use client'

import { useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const ROUTES = ['/', '/about', '/works', '/gallery', '/contact']

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const isNavigating = useRef(false)
  const lastScrollTime = useRef(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent rapid firing
      const now = Date.now()
      if (now - lastScrollTime.current < 1000) return
      if (isNavigating.current) return

      const currentIndex = ROUTES.indexOf(pathname)
      if (currentIndex === -1) return

      const isScrollable = document.body.scrollHeight > window.innerHeight
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
      const isAtTop = window.scrollY <= 10

      // Scrolling Down
      if (e.deltaY > 0) {
        // If page is not scrollable OR we are at the bottom
        if (!isScrollable || isAtBottom) {
          if (currentIndex < ROUTES.length - 1) {
            isNavigating.current = true
            lastScrollTime.current = now
            router.push(ROUTES[currentIndex + 1])
            setTimeout(() => { isNavigating.current = false }, 1000)
          }
        }
      } 
      // Scrolling Up
      else if (e.deltaY < 0) {
        // If page is not scrollable OR we are at the top
        if (!isScrollable || isAtTop) {
          if (currentIndex > 0) {
            isNavigating.current = true
            lastScrollTime.current = now
            router.push(ROUTES[currentIndex - 1])
            setTimeout(() => { isNavigating.current = false }, 1000)
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [pathname, router])

  return null
}
