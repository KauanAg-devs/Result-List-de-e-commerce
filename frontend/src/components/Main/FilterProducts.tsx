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

  const applyFilter = (value: string) => {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || parsedValue < 1) return;
    setFilterValue(parsedValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    applyFilter(newValue);
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
          type="text"
          value={inputValue} 
          className="border-none outline-none w-[2.5vmax] h-[2.5vmax] text-[1.1vmax] text-center bg-white text-[#9f9f9f] placeholder-[#9f9f9f]"
          onChange={handleInputChange} 
        />
      </div>
    </div>
  );
}

export default FilterProducts;
