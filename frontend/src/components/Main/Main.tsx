import React, { useState, useEffect } from 'react';
import './Main.css';
import Filter from './Filter';
import ProductsContainer from './ProductsContainer';
import ProductSections from './ProductSections';

function Main(): JSX.Element {
  const [filterValue, setFilterValue] = useState<number>(10); 
  const [currentSection, setCurrentSection] = useState(1); 
  const [totalSections, setTotalSections] = useState<number>(1); 
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [showPreviousButton, setShowPreviousButton] = useState<boolean>(false); 

  useEffect(() => {
    const totalProducts = 32; 
    const sections = Math.ceil(totalProducts / filterValue);
    setTotalSections(sections);
  }, [filterValue]);

  const handleSectionClick = (section: number) => {
    setCurrentSection(section);
    updateButtonVisibility(section);
  };

  const handleNextButtonClick = () => {
    setCurrentPage(currentPage + 1);
    updateButtonVisibility(currentPage + 1);
  };

  const handlePreviousButtonClick = () => {
    setCurrentPage(currentPage - 1);
    updateButtonVisibility(currentPage - 1);
  };

  const updateButtonVisibility = (page: number) => {
    if (page > 1) {
      setShowPreviousButton(true);
    } else {
      setShowPreviousButton(false);
    }
  };

  return (
    <main id="main">
      <Filter setFilterValue={setFilterValue} />
      <ProductsContainer filterValue={filterValue} currentSection={currentSection} />
      <ProductSections
        handleSectionClick={handleSectionClick}
        totalSections={totalSections}
        currentPage={currentPage}
        handleNextButtonClick={handleNextButtonClick}
        handlePreviousButtonClick={handlePreviousButtonClick}
        showPreviousButton={showPreviousButton}
      />
    </main>
  );
}

export default Main;
