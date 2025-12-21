'use client'

export function Overlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
        <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                filter: 'contrast(320%) brightness(100%)'
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 mix-blend-overlay" />
        <div 
            className="absolute inset-0"
            style={{
                background: 'radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.15) 100%)'
            }}
        />
    </div>
  )
}
