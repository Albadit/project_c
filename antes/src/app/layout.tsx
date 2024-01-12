import '@/css/globals.css'
import type { Metadata } from 'next'
import Provider from '../../context/provider'

export const metadata: Metadata = {
  title: 'Antes',
  description: 'Antes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <Provider>
        <body className="bg-background">{children}</body>
      </Provider>
    </html>
  )
}
