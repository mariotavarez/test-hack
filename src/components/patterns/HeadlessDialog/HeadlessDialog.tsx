import { useState, type ReactNode } from 'react'

interface HeadlessDialogProps {
  triggerLabel: string
  children: (api: { isOpen: boolean; close: () => void }) => ReactNode
}

export function HeadlessDialog({ triggerLabel, children }: HeadlessDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        {triggerLabel}
      </button>
      {isOpen ? children({ isOpen, close: () => setIsOpen(false) }) : null}
    </>
  )
}
