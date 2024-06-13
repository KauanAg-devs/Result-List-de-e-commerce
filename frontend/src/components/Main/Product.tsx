import React from 'react';

export type ProductType = {
  image: string;
  name: string;
  title: string;
  price: string;
  discount?: string;
  displayNone?: React.CSSProperties;
};

const Product: React.FC<ProductType> = ({ image, name, title, price, discount, displayNone }) => {
  return (
    <div className="product" style={displayNone}>
      <img className='image' src={image} alt="" />
      <div className="product-name">{name}</div>
      <div className="product-title">{title}</div>
      
      <div className='product-price-div'>
        <div className="product-price">{price}</div>
        {discount && <div className="product-discount">{discount}</div>}
      </div>
    </div>
  );
};

export default Product;
