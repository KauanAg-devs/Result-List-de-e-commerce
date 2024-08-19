import { ProductType } from "../pages/shop/components/Main/Product";

export async function fetchFilteredProducts(): Promise<ProductType[]> {
  try {
    const response = await fetch(`http://localhost:3000/product`);
    
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