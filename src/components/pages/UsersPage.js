import FormComponent from '../organisms/Form/Form';
import List from '../organisms/List/List';

const UsersPage = () => {
  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <FormComponent />
      </div>
      <div className="my-4">
        <List />
      </div>
    </>
  );
};

export default UsersPage;
