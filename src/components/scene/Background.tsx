'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./Scene').then(mod => mod.Scene), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-[#e0e0e0]" />
})

export function Background() {
  return <Scene />
}
