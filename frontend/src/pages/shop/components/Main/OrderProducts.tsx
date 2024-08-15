import React, { useState } from 'react';
import { ProductType } from './Product';
import filterImage from '../../../../images/Group 57.svg';
import verticalLine from '../../../../images/Line 5.svg'; 

type OrderFilterProps = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function OrderFilter({ products, setProducts }: OrderFilterProps) {
  const [showFilterButtons, setShowFilterButtons] = useState<boolean>(false);

  function productsByPrices() {
    const sortedProducts = [...products].sort((a, b) => parseInt(b.price.replace(/\./g, '')) - parseInt(a.price.replace(/\./g, '')));
    console.log(sortedProducts[2].price + 3);
        
    setProducts(sortedProducts);
  }
  
  function productsByAlphabet() {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  }

  function shouldShowFilterButtons() {
    setShowFilterButtons(prevShowFilter => !prevShowFilter);
  }

  const OrderFilterButtons = (
    <div className="flex flex-col justify-around items-center w-[1/2] h-[6vmax]">
      <button 
        className="w-[7vmax] h-[45%] text-[0.89vmax] font-bold bg-[#f9f1e7] text-[#3A3A3A] rounded-[10px] mx-[30px] mb-2"
        onClick={productsByPrices}
      >
        Price Order
      </button>
      <button 
        className="w-[7vmax] h-[45%] text-[0.89vmax] font-bold bg-[#f9f1e7] text-[#3A3A3A] rounded-[10px] mx-[30px]"
        onClick={productsByAlphabet}
      >
        Alphabetic Order
      </button>
    </div>
  );

  return (
    <div className="relative flex items-center justify-end w-[30%] left-[0%]">
      {showFilterButtons && OrderFilterButtons}
      <div className='w-1/2 flex items-center justify-evenly '>
      <img 
        src={filterImage} 
        alt="Filter" 
        className="w-[5vmax] cursor-pointer" 
        onClick={shouldShowFilterButtons} 
      />

      <img 
        src={verticalLine} 
        alt="Vertical Line" 
        className="w-[0.15vmax] mx-[3%]"
      />
      <h1 className="text-[1.1vmax] font-normal text-black whitespace-nowrap">
        Showing 1-{products.length} files
      </h1>
      </div>
    </div>
  );
}

export default OrderFilter;
