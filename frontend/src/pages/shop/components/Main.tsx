import QualityBarImage from '../../../images/Frame 161.svg'
import { useState, useEffect } from 'react';
import ProductSections from './Main/ProductSections';
import { ProductType } from './Main/Product';
import ProductsContainer from './Main/ProductsContainer';
import FilterProducts from './Main/FilterProducts';
import { fetchFilteredProducts } from '../../../api/FetchFilteredProducts';

function Main(): JSX.Element {
  const [filterValue, setFilterValue] = useState<number>(16); 
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [productCount, setProductCount] = useState<number>(0);
  useEffect(() => {
    fetchFilteredProducts(page,filterValue).then(data => {
      setProducts(data.products)
      setProductCount(data.count)
    });
  }, [filterValue, page]);

  return (
    <main className='relative items-center flex flex-col min-h-[90vh] w-full'>

      <FilterProducts 
          setFilterValue={setFilterValue} 
          products={products} 
          setProducts={setProducts} 
      />
      
      <ProductsContainer
        products={products}
      />
      
      <ProductSections
        filterValue={filterValue}
        page={page}
        setPage={setPage}
        productCount={productCount} 
        products={products} 
      />

      <img id='quality-bar' className='w-full' src={QualityBarImage} alt="" />

    </main>
  );
}

export default Main;
