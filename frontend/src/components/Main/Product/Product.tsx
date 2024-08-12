import '../css/Product.css'
import React, { useState } from 'react';
import ShareImage from '../../../images/Frame 11.svg'
import CompareImage from '../../../images/Frame 12.svg'
import LikeImage from '../../../images/Frame 10.svg'

export type ProductType = {
  image: string;
  name: string;
  title: string;
  price: string;
  discount?: string;
  displayNone?: React.CSSProperties;
};

const Product: React.FC<ProductType> = ({ image, name, title, price, discount, displayNone }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  
  const viewProductDetails = () => {
    setShowProductDetails(previous => !previous);    
  }

  return (
    <div className="product" onClick={viewProductDetails}>
      {showProductDetails && <div id='product-details'>
        <button id='see-product-details'>See Details</button>
        <div id='product-details-images'>
        <img src={ShareImage} alt="" />
        <img src={CompareImage} alt="" />
        <img src={LikeImage} alt="" />
        </div>
        </div>}
      <img className='image'  src={image} alt="" />
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
