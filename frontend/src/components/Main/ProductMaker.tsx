import React from 'react';
import productTest from './ProductTest';
import Product, { ProductType } from './Product';

type ProductMakerProps = {
  filterValue: number; 
  currentSection: number;
};

const ProductMaker: React.FC<ProductMakerProps> = ({ filterValue, currentSection }) => {
  const productsValues: ProductType[] = [...productTest];
  const startIndex = (currentSection - 1) * filterValue;
  const endIndex = startIndex + filterValue;

  const filteredProducts = productsValues.slice(startIndex, endIndex);

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
