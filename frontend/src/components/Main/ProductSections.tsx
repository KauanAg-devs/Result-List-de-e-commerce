import React, { useEffect, useState } from 'react';
import { ProductType } from './Product';

type ProductSectionsProps = {
  filterValue: number;
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
  totalSections: number;
  products: ProductType[];
};

function ProductSections({ setCurrentSection, totalSections }: ProductSectionsProps) {
  const [showPreviousButton, setShowPreviousButton] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePreviousButtonClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCurrentSection((currentPage - 2) * 3 + 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currentPage < Math.ceil(totalSections / 3)) {
      setCurrentPage(currentPage + 1);
      setCurrentSection(currentPage * 3 + 1);
    }
  };

  const startSection = (currentPage - 1) * 3 + 1;
  const endSection = Math.min(startSection + 2, totalSections);

  useEffect(() => {
    setShowPreviousButton(currentPage > 1);
  }, [currentPage]);

  const sectionButtons = [];
  for (let section = startSection; section <= endSection; section++) {
    sectionButtons.push(
      <button
        key={section}
        onClick={() => setCurrentSection(section)}
        className="bg-[#f9f1e7] h-[5vmax] w-[5vmax] rounded-lg text-[1.1vmax] font-medium mb-[1.5vmax] hover:bg-orange-400"
      >
        {section}
      </button>
    );
  }

  return (
    <div className="w-[30vmax] h-[10vmax] flex items-center justify-around">
      {showPreviousButton && (
        <button
          onClick={handlePreviousButtonClick}
          className="bg-[#f9f1e7] h-[5vmax] w-[5vmax] rounded-lg text-[1.1vmax] font-medium mb-[1.5vmax] hover:bg-orange-400"
        >
          Previous
        </button>
      )}

      {sectionButtons}

      {currentPage < Math.ceil(totalSections / 3) && (
        <button
          onClick={handleNextButtonClick}
          className="bg-[#f9f1e7] h-[5vmax] w-[5vmax] rounded-lg text-[1.1vmax] font-medium mb-[1.5vmax] hover:bg-orange-400"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default ProductSections;
