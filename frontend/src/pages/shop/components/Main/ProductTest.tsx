import { ProductType } from './Product';

const response = await fetch('http://localhost:3000/products', {
    method: 'get',
})
const users: ProductType[] = await response.json()

export default users;
