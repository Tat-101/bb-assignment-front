import { Loading } from '../../atoms';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useUser } from '../../../context/UserContext';

const List = () => {
  const { users, error, isLoading, deleteUser } = useUser();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
  };

  const confirmDelete = async () => {
    await deleteUser(selectedUser.id, () => {
      setSelectedUser(null);
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  return (
    <>
      <ul className="mt-5 max-w-lg mx-auto bg-white rounded-lg shadow-md">
        {users.map((user) => (
          <li
            key={user.id}
            className="px-6 py-4 border-b border-gray-200 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={() => handleDeleteClick(user)}
              className="text-red-500 hover:text-red-700"
            >
              <MdDelete size={24} /> {/* Heart icon */}
            </button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete {selectedUser.name}?</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedUser(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
