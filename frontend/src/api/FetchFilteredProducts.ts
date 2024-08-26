export async function fetchFilteredProducts(
  pages: number,
  limit: number,
  orderBy: 'price' | 'discount' | 'name' = 'price',
  order: 'asc' | 'desc' = 'asc',
  selectedCategory: number | null
) {  
  const url = `http://localhost:3000/product?pages=${pages}&limit=${limit}&orderBy=${orderBy}&order=${order}&categoryId=${selectedCategory ?? ''}`;

  const getAccessTokenFromCookies = () => {
    const cookieString = document.cookie;    
    const cookies = cookieString.split('; ');
    const accessTokenCookie = cookies.find(cookie => cookie.startsWith('accessToken='));
    return accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
  };

  try {
    const accessToken = getAccessTokenFromCookies(); 

    if (!accessToken) {
      console.error('Access token not found');
      return null;
    }

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`  
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }        
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}
