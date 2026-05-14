import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export function ResetPasswordPage() {
  const { resetPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12 text-[var(--app-text)]">
      <h1 className="text-3xl font-semibold">Reset your password</h1>
      <form
        className="mt-8 grid gap-4 rounded-[24px] border border-[var(--app-border)] bg-[var(--app-surface)] p-6"
        onSubmit={async (event) => {
          event.preventDefault()
          const result = await resetPassword(email)
          setMessage(result.error ?? 'Reset instructions sent. Check your inbox.')
        }}
      >
        <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="rounded-[16px] border border-[var(--app-border)] bg-transparent px-4 py-3" />
        {message ? <div className="text-sm text-[var(--app-text)]/70">{message}</div> : null}
        <button type="submit" className="rounded-full bg-[var(--app-accent)] px-4 py-3 font-semibold text-white">Send reset link</button>
      </form>
      <div className="mt-4 text-sm">
        <Link to="/login">Back to sign in</Link>
      </div>
    </main>
  )
}
