import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-background text-foreground relative z-20">
      <h1 
        className="text-9xl md:text-[12rem] font-medium opacity-10 italic"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        404
      </h1>
      <div className="absolute flex flex-col items-center space-y-6">
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase">
          Page Not Found
        </p>
        <Link 
          href="/"
          className="text-sm tracking-[0.2em] border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-300"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  )
}
