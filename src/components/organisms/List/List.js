import { useState, useEffect } from 'react';
import { fetchUsers } from '../../../services/userService';
import { Loading } from '../../atoms';

const List = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        // TODO: fetchUser
        // const userData = await fetchUsers();
        const userData = [
          { id: '1', name: 'tat', email: 'tat@mail.com' },
          { id: '2', name: 'kim', email: 'kim@gmail.com' },
        ];
        setUsers(userData);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error.message);
        setIsLoading(false); // Also set loading to false on error
      }
    }

    loadUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  return (
    <ul className="mt-5 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {users.map((user) => (
        <li key={user.id} className="px-6 py-4 border-b border-gray-200">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
