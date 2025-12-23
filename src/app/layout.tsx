import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { TabMenu } from '@/components/layout/TabMenu'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/layout/Navigation'

const Background = dynamic(() => import('@/components/scene/Background').then(mod => mod.Background), { 
  ssr: false 
})
import { Overlay } from '@/components/ui/Overlay'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: {
    default: 'Kazuki Tachibana | Full-Stack Engineer',
    template: '%s | Kazuki Tachibana'
  },
  description: 'Full-Stack Logic & Emotional Interaction. Based in Tokyo, Japan.',
  keywords: ['Full-Stack Engineer', 'Web Developer', 'Tokyo', 'React', 'Next.js', 'Creative Developer'],
  authors: [{ name: 'Kazuki Tachibana' }],
  creator: 'Kazuki Tachibana',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kazukitachibana.com',
    title: 'Kazuki Tachibana | Full-Stack Engineer',
    description: 'Full-Stack Logic & Emotional Interaction. Based in Tokyo, Japan.',
    siteName: 'Kazuki Tachibana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kazuki Tachibana | Full-Stack Engineer',
    description: 'Full-Stack Logic & Emotional Interaction.',
    creator: '@kazukitachibana',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
        <Providers>
          <Background />
          <Overlay />
          <TabMenu />
          <Navigation />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
