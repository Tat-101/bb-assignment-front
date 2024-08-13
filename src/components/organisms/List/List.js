import { Loading } from '../../atoms';
import React from 'react';
import { useUser } from '../../../context/UserContext';

const List = () => {
  const { users, error, isLoading } = useUser();

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
