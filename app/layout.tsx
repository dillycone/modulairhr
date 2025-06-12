import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ModulairHR',
  description: 'Modern performance management platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
