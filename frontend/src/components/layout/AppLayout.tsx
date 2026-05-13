import type { ReactNode } from 'react'
import { StarField } from '../background/StarField'
import { Header } from '../navigation/Header'
import { navItems } from '../../routes/appRoutes'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="site">
      <StarField />
      <Header brand="Dhruv Ghai" navItems={navItems} />
      {children}
    </main>
  )
}
