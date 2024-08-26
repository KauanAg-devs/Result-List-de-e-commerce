export const getAccessTokenFromCookies = () => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    const accessTokenCookie = cookies.find(cookie => cookie.startsWith('accessToken='));
    return accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
  };