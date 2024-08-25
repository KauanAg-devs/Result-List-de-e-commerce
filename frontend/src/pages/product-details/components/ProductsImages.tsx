import { useState } from "react";
import { ProductType } from "../../shop/components/Main/Product";

type ProductsImagesProps = {
  productsWithSameCategory: ProductType[] | null;
  product: ProductType;
};

export function ProductsImages({ productsWithSameCategory, product }: ProductsImagesProps): JSX.Element {
  const [mainImage, setMainImage] = useState(product.image);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="w-auto flex flex-col md:flex-row">  
      <div className="flex justify-center md:justify-start flex-row md:flex-col mx-4 w-auto h-auto space-x-2 md:space-x-0">
        {productsWithSameCategory?.map(product => (
          <img
            key={product.sku}
            className="object-cover my-1 rounded-md w-6 h-6 md:w-24 md:h-16 lg:h-16 lg:w-16 cursor-pointer" 
            src={product.image}
            alt={product.name}
            onClick={() => handleImageClick(product.image)}
          />
        ))}
      </div>

      <div className="flex justify-center h-auto w-auto">
        {mainImage && (
          <img
            className="relative rounded-md my-4 md:my-0 h-[9rem] w-auto md:h-[19rem] md:w-[19rem] lg:h-[25rem] lg:w-[30rem]"
            src={mainImage}
            alt={product.name}
          />
        )}
      </div>
    </div>
  );
}
