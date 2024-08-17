import { ProductType } from "../pages/shop/components/Main/Product";

export async function fetchFilteredProducts(numberOfProducts: number){
  const response = await fetch(`http://localhost:3000/product?limit=${numberOfProducts}&pages=${1}&filter=`)  
  const data = await response.json()
  console.log(typeof data.product);
  return data as ProductType[]
}

