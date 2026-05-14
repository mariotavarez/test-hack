import type { AppLayoutProps } from './types'
import { Sidebar } from '../Sidebar/Sidebar'
import { Header } from '../Header/Header'

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[var(--app-bg)] text-[var(--app-text)]">
      <Sidebar />
      <div className="flex flex-1 min-w-0 flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
