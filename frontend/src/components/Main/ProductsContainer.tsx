import React from 'react';
import ProductMaker from './ProductMaker';

type ProductsContainerProps = {
  filterValue: number | object;
};

const ProductsContainer: React.FC<ProductsContainerProps> = ({ filterValue }) => {
  return (
    <div id='products-container'>
      <div id='products'>
        <ProductMaker filterValue={filterValue} />
      </div>
    </div>
  );
};

export default ProductsContainer;
