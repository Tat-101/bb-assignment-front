import { useAuth } from '../../../context/AuthContext';

const NavBar = () => {
  const { username, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-lg">Welcome, {username}!</span>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
