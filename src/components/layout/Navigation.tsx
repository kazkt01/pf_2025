'use client'

import { useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const ROUTES = ['/', '/about', '/works', '/gallery', '/contact']

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const isNavigating = useRef(false)
  const lastScrollTime = useRef(0)

  const touchStartY = useRef(0)

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

    const handleTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
        const now = Date.now()
        if (now - lastScrollTime.current < 1000) return
        if (isNavigating.current) return

        const touchEndY = e.changedTouches[0].clientY
        const deltaY = touchStartY.current - touchEndY
        const swipeThreshold = 50

        if (Math.abs(deltaY) < swipeThreshold) return

        const currentIndex = ROUTES.indexOf(pathname)
        if (currentIndex === -1) return

        const isScrollable = document.body.scrollHeight > window.innerHeight
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
        const isAtTop = window.scrollY <= 10

        // Swipe Up (Scroll Down)
        if (deltaY > 0) {
            if (!isScrollable || isAtBottom) {
                if (currentIndex < ROUTES.length - 1) {
                    isNavigating.current = true
                    lastScrollTime.current = now
                    router.push(ROUTES[currentIndex + 1])
                    setTimeout(() => { isNavigating.current = false }, 1000)
                }
            }
        }
        // Swipe Down (Scroll Up)
        else if (deltaY < 0) {
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
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
        window.removeEventListener('wheel', handleWheel)
        window.removeEventListener('touchstart', handleTouchStart)
        window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [pathname, router])

  return null
}
