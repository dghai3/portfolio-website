import { ProfilePhotoPlaceholder } from '../components/common/ProfilePhotoPlaceholder'
import type { HeroContent } from '../types/site'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="hero" id="home">
      <ProfilePhotoPlaceholder />

      <div className="hero-copy">
        <h1>{content.name}</h1>
        <p className="hero-title">{content.title}</p>
        <p className="hero-text">{content.description}</p>
        <div className="hero-links" aria-label="Social and contact links">
          {content.links.map((link) => (
            <a
              className="hero-link"
              href={link.href}
              key={link.label}
              rel={link.isExternal ? 'noreferrer' : undefined}
              target={link.isExternal ? '_blank' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
