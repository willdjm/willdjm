import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

// Chakra_Petch

const inter = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'WDJMCorp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
