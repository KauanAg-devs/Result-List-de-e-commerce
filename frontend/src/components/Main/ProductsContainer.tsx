import React from 'react';
import ProductMaker from './ProductMaker';
import { ProductType } from './Product';

type ProductsContainerProps = {
  filterValue: number; 
  currentSection: number;
  products: ProductType[];
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({ filterValue, currentSection, products }) => {
  return (
    <div id='products-container'>
      <div id='products'>
        <ProductMaker filterValue={filterValue} currentSection={currentSection} products={products} />
      </div>
    </div>
  );
};

export default ProductsContainer;
