import type { AboutContent } from '../types/site'

type Props = { content: AboutContent }

export function AboutSection({ content }: Props) {
  return (
    <section id="about" className="px-6 py-[clamp(7rem,12vw,10rem)] max-w-2xl mx-auto">
      <div className="flex flex-col gap-5" style={{ maxWidth: 640 }}>
        {content.paragraphs.map((para, i) => (
          <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--fg)' }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}
