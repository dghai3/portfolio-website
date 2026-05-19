import { Command } from 'cmdk'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contactContent } from '../../data/profile'
import { useTheme } from '../../hooks/useTheme'
import { Toast } from './Toast'

type Props = {
  open: boolean
  onClose: () => void
}

export function CommandPalette({ open, onClose }: Props) {
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
  const [toast, setToast] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(false), 2000)
    return () => clearTimeout(t)
  }, [toast])

  function run(fn: () => void) {
    onClose()
    fn()
  }

  function scrollTo(id: string) {
    run(() => {
      if (window.location.pathname !== '/') {
        navigate('/')
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  function goTo(path: string) {
    run(() => navigate(path))
  }

  function copyEmail() {
    navigator.clipboard.writeText(contactContent.email).then(() => {
      onClose()
      setToast(true)
    })
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="cmd-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          >
            <motion.div
              className="cmd-dialog"
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Command>
                <div className="cmd-input-wrap">
                  <Command.Input
                    ref={inputRef}
                    className="cmd-input"
                    placeholder="Type a command..."
                  />
                </div>

                <Command.List className="cmd-list">
                  <Command.Empty className="cmd-empty">No results.</Command.Empty>

                  <Command.Group heading={<span className="cmd-group-label">Navigate</span>}>
                    {[
                      { label: 'Home', id: 'home' },
                      { label: 'Experience', id: 'experience' },
                      { label: 'Projects', id: 'projects' },
                      { label: 'About', id: 'about' },
                      { label: 'Contact', id: 'contact' },
                    ].map((item) => (
                      <Command.Item
                        key={item.id}
                        className="cmd-item"
                        onSelect={() => scrollTo(item.id)}
                      >
                        {item.label}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Group heading={<span className="cmd-group-label">Work</span>}>
                    {[
                      { label: 'CognitomeAI', path: '/work/cognitomeai' },
                      { label: 'Varonova Tech', path: '/work/varonova' },
                      { label: 'Tiny Recursive Models', path: '/work/research-tiny-recursive-models' },
                      { label: 'ClearCare', path: '/work/clearcare' },
                    ].map((item) => (
                      <Command.Item
                        key={item.path}
                        className="cmd-item"
                        onSelect={() => goTo(item.path)}
                      >
                        {item.label}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Group heading={<span className="cmd-group-label">Actions</span>}>
                    <Command.Item className="cmd-item" onSelect={copyEmail}>
                      Copy email
                    </Command.Item>
                    <Command.Item
                      className="cmd-item"
                      onSelect={() => run(() => window.open('https://github.com/dghai3', '_blank'))}
                    >
                      View source on GitHub
                    </Command.Item>
                    <Command.Item
                      className="cmd-item"
                      onSelect={() => run(toggleTheme)}
                    >
                      Toggle theme
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toast message="Email copied" visible={toast} />
    </>
  )
}
