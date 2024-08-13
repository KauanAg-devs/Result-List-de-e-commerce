import { useState } from "react";
import ShareImage from '../../../../images/Frame 11.svg';
import CompareImage from '../../../../images/Frame 12.svg';
import LikeImage from '../../../../images/Frame 10.svg';

export type ProductType = {
  image: string;
  name: string;
  title: string;
  price: string;
  discount?: string;
};

const Product: React.FC<ProductType> = ({ image, name, title, price, discount }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);

  const viewProductDetails = () => {
    setShowProductDetails(prev => !prev);
  };

  return (
    <div 
      className="relative flex flex-col items-center bg-[#F4F5F7] w-[16vmax]  cursor-pointer mb-10"
      onClick={viewProductDetails}
    >
      {showProductDetails && (
        <div 
          className="absolute inset-0 flex flex-col justify-center items-center bg-[#3A3A3A80] text-white opacity-100 transition-opacity duration-300"
          style={{ opacity: showProductDetails ? 1 : 0 }}
        >
          <button className="w-3/4 h-[15%] bg-white text-[#b88e2f] font-semibold border-none rounded-md text-xs sm:text-xs md:text-sm">
            See Details
          </button>
          <div className="flex justify-evenly items-center w-full mt-2">
            <img className="w-[3vmax] sm:w-[3.5vmax]" src={ShareImage} alt="Share" />
            <img className="w-[3vmax] sm:w-[3.5vmax]" src={CompareImage} alt="Compare" />
            <img className="w-[3vmax] sm:w-[3.5vmax]" src={LikeImage} alt="Like" />
          </div>
        </div>
      )}
      <img className="w-full h-[70%] object-cover" src={image} alt={name} />
      <div className="flex-col items-center mt-2 h-[15%] w-full px-2">
        <div className="text-[0.5rem] sm:text-sm md:text-base font-bold text-[#3A3A3A] truncate">{name}</div>
        <div className="text-[0.5rem] sm:text-xs md:text-sm text-[#898989] font-[550] mt-1 truncate">{title}</div>
        <div className="flex items-center">
          <div className="text-[0.5rem] sm:text-sm md:text-base font-semibold text-[#3A3A3A] truncate">{price}</div>
          {discount && <div className="text-[0.50rem] sm:text-xs md:text-sm ml-2 text-[#ccc] line-through truncate">{discount}</div>}
        </div>
      </div>
    </div>
  );
};

export default Product;
