import { useAuth } from '../../../context/AuthContext';
import React from 'react';
import { Button } from '../../atoms';

const NavBar = () => {
  const { username, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-lg">Welcome, {username}!</span>
        <Button variant="danger" onClick={logout}>
          Log out
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
