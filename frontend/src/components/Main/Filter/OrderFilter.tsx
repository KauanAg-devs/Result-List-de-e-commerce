import React, { useState } from 'react';
import { ProductType } from '../Product/Product';
import filterImage from '../../../images/Group 57.svg';
import verticalLine from '../../../images/Line 5.svg'; 

type OrderFilterProps = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function OrderFilter({ products, setProducts }: OrderFilterProps) {
  const [showFilterButtons, setShowFilterButtons] = useState<boolean>(false);

  function productsByPrices() {
    const sortedProducts = [...products].sort((a, b) => parseInt(b.price) - parseInt(a.price));
    setProducts(sortedProducts);
  }
  
  function productsByAlphabet() {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  }

  function shouldShowFilterButtons() {
    setShowFilterButtons(prevShowFilter => !prevShowFilter);
  };

  const OrderFilterButtons =(
     <div id="order-filter">
      <button onClick={productsByPrices}>
        Price Order
      </button>
     
      <button onClick={productsByAlphabet}>
        Alphabetic Order
      </button>
   </div>
  )

  return (
    <div id='show-files'>
    <img id='filter-img' src={filterImage} alt="" onClick={shouldShowFilterButtons} />
    {showFilterButtons && OrderFilterButtons}
    <img id='vertical-line' src={verticalLine} alt="" />
    <h1>Showing 1-{products.length} files</h1>
  </div>
  );
};

export default OrderFilter;
