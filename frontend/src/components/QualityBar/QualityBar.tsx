import TrophyImage from '../../images/trophy.svg';
import WarrantyImage from "../../images/warranty.svg";
import SupportImage from "../../images/support.svg";
import FreeShipping from "../../images/free-shipping.svg";

export function QualityBar(): JSX.Element {
  return (
    <div className="bg-[#f9f1e7] container w-full h-auto py-8 flex flex-col md:flex-row justify-evenly items-center">
     
      <div className="flex mb-6 md:mb-0 md:flex-1 md:justify-center">
        <img className="w-10" src={TrophyImage} alt="High Quality" />
        <div className="ml-4 text-center md:text-left text-lg sm:text-xl md:text-2xl font-semibold text-[#242424]">
          High Quality
          <br />
          <span className="font-medium text-sm sm:text-base md:text-lg text-gray-500">crafted from top materials</span>
        </div>
      </div>

      <div className="flex mb-6 md:mb-0 md:flex-1 md:justify-center">
        <img className="w-10" src={WarrantyImage} alt="Warranty Protection" />
        <div className="ml-4 text-center md:text-left text-lg sm:text-xl md:text-2xl font-semibold text-[#242424]">
          Warranty Protection
          <br />
          <span className="font-medium text-sm sm:text-base md:text-lg text-gray-500">Over 2 years</span>
        </div>
      </div>

      <div className="flex mb-6 md:mb-0 md:flex-1 md:justify-center">
        <img className="w-10" src={FreeShipping} alt="Free Shipping" />
        <div className="ml-4 text-center md:text-left text-lg sm:text-xl md:text-2xl font-semibold text-[#242424]">
          Free Shipping
          <br />
          <span className="font-medium text-sm sm:text-base md:text-lg text-gray-500">Order over 150 $</span>
        </div>
      </div>

      <div className="flex mb-6 md:mb-0 md:flex-1 md:justify-center">
        <img className="w-10" src={SupportImage} alt="24/7 Support" />
        <div className="ml-4 text-center md:text-left text-lg sm:text-xl md:text-2xl font-semibold text-[#242424]">
          24/7 Support
          <br />
          <span className="font-medium text-sm sm:text-base md:text-lg text-gray-500">Dedicated support</span>
        </div>
      </div>
    </div>
  );
}
