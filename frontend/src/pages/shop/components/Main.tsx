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
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<'price' | 'discount' | 'name'>('price');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {        
        const data = await fetchFilteredProducts(page, filterValue, orderBy, order, selectedCategory); 
        setProducts(data.products);        
        setTotalProducts(data.totalProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    loadProducts();
  }, [filterValue, page, orderBy, order, selectedCategory]);

  return (
    <main className="container relative items-center flex flex-col min-h-[90vh] w-full">
      <FilterProducts
        setFilterValue={setFilterValue}
        products={products}
        setProducts={setProducts}
        setOrderBy={setOrderBy}
        setOrder={setOrder}
        setSelectedCategory={setSelectedCategory} 
      />
      
      <ProductsContainer products={products} />
      
      <ProductSections
        filterValue={filterValue}
        page={page}
        setPage={setPage}
        totalProducts={totalProducts}
        products={products}
      />
    </main>
  );
}

export default Main;
