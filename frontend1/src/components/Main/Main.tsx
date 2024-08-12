import { useState, useEffect } from 'react';
import './css/Main.css';
import Filter from './Filter/Filter';
import ProductSections from './Product/ProductSections';
import productTest from './ProductTest';
import { ProductType } from './Product/Product';
import ProductsContainer from './Product/ProductsContainer';

function Main(): JSX.Element {
  const [filterValue, setFilterValue] = useState<number>(10); 
  const [currentSection, setCurrentSection] = useState(1); 
  const [totalSections, setTotalSections] = useState<number>(1); 
  const [products, setProducts] = useState<ProductType[]>(productTest);

  useEffect(() => {
    const totalProducts = products.length;
    const sections = Math.ceil(totalProducts / filterValue);    
    setTotalSections(sections);
  }, [filterValue, products]);

  return (
    <main id="main">

      <Filter 
          setFilterValue={setFilterValue} 
          products={products} 
          setProducts={setProducts} 
      />
      
      <ProductsContainer
        filterValue={filterValue}
        currentSection={currentSection}
        products={products}
      />
      
      <ProductSections
        totalSections={totalSections}
        filterValue={filterValue} 
        products={products} 
        setCurrentSection={setCurrentSection}
      />
    </main>
  );
}

export default Main;
