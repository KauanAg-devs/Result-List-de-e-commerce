import { useEffect, useState } from 'react';
import { ProductType } from './Product';

type ProductSectionsProps = {
  filterValue: number;
  products: ProductType[];
  totalProducts: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function ProductSections({ filterValue, totalProducts, page, setPage }: ProductSectionsProps) {
  const [showPreviousButton, setShowPreviousButton] = useState<boolean>(false);
  console.log((filterValue * page), totalProducts);
  
  const handlePreviousButtonClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextButtonClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setShowPreviousButton(page > 1);
  }, [page]);

  return (
    <div className="w-full max-w-[30rem] h-auto flex items-center justify-around px-4 py-2 sm:py-4 sm:px-6">
      {showPreviousButton && (
        <button
          onClick={handlePreviousButtonClick}
          className="bg-[#f9f1e7] h-[5rem] w-[5rem] rounded-lg text-base font-medium mb-4 active:bg-orange-400"
        >
          Previous
        </button>
      )}

      <button
        key={page}
        onClick={() => setPage(page)}
        className="bg-[#f9f1e7] h-[5rem] w-[5rem] rounded-lg text-base font-medium mb-4 active:bg-orange-400"
      >
        {page}
      </button>
      {(filterValue * page) < totalProducts && (
        <button
          onClick={handleNextButtonClick}
          className="bg-[#f9f1e7] h-[5rem] w-[5rem] rounded-lg text-base font-medium mb-4 active:bg-orange-400"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default ProductSections;
