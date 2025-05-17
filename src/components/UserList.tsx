import { useEffect, useCallback } from 'react';
import User from '../types/User';
import UserListItem from './UserListItem';

interface UserListProps {
  users: User[];
  selectedUser: User | null;
  setUsers: (users: User[]) => void;
  setSelectedUser: (user: User | null) => void;
}

export default function UserList({
  users,
  selectedUser,
  setUsers,
  setSelectedUser,
}: UserListProps) {
  
  useEffect(() => {
    if (selectedUser) {
      document.title = `User: ${selectedUser.name}`;
    }
  }, [selectedUser]);


  const deleteUser = useCallback((id: string) => {
    setUsers(users.filter(user => user.id !== id));
    if (selectedUser?.id === id) {
      setSelectedUser(null);
    }
  }, [users, selectedUser, setUsers, setSelectedUser]);

  return (
    <div>
      <h2>User List ({users.length})</h2>
      <ul>
        {users.map(user => (
          <UserListItem
            key={user.id}
            user={user}
            selectedUserId={selectedUser?.id}
            setSelectedUser={setSelectedUser}
            deleteUser={deleteUser}
          />
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h3>Selected User</h3>
          <p>Name: {selectedUser.name}</p>
        </div>
      )}
    </div>
  );
}
