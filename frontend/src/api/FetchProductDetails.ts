import { ProductDetailsType } from "../pages/product-details/components/Main";

const fetchProductDetails = async (sku: string): Promise<ProductDetailsType | null> => {
    try {            
    const response = await fetch(`http://localhost:3000/product/details/${sku}`);        
    if (!response.ok) return null;
    return await response.json();
    } catch (error) {
    console.error('Failed to fetch product details:', error);
    return null
    }
};

export default fetchProductDetails