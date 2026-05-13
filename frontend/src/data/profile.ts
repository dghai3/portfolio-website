import type { AboutContent, HeroContent, SectionContent } from '../types/site'

export const heroContent: HeroContent = {
  name: 'Dhruv Ghai',
  title: 'AI Full-Stack Engineer',
  description:
    'Building reliable systems, seamless experiences, and solving real-world problems.',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhruvghai2005/',
      isExternal: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/dghai3',
      isExternal: true,
    },
    {
      label: 'Email',
      href: 'mailto:d.ghai2005@gmail.com',
    },
  ],
}

export const aboutContent: AboutContent = {
  id: 'about',
  index: '01',
  title: 'About',
  paragraph: [
    { text: 'Hi, I\'m Dhruv Ghai, I build ' },
    { text: 'AI-powered products', highlight: true },
    { text: ' with a focus on usefulness, speed, and execution. I like taking ' },
    { text: 'vague ideas', highlight: true },
    { text: ', finding the real user problem underneath them, and turning that into software that feels ' },
    { text: 'polished on the surface', highlight: true },
    { text: ' and ' },
    { text: 'dependable behind the scenes', highlight: true },
    { text: '. For me, great engineering is not just making something work; it is making the right thing easier to use.' },
  ],
  productLoop: ['Idea', 'Problem', 'Product', 'Ship'],
  cards: [
    {
      label: 'Focus',
      value: 'AI-powered full-stack products',
    },
    {
      label: 'Product',
      value: 'From vague idea to shipped experience',
    },
    {
      label: 'Working Principle',
      value: 'Build the right thing, then make it feel effortless.',
      featured: true,
    },
  ],
}

export const sections: SectionContent[] = [
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
