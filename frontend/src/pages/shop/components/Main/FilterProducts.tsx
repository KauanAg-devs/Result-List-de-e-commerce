import { useState } from 'react';
import { ProductType } from './Product';
import Select, { SingleValue } from 'react-select';
import FilterProductsByCategory from './FilterByCategory';

export type OptionType = {
  value: {
    asc?: 'asc';
    desc?: 'desc';
    price?: 'price';
    discount?: 'discount';
    name?: 'name';
  };
  label: string;
};

type FilterProps = {
  setFilterValue: React.Dispatch<React.SetStateAction<number>>;
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setOrderBy: React.Dispatch<React.SetStateAction<'price' | 'discount' | 'name'>>;
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

function FilterProducts({ setOrderBy, setOrder, setFilterValue, products, setSelectedCategory }: FilterProps) {
  const [inputValue, setInputValue] = useState('');

  const applyFilter = (value: string) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setFilterValue(parsedValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    applyFilter(newValue);
  };

  const createOption = (order: 'asc' | 'desc', orderBy: 'price' | 'discount' | 'name') => ({
    value: { [order]: order, [orderBy]: orderBy },
    label: `${orderBy.charAt(0).toUpperCase() + orderBy.slice(1)}: ${order === 'asc' ? 'Low to High' : 'High to Low'}`
  });

  const options: OptionType[] = [
    createOption('asc', 'price'),
    createOption('desc', 'price'),
    createOption('asc', 'discount'),
    createOption('desc', 'discount'),
    createOption('asc', 'name'),
    createOption('desc', 'name'),
  ];

  const handleSelectChange = (option: SingleValue<OptionType>) => {
    if (option) {
      const { value } = option;
      setOrderBy(value.price ? 'price' : value.discount ? 'discount' : 'name');
      setOrder(value.asc ? 'asc' : 'desc');
    }
  };

  return (
    <div className="w-full h-auto bg-[#f9f1e7] flex justify-between items-center px-4 py-4 md:px-6 md:py-6 md:space-y-0 md:space-x-4">
      <FilterProductsByCategory
        productsCount={products.length}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex md:flex-row justify-center items-center md:space-y-0 md:space-x-4 max-w-3xl">
        <div className="flex items-center space-x-2 md:space-x-4">
          <p className="text-sm md:text-lg lg:text-lg font-normal">Show</p>
          <input
            type="text"
            value={inputValue}
            className="rounded-sm border-none outline-none w-7 h-7 max-w-[90px] text-sm md:text-base text-center bg-white text-[#9f9f9f] placeholder-[#9f9f9f] md:w-10 md:h-10"
            onChange={handleInputChange}
          />
        </div>

        <div className="ml-2 flex items-center space-x-2 md:space-x-4">
          <p className="text-sm md:text-lg lg:text-lg font-normal whitespace-nowrap">Sort By</p>

          <Select
            options={options}
            onChange={handleSelectChange}
            className=" md:w-44 lg:w-44 max-w-[150px] md:max-w-[200px]"
            classNamePrefix="custom-select"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: 'white',
                borderRadius: '4px',
                boxShadow: 'none',
                border: 'none',
              }),
              menu: (provided) => ({
                ...provided,
                borderRadius: '4px',
              }),
              indicatorSeparator: () => ({
                display: 'none',
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                display: 'none',
              }),
              option: (provided, state) => ({
                ...provided,
                whiteSpace: 'nowrap',
                backgroundColor: state.isSelected ? '#f9f1e7' : 'white',
                color: '#9f9f9f',
                '&:hover': {
                  backgroundColor: 'white',
                },
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
