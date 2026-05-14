interface SurfaceCardProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function SurfaceCard({ title, description, children }: SurfaceCardProps) {
  return (
    <section className="max-w-[320px] rounded-[22px] border border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)] p-4">
      <h3 className="mb-2">{title}</h3>
      {description ? <p className={children ? 'mb-3 opacity-75' : 'mb-0 opacity-75'}>{description}</p> : null}
      {children}
    </section>
  )
}
