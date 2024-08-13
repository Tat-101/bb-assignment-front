import PropTypes from 'prop-types';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      const userData = await fetchUsers();
      // const userData = [
      //   { id: '1', name: 'tat', email: 'tat@mail.com' },
      //   { id: '2', name: 'kim', email: 'kim@gmail.com' },
      // ];
      setUsers(userData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
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
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
