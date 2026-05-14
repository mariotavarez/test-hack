import { useState, type FormEvent } from 'react'
import type { PedidoFormValues, PedidoFormProps } from './types'

export function PedidoForm({ onSubmit, initial }: PedidoFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [isSaving, setIsSaving] = useState(false)
  const canSubmit = title.trim().length > 0

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!canSubmit) return

    setIsSaving(true)
    setTimeout(() => {
      onSubmit({ title: title.trim(), description: description.trim() })
      setTitle('')
      setDescription('')
      setIsSaving(false)
    }, 300)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
      <div className="grid gap-1.5">
        <label htmlFor="pedido-title" className="text-[13px] font-medium text-[var(--app-text)]">
          Pedido title
        </label>
        <input
          id="pedido-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter pedido title"
          className="rounded-[14px] border border-[var(--app-border)] bg-[#0d1117] px-3.5 py-2.5 text-sm text-[var(--app-text)] outline-none"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="pedido-description" className="text-[13px] font-medium text-[var(--app-text)]">
          Description
        </label>
        <textarea
          id="pedido-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe this pedido..."
          rows={3}
          className="rounded-[14px] border border-[var(--app-border)] bg-[#0d1117] px-3.5 py-2.5 text-sm text-[var(--app-text)] outline-none resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={isSaving || !canSubmit}
        className={`rounded-full border-none py-3 px-5 text-sm font-semibold transition-opacity ${
          canSubmit
            ? 'bg-[var(--app-accent)] text-[#0b0d10] cursor-pointer'
            : 'bg-[var(--app-border)] text-[var(--app-text)] cursor-not-allowed'
        } ${isSaving ? 'opacity-70' : ''}`}
      >
        {isSaving ? 'Saving...' : 'Save Pedido'}
      </button>
    </form>
  )
}
