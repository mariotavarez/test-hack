interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border-none bg-[var(--app-accent)] text-[#0b0d10] px-4 py-2.5 font-semibold cursor-pointer"
    >
      {children}
    </button>
  )
}
