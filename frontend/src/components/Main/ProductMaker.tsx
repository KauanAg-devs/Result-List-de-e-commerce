import React from 'react';
import productTest from './ProductTest';
import Product, { ProductType } from './Product';

type ProductMakerProps = {
  filterValue: number | object;
};

const ProductMaker: React.FC<ProductMakerProps> = ({ filterValue }) => {
  const productsValues: ProductType[] = [...productTest];

  if (typeof filterValue === 'number' && Number.isInteger(filterValue)) {
    console.log(filterValue);
        
    return (
      <>
        {productsValues.map((product, index) => (
          index < filterValue && (
            <Product
              key={index}
              price={product.price}
              image={product.image}
              name={product.name}
              title={product.title}
              discount={product.discount}
            />
          )
        ))}
      </>
    );
  }

  // Caso filterValue não seja um número inteiro válido, mostrar todos os produtos
  return (
    <>
      {productsValues.map((product, index) => (
        <Product
          key={index}
          price={product.price}
          image={product.image}
          name={product.name}
          title={product.title}
          discount={product.discount}
        />
      ))}
    </>
  );
};

export default ProductMaker;
