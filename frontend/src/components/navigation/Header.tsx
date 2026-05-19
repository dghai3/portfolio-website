import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../routes/appRoutes'

export function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5"
      style={{ borderBottom: '1px solid var(--border-col)', background: 'var(--bg)' }}
    >
      <Link
        to="/"
        className="meta link-hover"
        style={{ color: 'var(--fg)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
      >
        Dhruv Ghai
      </Link>

      {isHome && (
        <nav aria-label="Site navigation">
          <ul className="flex gap-7 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="meta link-hover" style={{ color: 'var(--muted)' }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
