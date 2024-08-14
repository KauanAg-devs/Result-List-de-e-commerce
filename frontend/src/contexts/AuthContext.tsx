import { createContext, useContext, useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';

const AuthContext = createContext<{ 
    isAuthenticated: boolean; 
    isLoading: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>> 
}>({ 
    isAuthenticated: false, 
    isLoading: true, 
    setIsAuthenticated: () => {} 
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/auth/status', { credentials: 'include' })
      .then(response => response.json())
      .then(data => {
        setIsAuthenticated(data.isAuthenticated);
        setIsLoading(false);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
