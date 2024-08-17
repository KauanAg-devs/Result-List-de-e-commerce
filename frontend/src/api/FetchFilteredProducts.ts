export async function fetchFilteredProducts(pages: number, limit: number){
  const response = await fetch(`http://localhost:3000/product?pages=${pages}&limit=${limit}`)  
  const data = await response.json()
  return data
}

