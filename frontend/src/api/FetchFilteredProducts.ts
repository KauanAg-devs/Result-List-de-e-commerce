import { ProductType } from "../pages/shop/components/Main/Product";

export async function fetchFilteredProducts(numberOfProducts: number){
  const response = await fetch(`http://localhost:3000/products?numberOfProducts=${encodeURIComponent(numberOfProducts)}`)  
  const data = await response.json()
  console.log(data);
  return data as ProductType[]
}

