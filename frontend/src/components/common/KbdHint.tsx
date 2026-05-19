type Props = { onOpen: () => void }

export function KbdHint({ onOpen }: Props) {
  return (
    <button className="kbd-hint" onClick={onOpen} aria-label="Open command palette">
      ⌘K
    </button>
  )
}
