'use client'

import { HeroUIProvider } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { SmoothScroll } from './providers/SmoothScroll'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </HeroUIProvider>
  )
}
