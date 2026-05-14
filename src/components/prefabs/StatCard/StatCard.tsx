interface StatCardProps {
  label: string
  value: string
  detail?: string
}

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="max-w-[280px] rounded-[20px] border border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] p-4">
      <div className="text-xs uppercase tracking-[0.08em] opacity-70">{label}</div>
      <div className="mt-2.5 text-[30px] font-bold">{value}</div>
      {detail ? <div className="mt-2 text-[13px] opacity-75">{detail}</div> : null}
    </div>
  )
}
