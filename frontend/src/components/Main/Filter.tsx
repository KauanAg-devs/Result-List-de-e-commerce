import React, { Dispatch, SetStateAction, useState } from 'react';
import filterImage from '../../images/Group 57.svg';
import verticalLine from '../../images/Line 5.svg';
import productTest from './ProductTest';

type FilterProps = {
  setFilterValue: Dispatch<SetStateAction<number>>;
};

const Filter: React.FC<FilterProps> = ({ setFilterValue }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      applyFilter();
    }
  };

  const applyFilter = () => {
    if (!isNaN(parseInt(inputValue))) {
      setFilterValue(parseInt(inputValue));
    }
  };

  return (
    <div id="filter">
      <div id='show-files'>
        <img id='filter-img' src={filterImage} alt="" />
        <img id='vertical-line' src={verticalLine} alt="" />
        <h1>Showing 1-{(inputValue || '32')} files of {productTest.length} results</h1>
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
