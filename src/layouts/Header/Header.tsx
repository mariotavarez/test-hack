export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[var(--app-border)] bg-[var(--app-bg)] px-6 py-3 text-[var(--app-text)]">
      <div className="text-base font-bold tracking-[-0.02em]">
        Pedido
      </div>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--app-accent)]/12 text-sm font-semibold text-[var(--app-accent)]">
          U
        </span>
      </div>
    </header>
  )
}
