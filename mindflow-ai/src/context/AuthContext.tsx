import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null; // Define User type later or use 'any' for now
  login: (credentials: any) => Promise<void>; // Placeholder
  logout: () => void;
  register: (details: any) => Promise<void>; // Placeholder
}

// Define a simple User type (can be expanded later)
interface User {
  id: string;
  email: string;
  name?: string;
}

// Create the context with a default undefined value to prevent direct usage without provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  // Placeholder login function
  const login = async (credentials: any) => {
    console.log('AuthContext: login attempt with', credentials);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({ id: '1', email: credentials.email || 'test@example.com', name: 'Test User' });
    setIsAuthenticated(true);
    console.log('AuthContext: login successful');
  };

  // Logout function
  const logout = () => {
    console.log('AuthContext: logout');
    setUser(null);
    setIsAuthenticated(false);
  };

  // Placeholder register function
  const register = async (details: any) => {
    console.log('AuthContext: register attempt with', details);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    // For now, directly log in the user after registration
    setUser({ id: '2', email: details.email, name: details.name || 'New User' });
    setIsAuthenticated(true);
    console.log('AuthContext: registration successful, user logged in');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
