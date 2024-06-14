import React from 'react';
import { ProductType } from './Product';

type OrderFilterProps = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function productsByPrices(
  products: ProductType[], 
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
) {
  const sortedProducts = [...products].sort((a, b) => parseInt(a.price) - parseInt(b.price));
  setProducts(sortedProducts);
}

function productsByAlphabet(
  products: ProductType[], 
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
) {
  const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  setProducts(sortedProducts);
}

const OrderFilter: React.FC<OrderFilterProps> = ({ products, setProducts }) => {
  return (
    <div id="order-filter">
      <button onClick={() => productsByPrices(products, setProducts)}>
        Price Order
      </button>
      <button onClick={() => productsByAlphabet(products, setProducts)}>
        Alphabetic Order
      </button>
    </div>
  );
};

export default OrderFilter;
