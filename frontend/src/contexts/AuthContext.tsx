  import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

  const AuthContext = createContext<{ 
      isAuthenticated: boolean; 
      isLoading: boolean;
      setIsAuthenticated: Dispatch<SetStateAction<boolean>> 
  }>({ 
      isAuthenticated: false, 
      isLoading: true, 
      setIsAuthenticated: () => {} 
  });

  export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const refreshToken = async (): Promise<boolean> => {
      try {
        const response = await fetch('http://localhost:3000/auth/refresh', {
          method: 'POST',
          credentials: 'include',
        });

        if (response.ok) return true;
        return false; 
      } catch (error) {
        console.error('Failed to refresh token:', error);
        return false;
      }
    };

    const checkAuthentication = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/status', { credentials: 'include' });
        console.log(response.status);
        
        if (response.status === 401) {
          const refreshed = await refreshToken();
          console.log(response.status);
          
          if (refreshed) {
            const retryResponse = await fetch('http://localhost:3000/auth/status', { credentials: 'include' });
            const data = await retryResponse.json();            
            return setIsAuthenticated(data.isAuthenticated);
          } 
            setIsAuthenticated(false);
          
        } else {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      checkAuthentication();
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
