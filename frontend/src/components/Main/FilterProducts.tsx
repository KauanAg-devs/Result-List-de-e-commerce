import React, { useState } from 'react';
import OrderFilter from './OrderProducts';
import { ProductType } from './Product';

type FilterProps = {
  setFilterValue: React.Dispatch<React.SetStateAction<number>>;
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function FilterProducts({ setFilterValue, products, setProducts }: FilterProps) {
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
    <div className="w-full h-[8vmax] bg-[#f9f1e7] flex justify-center items-center box-border">
      <OrderFilter 
        products={products} 
        setProducts={setProducts}
      />
      <div className="flex items-center justify-end w-[70%] relative right-[5%]">
        <h1 className="text-[1.2vmax] font-normal mr-[1.5%]">Show</h1>
        <input
          type="search"
          className="border-none outline-none w-[2.5vmax] h-[2.5vmax] text-[1.1vmax] text-center bg-white text-[#9f9f9f] placeholder-[#9f9f9f]"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default FilterProducts;
