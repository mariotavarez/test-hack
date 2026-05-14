interface InputFieldProps {
  label: string
  placeholder?: string
  helper?: string
}

export function InputField({ label, placeholder = '', helper }: InputFieldProps) {
  return (
    <label className="grid gap-2 max-w-[280px]">
      <span className="text-xs text-[var(--app-text)]">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-[14px] border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2.5 text-[var(--app-text)] outline-none"
      />
      {helper ? <span className="text-xs text-[var(--app-border)]">{helper}</span> : null}
    </label>
  )
}
