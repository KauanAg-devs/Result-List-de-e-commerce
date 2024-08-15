export const refreshToken = async (): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:3000/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      });
  
      if (response.ok)return true;
      return false;
    } catch (error) {
      console.error('Failed to refresh token:', error);
      return false;
    }
  };
  