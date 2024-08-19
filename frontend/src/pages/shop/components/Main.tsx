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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchFilteredProducts(page, filterValue, orderBy, order);
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    loadProducts();
  }, [filterValue, page, orderBy, order]);

  return (
    <main className="container relative items-center flex flex-col min-h-[90vh] w-full">
      <FilterProducts
        setFilterValue={setFilterValue}
        products={products}
        setProducts={setProducts}
        setOrderBy={setOrderBy}
        setOrder={setOrder}
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
