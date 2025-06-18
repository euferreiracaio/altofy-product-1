import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LegalAI - AI-Powered Legal Platform',
  description: 'Transform your legal practice with AI-powered contract analysis, case research, and legal insights.',
  generator: 'LegalAI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}