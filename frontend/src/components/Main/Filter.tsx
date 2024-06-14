import React, { useState } from 'react';
import OrderFilter from './OrderFilter';
import { ProductType } from './Product';
import filterImage from '../../images/Group 57.svg';
import verticalLine from '../../images/Line 5.svg'; 

type FilterProps = {
  setFilterValue: React.Dispatch<React.SetStateAction<number>>;
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const Filter: React.FC<FilterProps> = ({ setFilterValue, products, setProducts }) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

  const applyFilter = () => {
    if (!isNaN(parseInt(inputValue))) {
      setFilterValue(parseInt(inputValue));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      applyFilter();
    }
  };
  
  const shouldFilter = () => {
    setShowFilter(prevShowFilter => !prevShowFilter);
  };

  return (
    <div id="filter">
    <div id='show-files'>
      <img id='filter-img' src={filterImage} alt="" onClick={shouldFilter} />
      {showFilter && <OrderFilter products={products} setProducts={setProducts} />}
      <img id='vertical-line' src={verticalLine} alt="" />
      <h1>Showing 1-{products.length} files</h1>
    </div>
    <div id='filter-search'>
        <h1>Show</h1>
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Filter;