import '../css/Filter.css'
import React, { useState } from 'react';
import OrderFilter from './OrderFilter';
import { ProductType } from '../Product/Product';

type FilterProps = {
  setFilterValue: React.Dispatch<React.SetStateAction<number>>;
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function Filter({ setFilterValue, products, setProducts }: FilterProps) {
  const [inputValue, setInputValue] = useState('');

  const applyFilter = () => {
    if (isNaN(parseInt(inputValue))) return;
    setFilterValue(parseInt(inputValue));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      applyFilter();
    }
  };

  return (
    <div id="filter">
      <OrderFilter 
       products={products} 
       setProducts={setProducts}
      />
      <div id='filter-search'>
        <h1>Show</h1>
         <input
          type="search"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
         />
      </div>
    </div>
  );
};

export default Filter;