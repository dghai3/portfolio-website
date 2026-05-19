import type { ReactNode } from 'react'
import { Header } from '../navigation/Header'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100svh' }}>
      <Header />
      <main style={{ paddingTop: '65px' }}>{children}</main>
    </div>
  )
}
