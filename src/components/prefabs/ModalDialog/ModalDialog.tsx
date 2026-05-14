interface ModalDialogProps {
  title: string
  description: string
}

export function ModalDialog({ title, description }: ModalDialogProps) {
  return (
    <div className="max-w-[320px] rounded-[20px] border border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] p-4">
      <h3 className="mb-2">{title}</h3>
      <p className="mb-4 text-[var(--app-text)]/75">{description}</p>
      <div className="flex gap-2">
        <button type="button" className="rounded-full border border-[var(--app-border)] bg-transparent text-[var(--app-text)] px-3 py-2 cursor-pointer">
          Cancel
        </button>
        <button type="button" className="rounded-full border-none bg-[var(--app-accent)] text-[#0b0d10] px-3 py-2 cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  )
}
