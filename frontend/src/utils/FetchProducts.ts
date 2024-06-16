import { ProductType } from "../components/Main/Product/Product";

export const fetchProducts = async (page: number, pageSize: number): Promise<{ products: ProductType[], total: number }> => {
  const response = await fetch(`http://10.0.0.109:3000/product?page=${page}&pageSize=${pageSize}`);  
  const data = await response.json();
  console.log(data);
  return data;
}; 
