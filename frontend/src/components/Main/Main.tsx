import React, { useState, useEffect } from 'react';
import './Main.css';
import Filter from './Filter';
import ProductsContainer from './ProductsContainer';
import ProductSections from './ProductSections';
import productTest from './ProductTest';
import { ProductType } from './Product';

function Main(): JSX.Element {
  const [filterValue, setFilterValue] = useState<number>(10); 
  const [currentSection, setCurrentSection] = useState(1); 
  const [totalSections, setTotalSections] = useState<number>(1); 
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [showPreviousButton, setShowPreviousButton] = useState<boolean>(false); 
  const [products, setProducts] = useState<ProductType[]>(productTest);

  useEffect(() => {
    const totalProducts = products.length;
    const sections = Math.ceil(totalProducts / filterValue);
    setTotalSections(sections);
  }, [filterValue, products]);

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
      <Filter setFilterValue={setFilterValue} products={products} setProducts={setProducts} />
      <ProductsContainer filterValue={filterValue} currentSection={currentSection} products={products} />
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
