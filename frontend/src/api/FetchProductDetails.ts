import { ProductDetailsType } from "../pages/product-details/components/Main";
import { getAccessTokenFromCookies } from "../utils/getAcessTokenFromCookies";



const fetchProductDetails = async (sku: string): Promise<ProductDetailsType | null> => {
  try {
    const accessToken = getAccessTokenFromCookies();
    
    if (!accessToken) {
      console.error('Access token not found');
      return null;
    }

    const response = await fetch(`http://localhost:3000/product/details/${sku}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch product details:', error);
    return null;
  }
};

export default fetchProductDetails;
