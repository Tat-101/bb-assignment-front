import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import FormComponent from './components/organisms/Form/Form';
import List from './components/organisms/List/List';

const App = () => {
  return (
    <>
      <ToastContainer />
      <div className="max-w-md mx-auto mt-10">
        <FormComponent />
      </div>
      <div className="my-4">
        <List />
      </div>
    </>
  );
};

export default App;
