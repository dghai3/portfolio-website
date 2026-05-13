import type { HeroContent, SectionContent } from '../types/site'

export const heroContent: HeroContent = {
  name: 'Dhruv Ghai',
  title: 'Product Focused Software Engineer',
  description:
    'Building reliable systems, seamless experiences, and solving real-world problems.',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      isExternal: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/',
      isExternal: true,
    },
    {
      label: 'Email',
      href: 'mailto:hello@example.com',
    },
  ],
}

export const sections: SectionContent[] = [
  {
    id: 'about',
    index: '01',
    title: 'About',
    description: 'We will build this section next.',
  },
  {
    id: 'experience',
    index: '02',
    title: 'Experience',
    description: 'We will lay out your roles, education, and achievements here.',
  },
  {
    id: 'skills',
    index: '03',
    title: 'Skills',
    description: 'We will add your languages, tools, and frameworks here.',
  },
  {
    id: 'projects',
    index: '04',
    title: 'Projects',
    description: 'We will add your featured work here.',
  },
  {
    id: 'beyond',
    index: '05',
    title: 'Beyond Engineering',
    description: 'We will add interests, leadership, and personal notes here.',
  },
  {
    id: 'contact',
    index: '06',
    title: 'Contact',
    description: 'We will add your email and social links here.',
  },
]
