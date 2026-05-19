import type { ContactContent } from '../types/site'

type Props = { content: ContactContent }

export function ContactSection({ content }: Props) {
  const links = [
    { label: 'Email', href: `mailto:${content.email}` },
    { label: 'GitHub', href: content.github },
    { label: 'LinkedIn', href: content.linkedin },
    { label: 'arXiv', href: content.arxiv },
  ]

  return (
    <section id="contact" className="px-6 py-[clamp(7rem,12vw,10rem)] max-w-2xl mx-auto">
      <p className="meta">
        {links.map((link, i) => (
          <span key={link.label}>
            <a
              href={link.href}
              className="link-hover"
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
            {i < links.length - 1 && <span style={{ color: 'var(--border-col)' }}>,&nbsp;</span>}
          </span>
        ))}
      </p>
    </section>
  )
}
