interface UserListViewProps {
  users: Array<{ id: string; name: string; role: string }>
  isLoading: boolean
}

export function UserListView({ users, isLoading }: UserListViewProps) {
  if (isLoading) return <div>Loading users...</div>

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <span>{user.role}</span>
        </li>
      ))}
    </ul>
  )
}
