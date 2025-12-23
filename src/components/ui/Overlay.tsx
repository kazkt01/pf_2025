'use client'

export function Overlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
        <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAABMTExERERmZmYzMzPMzMxloRvSAAAAB3RSTlMABw8XIzM3CuO0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABHklEQVQ4jWNgwA8YoANHzgEhY0DCCUjYASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB2QsgNSdkDKDkjZASk7IGUHpOyAlB0A6QAA+rdhS+s3KzcAAAAASUVORK5CYII=")`,
                backgroundRepeat: 'repeat',
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
