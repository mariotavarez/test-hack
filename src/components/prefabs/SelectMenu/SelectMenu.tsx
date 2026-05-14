interface SelectMenuProps {
  label: string
  value: string
}

export function SelectMenu({ label, value }: SelectMenuProps) {
  return (
    <div className="grid gap-2 max-w-[280px]">
      <span className="text-xs text-[var(--app-text)]">{label}</span>
      <div className="flex justify-between rounded-[14px] border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2.5 text-[var(--app-text)]">
        <span>{value}</span>
        <span aria-hidden>v</span>
      </div>
    </div>
  )
}
