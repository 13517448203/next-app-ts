import './globals.css'
import type { Metadata } from 'next'
import { inter, lusitana } from '@/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Next',
    default: 'Create Next App',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className}`}>
        {children}
      </body>
    </html>
  )
}
