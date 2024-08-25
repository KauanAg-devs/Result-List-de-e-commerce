import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProductDetails from "../../../api/FetchProductDetails";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { ProductType } from "../../shop/components/Main/Product";
import { ProductsImages } from "./ProductsImages";
import { ProductInfo } from "./ProductInfo";
import { RelatedProducts } from "./RelatedProducts";
import {ShoppingCart} from "../../../components/ShoppingCart/ShoppingCart";

export type ProductDetailsType = {
  categoryId: string;
  description: string;
  id: string;
  sku: string;
  updatedAt: string;
  createdAt: string;
  tags: { name: string }[];
};

export function Main(): JSX.Element {
  const { sku } = useParams<{ sku: string }>();
  const [productDetails, setProductDetails] = useState<ProductDetailsType | null>(null);
  const [productsWithSameCategory, setProductsWithSameCategory] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false);

  const product = useSelector((state: RootState) => state.product);
  
  const getProductsByCategory = async (categoryId: string) => {
    if (!categoryId) return [];
    try {
      const response = await fetch(`http://localhost:3000/product/getProductsByCategory/${encodeURIComponent(categoryId)}`);
      if (!response.ok) throw new Error('Failed to fetch products');
      return await response.json();
    } catch (err) {
      setError((err as Error).message);
      return [];
    }
  };

  useEffect(() => {
    if (sku) {
      fetchProductDetails(sku)
        .then(res => {
          if (!res) return;          
          setProductDetails(res);
          return getProductsByCategory(res.categoryId);
        })
        .then(products => {
          setProductsWithSameCategory(products);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [sku]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="py-8 container min-h-[90vh] w-full">
      <div className="py-8 flex container h-auto w-full">
        <ProductsImages productsWithSameCategory={productsWithSameCategory} product={product} />
      
        {productDetails && (
          <ProductInfo 
            setShowShoppingCart={setShowShoppingCart}
            product={product} 
            productDetails={productDetails} 
          />
        )}
      </div>

      {showShoppingCart && (<ShoppingCart 
       setShowShoppingCart={setShowShoppingCart}
      />)}

      <RelatedProducts
        tags={productDetails?.tags.map(tag => tag.name).join(',')}
      />
    </main>
  );
}
