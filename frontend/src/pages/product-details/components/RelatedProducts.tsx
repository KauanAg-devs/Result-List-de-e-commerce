import { useEffect, useState } from "react";
import Product, { ProductType } from "../../shop/components/Main/Product";
import { ProductDetailsType } from "./Main";
import { getAccessTokenFromCookies } from "../../../utils/getAcessTokenFromCookies";

type RelatedProducts = { 
  product: ProductType;
  productDetails: ProductDetailsType;
}

export function RelatedProducts({ tags }: { tags?: string }): JSX.Element {
  const [relatedProducts, setRelatedProducts] = useState<RelatedProducts[] | null>(null);
  const [skip, setSkip] = useState(0);

  const getRelatedProducts = async (tags: string, skip: number = 0) => {
    try {
      const accessToken = getAccessTokenFromCookies();
      const response = await fetch(`http://localhost:3000/product/getProductsByTags/${tags}?skip=${skip}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
      if (!response.ok) throw new Error('Failed to fetch products');
      return await response.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    getRelatedProducts(tags || '', skip)
      .then(res => {
        setRelatedProducts(prevProducts => {
          if (prevProducts) {
            const existingProductIds = new Set(prevProducts.map(p => p.product.id));
            const newProducts = res.filter((p: ProductType) => !existingProductIds.has(p.id));
            return [...prevProducts, ...newProducts.map((product: ProductType) => ({ product }))];
          }
          return res.map((product: ProductType) => ({ product }));
        });
      })
      .catch(err => {
        console.error(err);
      });
  }, [tags, skip]);
    
  const showProducts = relatedProducts?.map((productDetails, index) => (
    <Product
      sku={productDetails.product.sku}
      key={index}
      price={productDetails.product.price}
      image={productDetails.product.image}
      name={productDetails.product.name}
      title={productDetails.product.title}
      discount={productDetails.product.discount}
    />
  ));

  return (
    <section className="container flex flex-col items-center w-full">
      <h2 className="text-2xl text-center mt-12 mb-8">Related Products</h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {showProducts}
      </div>
      <button onClick={() => setSkip(v => v + 4)} className="mt-4 py-2 px-16 text-[#b88e2f] border-2 border-[#b88e2f] rounded">
        Show More
      </button>
    </section>
  );
}
