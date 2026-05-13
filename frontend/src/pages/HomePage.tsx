import { SectionShell } from '../components/common/SectionShell'
import { aboutContent, heroContent, sections } from '../data/profile'
import { AboutSection } from '../sections/AboutSection'
import { HeroSection } from '../sections/HeroSection'

export function HomePage() {
  return (
    <>
      <HeroSection content={heroContent} />
      <AboutSection content={aboutContent} />
      {sections.map((section) => (
        <SectionShell key={section.id} section={section} />
      ))}
    </>
  )
}
