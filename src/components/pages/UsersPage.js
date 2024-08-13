import React from 'react';
import FormComponent from '../organisms/Form/Form';
import List from '../organisms/List/List';
import { UserProvider } from '../../context/UserContext';

const UsersPage = () => {
  return (
    <UserProvider>
      <div className="max-w-md mx-auto mt-10">
        <FormComponent />
      </div>
      <div className="my-4">
        <List />
      </div>
    </UserProvider>
  );
};

export default UsersPage;
