import PropTypes from 'prop-types';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { deleteUser as delUser, fetchUsers } from '../services/userService';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUsers = async ({ showLoading = true } = {}) => {
    try {
      const userData = await fetchUsers();
      // const userData = [
      //   { id: '1', name: 'tat', email: 'tat@mail.com' },
      //   { id: '2', name: 'kim', email: 'kim@gmail.com' },
      // ];
      setUsers(userData);
      showLoading && setIsLoading(false);
    } catch (error) {
      setError(error.message);
      showLoading && setIsLoading(false);
    }
  };

  const deleteUser = async (id, calback = () => {}) => {
    try {
      await delUser(id);
      loadUsers({ showLoading: false });
      toast.success('Delete user success!');
      calback?.();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const value = {
    users,
    isLoading,
    error,
    setUsers,
    loadUsers,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
