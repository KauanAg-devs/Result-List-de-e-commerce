import QualityBarImage from '../../../images/Frame 161.svg'
import { useState, useEffect } from 'react';
import ProductSections from './Main/ProductSections';
import { ProductType } from './Main/Product';
import ProductsContainer from './Main/ProductsContainer';
import FilterProducts from './Main/FilterProducts';
import { fetchFilteredProducts } from '../../../api/FetchFilteredProducts';

function Main(): JSX.Element {
  const [filterValue, setFilterValue] = useState<number>(16); 
  const [currentSection, setCurrentSection] = useState(1); 
  const [totalSections, setTotalSections] = useState<number>(1); 
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchFilteredProducts(filterValue).then(data => setProducts(data));
  }, [filterValue]);
  
  useEffect(() => {
    if (products) {
      const totalProducts = products.length;
      const sections = Math.ceil(totalProducts / filterValue);    
      setTotalSections(sections);
    }
  }, [filterValue, products]);
 
  return (
    <main className='relative items-center flex flex-col min-h-[90vh] w-full'>

      <FilterProducts 
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

      <img id='quality-bar' className='w-full' src={QualityBarImage} alt="" />

    </main>
  );
}

export default Main;
