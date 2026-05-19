import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import type { HeroContent } from '../types/site'

type Props = { content: HeroContent }

const lines = (content: HeroContent) => [
  { id: 'name', el: 'h1' as const, text: content.name, className: 'text-[length:clamp(2.5rem,6vw,4.5rem)] font-medium tracking-[-0.02em] leading-none' },
  { id: 'role', el: 'p' as const, text: content.role, className: 'text-[var(--muted)] text-base leading-relaxed' },
]

export function HeroSection({ content }: Props) {
  const reduced = useReducedMotion()

  return (
    <section id="home" className="px-6 pt-[22vh] pb-[10vh] max-w-2xl mx-auto">
      {lines(content).map((line, i) => {
        const Tag = line.el
        return (
          <motion.div
            key={line.id}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
          >
            <Tag className={line.className} style={{ marginBottom: line.id === 'name' ? '12px' : '24px' }}>
              {line.text}
            </Tag>
          </motion.div>
        )
      })}

      <motion.div
        className="flex items-center gap-2"
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduced ? { duration: 0 } : { duration: 0.6, delay: 0.16, ease: 'easeOut' }}
      >
        <span className="pulse-dot" aria-hidden="true" />
        <span className="meta">{content.status}</span>
      </motion.div>
    </section>
  )
}
