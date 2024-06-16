import '../css/Product.css';
import React, { useEffect, useState } from 'react';
import { ProductType } from './Product';

type ProductSectionsProps = {
  filterValue: number;
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
  totalSections: number;
  products: ProductType[];
};

function ProductSections({setCurrentSection,totalSections}: ProductSectionsProps) {
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
    const updateButtonVisibility = ()=> setShowPreviousButton(currentPage > 1);
    updateButtonVisibility();
  }, [currentPage]);

const sectionButtons = [];

for (let section = startSection; section <= endSection; section++) {
  sectionButtons.push(
    <button
      key={section}
      onClick={() => setCurrentSection(section)}
      id="product-section-button"
    >
      {section}
    </button>
  );
}
  return (
    <>

      <div id="product-sections">
        {showPreviousButton && 
          <button onClick={handlePreviousButtonClick} id="product-section-button">
            Previous
          </button>
        }

        {sectionButtons}
        
        {currentPage < Math.ceil(totalSections / 3) && (
          <button onClick={handleNextButtonClick} id="product-section-button">
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default ProductSections;
