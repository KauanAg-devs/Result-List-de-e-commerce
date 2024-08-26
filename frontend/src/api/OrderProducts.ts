import { ProductType } from "../pages/shop/components/Main/Product";

const getAccessTokenFromCookies = () => {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  const accessTokenCookie = cookies.find(cookie => cookie.startsWith('accessToken='));
  return accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
};

export async function fetchFilteredProducts(): Promise<ProductType[]> {
  try {
    const accessToken = getAccessTokenFromCookies();  

    if (!accessToken) {
      console.error('Access token not found');
      return [];
    }

    const response = await fetch(`http://localhost:3000/product`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}
