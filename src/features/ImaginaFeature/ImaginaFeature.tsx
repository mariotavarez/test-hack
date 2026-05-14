import { useState, useEffect } from 'react'
import type { PedidoMetric } from './types'
import { initialMetrics } from './data'

export function ImaginaFeature() {
  const [metrics, setMetrics] = useState<PedidoMetric[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics(initialMetrics)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <section className="mb-5 rounded-3xl border border-[var(--app-border)] bg-[#161b22] p-5 text-[var(--app-text)]">
        Loading metrics...
      </section>
    )
  }

  return (
    <section className="mb-5 rounded-3xl border border-[var(--app-border)] bg-[#161b22] p-5 text-[var(--app-text)]">
      <h2 className="mb-4 text-[22px] font-bold text-[var(--app-text)]">
        Pedido Overview
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-[var(--app-border)] bg-[#0d1117] p-4"
          >
            <div className="mb-2 text-xs uppercase tracking-wider text-[var(--app-text)]/60">{m.label}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-[30px] font-bold text-[var(--app-accent)]">{m.value}</span>
              <span className={`text-xs ${
                m.trend === 'up' ? 'text-emerald-500' : m.trend === 'down' ? 'text-red-400' : 'text-[var(--app-text)]/50'
              }`}>
                {m.trend === 'up' ? '↑' : m.trend === 'down' ? '↓' : '→'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
