import type { SectionContent } from '../../types/site'

type SectionShellProps = {
  section: SectionContent
}

export function SectionShell({ section }: SectionShellProps) {
  return (
    <section className="section" id={section.id}>
      <p className="section-label">{section.index}</p>
      <div>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
    </section>
  )
}
