import { useState } from "react";
import ShareImage from '../../../../images/Frame 11.svg';
import CompareImage from '../../../../images/Frame 12.svg';
import LikeImage from '../../../../images/Frame 10.svg';
import { setProduct } from "../../../../productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../../utils/formatPrice";

export type ProductType = {
  image: string;
  name: string;
  title: string;
  price: string;
  discount?: string;
  createdAt?: string;
  id?: string;
  sku: string;
};

function Product({ sku, createdAt, image, name, title, price, discount }: ProductType) {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [navigate, dispatch] = [useNavigate(), useDispatch()];
  const viewProductDetails = ()=> setShowProductDetails(prev => !prev);

  const navigateToProductDetails = () => {
    dispatch(setProduct({ sku, createdAt, image, name, title, price, discount }));
    navigate(`/shop/details/${sku}`);
  };

  const discountPercentage = discount ? Math.round((parseInt(price) - parseInt(discount)) / parseInt(price) * 100) : null;
  const isNew = createdAt ? (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24) < 3 : false;

  return (
    <div 
      className={`relative flex flex-col items-center bg-[#F4F5F7] w-full sm:w-[240px] md:w-[300px] h-[400px] cursor-pointer mt-10 mb-10 transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
      onClick={viewProductDetails}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 flex flex-col justify-center items-center bg-[#3A3A3A80] text-white transition-opacity duration-300 ease-in-out transform ${showProductDetails ? 'opacity-100' : 'opacity-0'} `}>
      <div
        onClick={navigateToProductDetails}
        className="z-10 w-3/4 h-10 bg-white text-center items-center justify-center flex text-[#b88e2f] font-semibold border-none rounded-md text-xs sm:text-sm">
         See Details
      </div>


        <div className="flex justify-evenly items-center w-full mt-2">
          <img className="w-6 sm:w-8 md:w-12" src={ShareImage} alt="Share" onClick={(e) => e.stopPropagation()} />
          <img className="w-8 sm:w-10 md:w-16" src={CompareImage} alt="Compare" onClick={(e) => e.stopPropagation()} />
          <img className="w-6 sm:w-8 md:w-12" src={LikeImage} alt="Like" onClick={(e) => e.stopPropagation()} />
        </div>
      </div>
      <img className="w-full h-2/3 object-cover" src={image} alt={name} />
      {discountPercentage && (
        <div className={`opacity-85 text-sm absolute right-2 top-2 flex items-center justify-center text-center h-8 w-8 bg-[#e77979] text-white rounded-full`}>
          {discountPercentage}%
        </div>
      )}
      {isNew && (
        <div className={`opacity-85 text-sm absolute ${discountPercentage ? 'left-2' : 'right-2'} top-2 flex items-center justify-center text-center h-8 w-8 bg-[#2ec1ac] text-white rounded-full`}>
          New
        </div>
      )}
      <div className="flex-col flex justify-evenly mt-2 h-1/3 w-full px-2">
        <div className="text-xs sm:text-sm md:text-lg font-bold text-[#3A3A3A] truncate">{name}</div>
        <div className="text-xs sm:text-sm md:text-sm text-[#898989] font-medium mt-1 truncate">{title}</div>
        <div className="flex items-center">
          <div className="text-xs sm:text-sm md:text-base font-semibold text-[#3A3A3A] truncate">{formatPrice(discount || price)}</div>
          {discount && <div className="text-xs sm:text-sm md:text-sm ml-2 text-[#ccc] line-through truncate">{formatPrice(price)}</div>}
        </div>
      </div>
    </div>
  );
};

export default Product;
