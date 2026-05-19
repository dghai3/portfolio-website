import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../data/profile'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function CaseStudyPage() {
  const { id } = useParams<{ id: string }>()
  const reduced = useReducedMotion()
  const study = caseStudies.find((s) => s.id === id)

  if (!study) {
    return (
      <div className="px-6 py-32 max-w-2xl mx-auto">
        <Link to="/" className="back-link">
          <ArrowLeft size={12} />
          Back
        </Link>
        <p className="meta mt-12">Case study not found.</p>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={study.id}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduced ? {} : { opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="px-6 pt-16 pb-4 max-w-2xl mx-auto">
          <Link to="/" className="back-link">
            <ArrowLeft size={12} />
            Back
          </Link>
        </div>

        <div className="px-6 pt-12 pb-8 max-w-2xl mx-auto">
          <motion.h1
            layoutId={`work-title-${study.id}`}
            className="text-[length:clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.02em] leading-tight"
            transition={reduced ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
          >
            {study.title}
          </motion.h1>

          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5">
            <span className="meta">{study.year}</span>
            <span className="meta">{study.role}</span>
            <span className="meta">{study.stack.join(', ')}</span>
          </div>
        </div>

        <hr />

        <div className="px-6 py-16 max-w-2xl mx-auto flex flex-col gap-14">
          {study.sections.map((section) => (
            <div key={section.heading}>
              <p className="meta mb-4">{section.heading}</p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--fg)' }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
