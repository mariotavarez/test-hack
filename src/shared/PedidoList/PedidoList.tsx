import type { PedidoDatum, PedidoListProps } from './types'

export function PedidoList({ items, onSelect }: PedidoListProps) {
  if (!items.length) {
    return (
      <div className="p-8 text-center text-[var(--app-text)]/60">
        No pedidos yet. Create your first one to get started.
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect?.(item)}
          className="block w-full text-left rounded-[18px] border border-[var(--app-border)] bg-[#161b22] p-4 text-[var(--app-text)] cursor-pointer hover:border-[var(--app-accent)]/40 transition-colors"
        >
          <div className="mb-1.5 flex items-center justify-between">
            <strong className="text-base">{item.title}</strong>
            <span className="rounded-full bg-[var(--app-accent)]/10 px-2.5 py-0.5 text-xs text-[var(--app-accent)]">
              {item.status}
            </span>
          </div>
          <p className="text-[13px] text-[var(--app-text)]/70 m-0">{item.description}</p>
        </button>
      ))}
    </div>
  )
}
