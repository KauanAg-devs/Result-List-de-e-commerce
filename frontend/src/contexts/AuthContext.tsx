import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { JwtService } from '../api/JwtService';

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

    const checkJwtAuthentication = async () => {
        try {
            let response = await JwtService.fetchStatus();

            if (response.ok) {
                const data = await response.json();
                setIsAuthenticated(data.isAuthenticated);
                return;
            }

            const refreshed = await JwtService.refreshToken();
            if (!refreshed) {
                setIsAuthenticated(false);
                return;
            }

            response = await JwtService.fetchStatus();
            const data = await response.json();
            setIsAuthenticated(data.isAuthenticated);
        } catch (error) {
            console.error('Error checking authentication:', error);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkJwtAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
