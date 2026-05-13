import { SectionShell } from '../components/common/SectionShell'
import { heroContent, sections } from '../data/profile'
import { HeroSection } from '../sections/HeroSection'

export function HomePage() {
  return (
    <>
      <HeroSection content={heroContent} />
      {sections.map((section) => (
        <SectionShell key={section.id} section={section} />
      ))}
    </>
  )
}
