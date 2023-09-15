import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ejam',
  description: 'Ejam is a simple, fast, and secure way to buy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
