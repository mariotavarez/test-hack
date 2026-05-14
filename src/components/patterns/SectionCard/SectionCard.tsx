import type { ReactNode } from 'react'

interface SectionCardProps {
  header?: ReactNode
  aside?: ReactNode
  footer?: ReactNode
  children: ReactNode
}

export function SectionCard({ header, aside, footer, children }: SectionCardProps) {
  return (
    <section>
      <div>
        <div>{header}</div>
        <div>{aside}</div>
      </div>
      <div>{children}</div>
      {footer ? <div>{footer}</div> : null}
    </section>
  )
}
