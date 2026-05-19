import { useCallback, useEffect, useState } from 'react'

type ThemeValue = 'light' | 'dark' | 'system'

function applyTheme(value: ThemeValue) {
  const root = document.documentElement
  if (value === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', value)
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeValue>(() => {
    const stored = localStorage.getItem('theme') as ThemeValue | null
    return stored ?? 'system'
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setTheme = useCallback((value: ThemeValue) => {
    localStorage.setItem('theme', value)
    setThemeState(value)
  }, [])

  const toggleTheme = useCallback(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setTheme(isDark ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, toggleTheme }
}
