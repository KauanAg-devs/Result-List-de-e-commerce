import { useEffect, useState } from 'react';
import { ProductType } from './Product';

type ProductSectionsProps = {
  filterValue: number;
  products: ProductType[];
  productCount: number
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

function ProductSections({ filterValue, productCount, page, setPage }: ProductSectionsProps) {
  const [showPreviousButton, setShowPreviousButton] = useState<boolean>(false);
  
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
    <div className="w-[30vmax] h-[10vmax] flex items-center justify-around">
      {showPreviousButton && (
        <button
          onClick={handlePreviousButtonClick}
          className="bg-[#f9f1e7] h-[5vmax] w-[5vmax] rounded-lg text-[1.1vmax] font-medium mb-[1.5vmax] active:bg-orange-400"
        >
          Previous
        </button>
      )}

      <button
        key={page}
        onClick={() => setPage(page)}
        className="bg-[#f9f1e7] h-[5vmax] w-[5vmax] rounded-lg text-[1.1vmax] font-medium mb-[1.5vmax] active:bg-orange-400"
      >
        {page}
      </button>
       {(filterValue * page) < productCount  && 
        <button
          onClick={handleNextButtonClick}
          className="bg-[#f9f1e7] h-[5vmax] w-[5vmax] rounded-lg text-[1.1vmax] font-medium mb-[1.5vmax] active:bg-orange-400"
        >
          Next
        </button>
      }
    </div>
  );
}

export default ProductSections;
