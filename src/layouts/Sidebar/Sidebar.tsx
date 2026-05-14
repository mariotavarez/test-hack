import { useState } from 'react'
import { NAV_ITEMS } from './constants'

export function Sidebar() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0])
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={'flex flex-col gap-1 overflow-hidden border-r border-[var(--app-border)] bg-[#0d1117] p-4 transition-[width] duration-200 text-[var(--app-text)] ' + (collapsed ? 'w-16' : 'w-60')}
    >
      <button
        type="button"
        onClick={() => setCollapsed((v) => !v)}
        className="self-end bg-transparent border-none cursor-pointer px-2 py-1 mb-3 text-base text-[var(--app-text)]/60"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? '←' : '→'}
      </button>
      {NAV_ITEMS.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setActive(item)}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-left whitespace-nowrap border-none cursor-pointer ${
            active === item
              ? 'bg-[var(--app-accent)]/10 text-[var(--app-accent)] font-semibold'
              : 'bg-transparent text-[var(--app-text)]'
          }`}
        >
          <span className={`inline-flex w-5 h-5 rounded-md items-center justify-center text-[10px] shrink-0 ${
            active === item ? 'bg-[var(--app-accent)]/20' : 'bg-[var(--app-border)]/25'
          }`}>
            {item.charAt(0)}
          </span>
          {!collapsed ? item : null}
        </button>
      ))}
    </aside>
  )
}
