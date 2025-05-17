import User from '../types/User';

interface UserListItemProps {
  user: User;
  setSelectedUser: (user: User) => void;
  deleteUser: (id: string) => void;
  selectedUserId?: string;
}

export default function UserListItem({
  user,
  setSelectedUser,
  deleteUser,
  selectedUserId,
}: UserListItemProps) {
  const isSelected = selectedUserId === user.id;
  
  return (
    <li>
      <button 
        style={isSelected ? { fontWeight: 600, borderColor: '#0000aa' } : undefined}
        disabled={isSelected}
        onClick={() => setSelectedUser(user)}
      >
        {user.name}
      </button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </li>
  );
}
