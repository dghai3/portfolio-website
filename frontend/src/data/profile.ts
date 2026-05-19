import type {
  AboutContent,
  CaseStudy,
  ContactContent,
  HeroContent,
  WorkEntry,
} from '../types/site'

export const heroContent: HeroContent = {
  name: 'Dhruv Ghai',
  role: 'Software engineering student at Western, focused on AI products.',
  location: 'London, Ontario',
  status: 'Available for 2026 internships',
}

export const aboutContent: AboutContent = {
  paragraphs: [
    "I'm in my third year of software engineering at Western, entering my fourth. I spend most of my time building products at the seam between AI research and shipped software — recently as an AI software developer at Varonova, a full-stack developer at CognitomeAI, and a data engineer at MomentumMind. In late 2025 I published a paper on Tiny Recursive Models against the ARC-AGI-1 benchmark.",
    "I care about products that work — clean state, sensible defaults, fast pages, calm interfaces. The work below is roughly chronological. The research page is the one I'm proudest of.",
  ],
}

export const experienceEntries: WorkEntry[] = [
  {
    id: 'varonova',
    title: 'Varonova Tech',
    subtitle: 'NLP infrastructure and 3D scene reconstruction for AI-generated video',
    year: '2025–26',
    role: 'AI software developer',
    path: '/work/varonova',
  },
  {
    id: 'cognitomeai',
    title: 'CognitomeAI',
    subtitle: 'Full-stack onboarding and referral system for an AI startup',
    year: '2025',
    role: 'Full-stack developer',
    path: '/work/cognitomeai',
  },
]

export const projectEntries: WorkEntry[] = [
  {
    id: 'research-tiny-recursive-models',
    title: 'Tiny Recursive Models on ARC-AGI-1',
    subtitle: 'arXiv paper benchmarking recursive reasoning on abstract reasoning tasks',
    year: '2025',
    role: 'Author',
    path: '/work/research-tiny-recursive-models',
  },
  {
    id: 'clearcare',
    title: 'ClearCare',
    subtitle: 'Hackathon-built rural healthcare referral platform',
    year: '2025',
    role: 'Backend lead',
    path: '/work/clearcare',
  },
]

export const contactContent: ContactContent = {
  email: 'd.ghai2005@gmail.com',
  github: 'https://github.com/dghai3',
  linkedin: 'https://linkedin.com/in/dhruvghai2005',
  arxiv: 'https://arxiv.org/abs/2512.11847',
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cognitomeai',
    title: 'CognitomeAI',
    year: 'Sept – Dec 2025',
    role: 'Full-stack website developer',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'DynamoDB', 'Jira'],
    path: '/work/cognitomeai',
    sections: [
      {
        heading: 'Problem',
        body: 'New users were dropping off inside a complex multi-step onboarding configuration before reaching activation. Referral acquisition was effectively dead — there was no incentive system and no tracking.',
      },
      {
        heading: 'Approach',
        body: 'I rebuilt the onboarding flow as a Next.js multi-step funnel with centralized TypeScript state management so configuration data persisted across steps without losing context on refresh or back-navigation. In parallel I designed a referral reward system on PostgreSQL with a DynamoDB hot-path for tracking, plus server-side anti-fraud checks to keep the incentives from being gamed. I ran cross-functional sprints in Jira to keep AI research, frontend, and backend aligned on the same milestones.',
      },
      {
        heading: 'Outcome',
        body: 'New-user completion lifted 12%. Referral-driven signups grew 5x. Sprint alignment ran at 100% against committed objectives for the quarter I was on the team.',
      },
    ],
  },
  {
    id: 'varonova',
    title: 'Varonova Tech',
    year: 'Jan 2025 – Apr 2026',
    role: 'AI software developer',
    stack: ['Python', 'Regex', 'NumPy', 'local NLP classifiers', 'LLM APIs'],
    path: '/work/varonova',
    sections: [
      {
        heading: 'Problem',
        body: 'The script parsing pipeline was producing a high rate of false-positive entities — confusing speaker names with scene metadata — and was over-relying on LLM calls for cases that didn\'t need them, which inflated cost.',
      },
      {
        heading: 'Approach',
        body: 'I built a multi-pass Python and Regex parser with contextual filtering to separate speaker names from scene metadata. Then I added a local NLP classification layer with confidence-based scoring: 80% of script blocks now resolve deterministically without ever hitting a generative model, with LLMs called only as a fallback on low-confidence blocks. Separately, I engineered a NumPy backprojection pipeline using 4x4 camera pose transformations and depth maps to produce realistic parallax and 3D scene reconstruction for generated video.',
      },
      {
        heading: 'Outcome',
        body: 'False-positive entity creation dropped 40%. LLM API costs dropped 50%. The 3D reconstruction pipeline produced parallax effects realistic enough to use in production output.',
      },
    ],
  },
  {
    id: 'research-tiny-recursive-models',
    title: 'Tiny Recursive Models on ARC-AGI-1',
    year: '2025',
    role: 'Author',
    stack: ['Python', 'large-scale inference', 'ablation tooling'],
    path: '/work/research-tiny-recursive-models',
    sections: [
      {
        heading: 'Problem',
        body: 'Tiny Recursive Models had been proposed as an efficient approach to abstract reasoning tasks, but reproducible benchmark numbers on ARC-AGI-1 — particularly under test-time compute scaling — weren\'t widely published. Failure modes weren\'t well characterized.',
      },
      {
        heading: 'Approach',
        body: 'I built a reproducible benchmarking pipeline to evaluate Tiny Recursive Models across the full 400-task ARC-AGI-1 set, running large-scale inference under multiple evaluation configurations. I ran the official 1000-sample augmentation plus majority-vote pipeline to measure how much test-time compute actually helps. I also ran controlled ablations — removing puzzle-ID conditioning, randomizing identity tokens, and decoding per recursion step — to isolate what the model relies on.',
      },
      {
        heading: 'Outcome',
        body: 'Test-time compute produced a +10.75 percentage point Pass@1 improvement over single-pass inference. Ablations validated specific failure modes: Pass@1 collapsed to 0% without identity conditioning, and recursion saturated earlier than expected. Full results and trajectories in the paper.',
      },
    ],
  },
  {
    id: 'clearcare',
    title: 'ClearCare',
    year: '2025 (hackathon)',
    role: 'Backend lead, API integration',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Vapi', 'Twilio'],
    path: '/work/clearcare',
    sections: [
      {
        heading: 'Problem',
        body: 'Medical airlifts in rural Canada can cost $15,000+ each, and many of them happen because rural clinics and regional hospitals don\'t have a fast way to coordinate transfers and check specialist availability in real time.',
      },
      {
        heading: 'Approach',
        body: 'Our team built a referral platform that lets rural healthcare providers assess transfer options, see specialist availability, and initiate referrals with AI-assisted triage support. I led the FastAPI backend and PostgreSQL schema, plus the Vapi integration for AI voice triage calls and Twilio for SMS-based coordination between sites.',
      },
      {
        heading: 'Outcome',
        body: 'A working end-to-end demo at the hackathon covering provider intake, AI triage, and cross-site SMS coordination on top of a real backend.',
      },
    ],
  },
]
