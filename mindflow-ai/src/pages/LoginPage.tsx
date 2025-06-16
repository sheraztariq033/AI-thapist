import React from 'react';
import LoginForm from '../components/auth/LoginForm'; // Adjust path if necessary

const LoginPage: React.FC = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mt-2 text-gray-600">Access your MindFlow AI account.</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
