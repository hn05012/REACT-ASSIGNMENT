import { FormEvent, useState } from 'react';
import User from '../types/User';

interface UserFormProps {
  addUser: (user: User) => void;
}

export default function UserForm({
  addUser,
}: UserFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({ id: crypto.randomUUID(), name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}