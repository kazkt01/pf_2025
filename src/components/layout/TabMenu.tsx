'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from '@heroui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'

const navItems = siteConfig.navItems

export function TabMenu() {
  const pathname = usePathname()
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null)

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-md">
      <div className="flex items-center justify-between md:justify-center p-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg overflow-x-auto scrollbar-hide ring-1 ring-white/5">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link
              as={NextLink}
              key={item.href}
              href={item.href}
              className={clsx(
                "relative flex-shrink-0 flex items-center justify-center px-5 py-2.5 rounded-full text-sm transition-all duration-500",
                isActive ? "text-foreground font-medium" : "text-foreground/60 hover:text-foreground"
              )}
              style={{ fontFamily: 'var(--font-playfair)' }}
              onMouseEnter={() => setHoveredPath(item.href)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {hoveredPath === item.href && (
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  layoutId="nav-hover"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                />
              )}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full -z-20 border border-white/20 shadow-sm"
                  layoutId="nav-active"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                />
              )}
              <span className="relative z-10 italic tracking-wide">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
