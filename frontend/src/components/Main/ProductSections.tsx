
type ProductSectionsProps = {
  handleSectionClick: (section: number) => void; 
  currentPage: number; 
  handleNextButtonClick: () => void; 
  handlePreviousButtonClick: () => void; 
  totalSections: number;
  showPreviousButton: boolean; 
};

function ProductSections({
  handleSectionClick,
  currentPage,
  handleNextButtonClick,
  handlePreviousButtonClick,
  totalSections,
  showPreviousButton,
}: ProductSectionsProps) {
  const startSection = (currentPage - 1) * 3 + 1;
  const endSection = Math.min(startSection + 2, totalSections);

  const handleClick = (section: number) => {
    handleSectionClick(section);
  };
  
  return (
    <div id="product-sections">
      {showPreviousButton && currentPage !== 1 && (
        <button onClick={handlePreviousButtonClick} id="product-section-button">
          Previous
        </button>
      )}
      {Array.from({ length: endSection - startSection + 1 }, (_, index) => startSection + index).map(
        (section) => (
          <button key={section} onClick={() => handleClick(section)} id="product-section-button">
            {section}
          </button>
        )
      )}
      {currentPage < Math.ceil(totalSections / 3) && (
        <button onClick={handleNextButtonClick} id="product-section-button">
          Next
        </button>
      )}
    </div>
  );
}

export default ProductSections;
