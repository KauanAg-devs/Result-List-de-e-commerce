export const JwtService = {
    async fetchStatus(): Promise<Response> {
        return fetch('http://localhost:3000/auth/status', { credentials: 'include' });
    },

    async refreshToken(): Promise<boolean> {
        try {
            const response = await fetch('http://localhost:3000/auth/refresh', {
                method: 'POST',
                credentials: 'include',
            });
            return response.ok;
        } catch (error) {
            console.error('Failed to refresh token:', error);
            return false;
        }
    },
};
