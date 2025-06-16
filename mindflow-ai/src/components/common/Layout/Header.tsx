import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { useAuth } from '../../../context/AuthContext'; // Adjust path if necessary

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // The logout function in AuthContext is currently synchronous.
      // If it were async (e.g., involving an API call), `await` would be appropriate.
      // For now, direct call is fine.
      logout();
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Failed to logout:", error);
      // Handle logout error, maybe display a message to the user
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MindFlow AI</Link>
        <nav>
          <Link to="/" className="px-3 hover:text-blue-200">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="px-3 hover:text-blue-200">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="px-3 hover:text-blue-200 bg-transparent border-none text-white cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 hover:text-blue-200">Login</Link>
              <Link to="/register" className="px-3 hover:text-blue-200">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
