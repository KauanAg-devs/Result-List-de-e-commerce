import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../shop/components/Main/Product";

export function ProductDetails(): JSX.Element {
  const { sku } = useParams<{ sku: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('loading construction');
        
        /*
        const response = await fetch(`/api/products/${sku}`);
        const data = await response.json();
        if (response.ok) {
          setProduct(data);
        } else {
          setProduct(null);
        }
        */
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };

    fetchProduct();
  }, [sku]);

  return (
    <main className="container relative items-center flex flex-col min-h-[90vh] w-full">
      page is being constructed
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
        </div>
      ) : product ? (
      <h1>loading construction</h1>
    ) : (
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-xl font-semibold text-red-500">Product not found</p>
        </div>
      )}
    </main>
  );
}