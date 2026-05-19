export type NavItem = {
  label: string
  href: string
}

export type HeroContent = {
  name: string
  role: string
  location: string
  status: string
}

export type AboutContent = {
  paragraphs: string[]
}

export type WorkEntry = {
  id: string
  title: string
  subtitle: string
  year: string
  role: string
  path: string
}


export type ContactContent = {
  email: string
  github: string
  linkedin: string
  arxiv: string
}

export type CaseStudyMeta = {
  id: string
  title: string
  year: string
  role: string
  stack: string[]
  path: string
}

export type CaseStudySection = {
  heading: 'Problem' | 'Approach' | 'Outcome'
  body: string
}

export type CaseStudy = CaseStudyMeta & {
  sections: CaseStudySection[]
}
