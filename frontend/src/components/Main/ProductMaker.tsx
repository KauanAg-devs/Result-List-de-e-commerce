import React from 'react';
import { ProductType } from './Product';
import Product from './Product';

type ProductMakerProps = {
  filterValue: number; 
  currentSection: number;
  products: ProductType[];
};

const ProductMaker: React.FC<ProductMakerProps> = ({ filterValue, currentSection, products }) => {
  const startIndex = (currentSection - 1) * filterValue;
  const endIndex = startIndex + filterValue;

  const filteredProducts = products.slice(startIndex, endIndex);

  return (
    <>
      {filteredProducts.map((product, index) => (
        <Product
          key={index}
          price={product.price}
          image={product.image}
          name={product.name}
          title={product.title}
          discount={product.discount}
        />
      ))}
    </>
  );
};

export default ProductMaker;
