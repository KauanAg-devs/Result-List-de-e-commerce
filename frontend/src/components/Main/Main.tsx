import './Main.css';
import Filter from './Filter';
import ProductsContainer from './ProductsContainer';
import { useState } from 'react';

function Main(): JSX.Element {
  const [filterValue, setFilterValue] = useState<number | object>({});

  return (
    <main id="main">
      <Filter setFilterValue={setFilterValue} />
      <ProductsContainer filterValue={filterValue} />
    </main>
  );
}

export default Main;
