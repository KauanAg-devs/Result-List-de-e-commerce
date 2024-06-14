import React from 'react';
import ProductMaker from './ProductMaker';

type ProductsContainerProps = {
  filterValue: number; 
  currentSection: number;
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({ filterValue, currentSection }) => {
  return (
    <div id='products-container'>
      <div id='products'>
        <ProductMaker filterValue={filterValue} currentSection={currentSection} />
      </div>
    </div>
  );
};

export default ProductsContainer;
