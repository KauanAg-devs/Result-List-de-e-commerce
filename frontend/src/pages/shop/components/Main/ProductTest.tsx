import { ProductType } from './Product';

export default async function getProducts() {
    const response = await fetch('http://localhost:3000/products', {
        method: 'get',
    });    
    const products: ProductType[] = await response.json();
    return products;
}


