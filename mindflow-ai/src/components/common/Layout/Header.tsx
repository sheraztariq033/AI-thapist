import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MindFlow AI</Link> {/* App title as Link to home */}
        <nav>
          <Link to="/" className="px-3 hover:text-blue-200">Home</Link>
          <Link to="/dashboard" className="px-3 hover:text-blue-200">Dashboard</Link> {/* Example Link */}
          {/* Auth links will be conditional later */}
          <Link to="/login" className="px-3 hover:text-blue-200">Login</Link>
          <Link to="/register" className="px-3 hover:text-blue-200">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
