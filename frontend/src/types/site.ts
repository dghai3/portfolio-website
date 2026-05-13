export type NavItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  isExternal?: boolean
}

export type HeroContent = {
  name: string
  title: string
  description: string
  links: SocialLink[]
}

export type SectionContent = {
  id: string
  index: string
  title: string
  description: string
}
