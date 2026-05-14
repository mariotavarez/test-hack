import { useEffect, useState } from 'react'
import { UserListView } from '../UserListView/UserListView'

export function UserListContainer() {
  const [users, setUsers] = useState<Array<{ id: string; name: string; role: string }>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers([
        { id: '1', name: 'Alex Kim', role: 'Engineer' },
        { id: '2', name: 'Sam Patel', role: 'Designer' },
      ])
      setIsLoading(false)
    }, 350)

    return () => clearTimeout(timer)
  }, [])

  return <UserListView users={users} isLoading={isLoading} />
}
