import { ProductType } from "../pages/shop/components/Main/Product";

export async function fetchFilteredProducts(
  order: 'asc' | 'desc',
  sort: string = 'price',
  limit: number = 16,
  page: number = 1,
): Promise<ProductType[]> {
  try {
    const response = await fetch(`http://localhost:3000/products/search/filter?order=${order}&sort=${sort}&limit=${limit}&page=${page}`);
    
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