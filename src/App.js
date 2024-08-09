import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './components/pages/LoginPage';
import UsersPage from './components/pages/UsersPage';
import NavBar from './components/molecules/NavBar/NavBar';

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate replace to="/users" /> : <LoginPage />
          }
        />
        <Route
          path="/users"
          element={
            isLoggedIn ? <UsersPage /> : <Navigate replace to="/login" />
          }
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
