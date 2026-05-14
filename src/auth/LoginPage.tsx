import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export function LoginPage() {
  const { signIn, user } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (user) return <Navigate to="/app" replace />

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-12 text-[var(--app-text)]">
      <h1 className="text-3xl font-semibold">Welcome back</h1>
      <p className="mt-3 text-sm text-[var(--app-text)]/70">Sign in with your Supabase email and password credentials.</p>
      <form
        className="mt-8 grid gap-4 rounded-[24px] border border-[var(--app-border)] bg-[var(--app-surface)] p-6"
        onSubmit={async (event) => {
          event.preventDefault()
          setIsSubmitting(true)
          const result = await signIn(email, password)
          setError(result.error)
          setIsSubmitting(false)
        }}
      >
        <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="rounded-[16px] border border-[var(--app-border)] bg-transparent px-4 py-3" />
        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" className="rounded-[16px] border border-[var(--app-border)] bg-transparent px-4 py-3" />
        {error ? <div className="text-sm text-[#e5484d]">{error}</div> : null}
        <button type="submit" disabled={isSubmitting} className="rounded-full bg-[var(--app-accent)] px-4 py-3 font-semibold text-white">
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <Link to="/signup">Create account</Link>
        <Link to="/reset-password">Forgot password?</Link>
      </div>
    </main>
  )
}
