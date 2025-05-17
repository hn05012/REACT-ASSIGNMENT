import { useCallback, useState } from 'react'
import UserForm from './UserForm';
import UserList from './UserList';
import User from '../types/User';
import '../App.css'

const INITIAL_USERS = [
  { id: crypto.randomUUID(), name: 'Frodo Baggins' },
  { id: crypto.randomUUID(), name: 'Samwise Gamgee' },
  { id: crypto.randomUUID(), name: 'Aragorn' },
  { id: crypto.randomUUID(), name: 'Legolas Greenleaf' },
  { id: crypto.randomUUID(), name: 'Gimli' },
  { id: crypto.randomUUID(), name: 'Gandalf the Grey' },
  { id: crypto.randomUUID(), name: 'Boromir' },
  { id: crypto.randomUUID(), name: 'Galadriel' },
  { id: crypto.randomUUID(), name: 'Éowyn' },
  { id: crypto.randomUUID(), name: 'Sauron' },
];

export default function App() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const addUser = useCallback((user: User) => {
    setUsers(prevUsers => [...prevUsers, user]);
    
  }, [setUsers]);

  return (
    <div>
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UserList 
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        setUsers={setUsers}
      />
    </div>
  );
}