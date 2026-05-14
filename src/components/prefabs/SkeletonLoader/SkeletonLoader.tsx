export function SkeletonLoader() {
  return (
    <div className="max-w-[320px] rounded-[20px] border border-[var(--app-border)] bg-[var(--app-surface)] p-4">
      <div className="mb-2.5 h-3.5 w-[44%] rounded-full bg-[var(--app-border)]" />
      <div className="mb-2 h-3 w-full rounded-full bg-[var(--app-border)] opacity-70" />
      <div className="mb-3 h-3 w-[84%] rounded-full bg-[var(--app-border)] opacity-70" />
      <div className="h-[72px] rounded-2xl bg-[var(--app-border)] opacity-55" />
    </div>
  )
}
