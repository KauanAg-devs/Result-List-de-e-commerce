export async function fetchFilteredProducts(
  pages: number,
  limit: number,
  orderBy: 'price' | 'discount' | 'name' = 'price',
  order: 'asc' | 'desc' = 'asc'
) {
  const url = `http://localhost:3000/product?pages=${pages}&limit=${limit}&orderBy=${orderBy}&order=${order}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }        
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}
