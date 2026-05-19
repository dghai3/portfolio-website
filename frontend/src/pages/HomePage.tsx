import { aboutContent, contactContent, experienceEntries, heroContent, projectEntries } from '../data/profile'
import { AboutSection } from '../sections/AboutSection'
import { ContactSection } from '../sections/ContactSection'
import { HeroSection } from '../sections/HeroSection'
import { WorkSection } from '../sections/WorkSection'

export function HomePage() {
  return (
    <>
      <HeroSection content={heroContent} />
      <hr />
      <WorkSection id="experience" heading="Experience" entries={experienceEntries} />
      <hr />
      <WorkSection id="projects" heading="Projects" entries={projectEntries} />
      <hr />
      <AboutSection content={aboutContent} />
      <hr />
      <ContactSection content={contactContent} />
    </>
  )
}
