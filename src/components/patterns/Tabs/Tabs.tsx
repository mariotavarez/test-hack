import { createContext, useContext, useState, type ReactNode } from 'react'

interface TabsContextValue {
  activeValue: string
  setActiveValue: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('Tabs compound components must be used inside <Tabs.Root>.')
  }

  return context
}

function Root({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [activeValue, setActiveValue] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  )
}

function List({ children }: { children: ReactNode }) {
  return <div role="tablist">{children}</div>
}

function Trigger({ value, children }: { value: string; children: ReactNode }) {
  const { activeValue, setActiveValue } = useTabsContext()

  return (
    <button type="button" role="tab" aria-selected={activeValue === value} onClick={() => setActiveValue(value)}>
      {children}
    </button>
  )
}

function Panel({ value, children }: { value: string; children: ReactNode }) {
  const { activeValue } = useTabsContext()

  if (activeValue !== value) return null

  return <div role="tabpanel">{children}</div>
}

export const Tabs = { Root, List, Trigger, Panel }
