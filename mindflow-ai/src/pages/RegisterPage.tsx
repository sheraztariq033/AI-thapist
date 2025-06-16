import React from 'react';
import RegisterForm from '../components/auth/RegisterForm'; // Adjust path

const RegisterPage: React.FC = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="mt-2 text-gray-600">Create your MindFlow AI account.</p>
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
