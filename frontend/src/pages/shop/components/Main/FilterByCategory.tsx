import { useState } from 'react';
import filterImage from '../../../../images/Group 57.svg';
import verticalLine from '../../../../images/Line 5.svg'; 

type FilterProductsByCategoryProps = {
  productsCount: number;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>; 
};

function FilterProductsByCategory({ productsCount, setSelectedCategory }: FilterProductsByCategoryProps) {
  const [categories, setCategories] = useState<{ name: string, id: string }[]>([]);
  const [showCategories, setShowCategories] = useState(false);

  const getCategories = async () => {
    const data = await fetch('http://localhost:3000/category/getAllCategories');
    const response = await data.json();
    return response;
  };

  const handleCategoryClick = async (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="flex items-center justify-center md:justify-start w-1/3 md:w-full lg:w-full max-w-6xl p-4 md:p-6">
      <img 
        src={filterImage} 
        alt="Filter" 
        onClick={() => {
          getCategories().then((data) => setCategories(data));
          setShowCategories(!showCategories);
        }}
        className="hidden lg:block md:block md:w-16 lg:w-20 cursor-pointer" 
      />
      <div 
        className={`ml-4 p-4 bg-white rounded-lg shadow-lg w-48 md:w-56 lg:w-64 transform transition-all duration-500 ease-out origin-top ${
          showCategories ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        {categories.length > 0 && showCategories && (
          <>
            <h2 className="text-lg font-semibold mb-2">Categories</h2>
            <ul>
               <li 
                  key={'default'} 
                  className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200"
                  onClick={() => handleCategoryClick('')}
                >
                  {'Default'}
                </li>
              {categories.map((category) => (
                <li 
                  key={category.id} 
                  className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <img 
        src={verticalLine} 
        alt="Vertical Line" 
        className="hidden lg:block md:block w-2 h-8 md:w-2.5 md:h-12 lg:w-3 lg:h-14 mx-2 md:mx-4"
      />
      <h1 className="text-sm md:text-base lg:text-lg font-light whitespace-nowrap">
        Showing 1-{productsCount} files
      </h1>
    </div>
  );
}

export default FilterProductsByCategory;
