import type { NavItem } from '../../types/site'

type HeaderProps = {
  brand: string
  navItems: NavItem[]
}

export function Header({ brand, navItems }: HeaderProps) {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a className="brand" href="#home">
        {brand}
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
