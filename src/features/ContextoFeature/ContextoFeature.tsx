import { useState, useEffect } from 'react'
import type { PedidoEntry } from './types'
import { PRIORITY_STYLES } from './constants'
import { initialEntries } from './data'

export function ContextoFeature() {
  const [entries, setEntries] = useState<PedidoEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntries(initialEntries)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <section className="mb-5 rounded-3xl border border-[var(--app-border)] bg-[#161b22] p-5 text-[var(--app-text)]">
        Loading Pedido...
      </section>
    )
  }

  return (
    <section className="mb-5 rounded-3xl border border-[var(--app-border)] bg-[#161b22] p-5 text-[var(--app-text)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[22px] font-bold text-[var(--app-text)]">Pedido Queue</h2>
        <span className="rounded-full bg-[var(--app-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--app-accent)]">
          {entries.length} active
        </span>
      </div>
      <div className="grid gap-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-start justify-between gap-3 rounded-[14px] border border-[var(--app-border)] bg-[#0d1117] p-3.5"
          >
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[var(--app-text)]">{entry.title}</div>
              <div className="mt-1 text-[13px] text-[var(--app-text)]/60">{entry.summary}</div>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${PRIORITY_STYLES[entry.priority]}`}>
              {entry.priority}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
