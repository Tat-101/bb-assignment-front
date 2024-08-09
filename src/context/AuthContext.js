import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';
import { checkAuth } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    if (storedToken && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const login = (token, username) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
