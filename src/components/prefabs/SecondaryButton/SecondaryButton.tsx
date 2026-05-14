interface SecondaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-[var(--app-border)] bg-transparent text-[var(--app-text)] px-4 py-2.5 font-medium cursor-pointer"
    >
      {children}
    </button>
  )
}
