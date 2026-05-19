import { Link } from 'react-router-dom'
import type { WorkEntry } from '../types/site'

type Props = {
  id: string
  heading: string
  entries: WorkEntry[]
}

export function WorkSection({ id, heading, entries }: Props) {
  return (
    <section id={id} className="px-6 py-[clamp(7rem,12vw,10rem)] max-w-2xl mx-auto">
      <p className="meta mb-8">{heading}</p>
      {entries.map((entry) => (
        <Link key={entry.id} to={entry.path} className="work-row group" aria-label={entry.title}>
          <div>
            <span className="work-row-title" style={{ color: 'var(--fg)' }}>
              {entry.title}
            </span>
            <p className="meta mt-1">{entry.subtitle}</p>
          </div>
          <div className="meta text-right whitespace-nowrap">
            <span>{entry.year}</span>
            <span className="block">{entry.role}</span>
          </div>
        </Link>
      ))}
    </section>
  )
}
