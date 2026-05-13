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

export type AboutCard = {
  label: string
  value: string
  featured?: boolean
}

export type AboutTextSegment = {
  text: string
  highlight?: boolean
}

export type AboutContent = {
  id: string
  index: string
  title: string
  paragraph: AboutTextSegment[]
  productLoop: string[]
  cards: AboutCard[]
}

export type SectionContent = {
  id: string
  index: string
  title: string
  description: string
}
