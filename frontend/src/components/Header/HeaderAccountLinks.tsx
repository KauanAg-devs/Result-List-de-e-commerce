import AccountLogo from "../../images/mdi_account-alert-outline.svg";
import HeartImage from "../../images/akar-icons_heart.svg";
import IconSearch from "../../images/akar-icons_search.svg";
import ShoppingCartImage from "../../images/ant-design_shopping-cart-outlined.svg";
import { useState } from "react";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { getAccessTokenFromCookies } from "../../utils/getAcessTokenFromCookies";
import { useNavigate } from "react-router-dom";

type HeaderAccountLinksProps = {
  ocult?: string[];
};

export default function HeaderAccountLinks({ ocult }: HeaderAccountLinksProps) {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [showAccountSection, setShowAccountSection] = useState(false);

  const navigate = useNavigate();

  const logoutHandler = async () => {
    const accessToken = getAccessTokenFromCookies();

    try {
      const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      const data = await response.json();
      console.log(data.message);
      navigate('/auth/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="relative w-1/3 max-w-screen-lg mx-auto flex justify-center items-center py-4 space-x-4 md:space-x-6 lg:space-x-8">
      <img 
        src={AccountLogo} 
        onClick={() => setShowAccountSection(prev => !prev)} 
        alt="Account" 
        className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"
      />
      <div 
        className={`absolute justify-center top-16 right-0 w-40 bg-white border border-gray-300 rounded-md shadow-md flex flex-col items-center space-y-2 transform transition-all duration-500 ease-in origin-top ${
          showAccountSection ? 'h-20 opacity-100' : 'h-0 opacity-0'
        }`}
        style={{ transform: showAccountSection ? 'scaleY(1)' : 'scaleY(0)' }}
      >
        <button 
          onClick={logoutHandler} 
          className="w-full h-1/2 text-sm text-gray-700 hover:text-gray-900"
        >
          Logout
        </button>
      </div>
      <img 
        src={IconSearch} 
        alt="Search" 
        className={`cursor-pointer ${ocult?.includes('search') ? 'hidden' : 'block'} w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8`}
      />
      <img 
        src={HeartImage} 
        alt="Heart" 
        className={`cursor-pointer ${ocult?.includes('feedback') ? 'hidden' : 'block'} w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8`}
      />
      <img 
        src={ShoppingCartImage} 
        onClick={() => setShowShoppingCart(prev => !prev)} 
        alt="Cart" 
        className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8"
      />
      
      {showShoppingCart && (
        <ShoppingCart 
          setShowShoppingCart={setShowShoppingCart}
        />
      )}
    </div>
  );
}
