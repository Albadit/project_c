'use client'
import { SessionProvider } from 'next-auth/react';

type ProviderProps = {
  children: React.ReactNode
  session?: any
}

export default function Provider({ children, session}: ProviderProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}