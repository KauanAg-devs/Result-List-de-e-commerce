import AccountLogo from "../../images/mdi_account-alert-outline.svg";
import HeartImage from "../../images/akar-icons_heart.svg";
import IconSearch from "../../images/akar-icons_search.svg";
import ShoppingCartImage from "../../images/ant-design_shopping-cart-outlined.svg";
import { useState } from "react";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";

type HeaderAccountLinksProps = {
  ocult?: string[];
};

export default function HeaderAccountLinks({ ocult }: HeaderAccountLinksProps) {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  
  return (
    <div className="w-1/3 max-w-screen-lg mx-auto flex justify-center items-center py-4 space-x-4 md:space-x-6 lg:space-x-8">
      <img src={AccountLogo} alt="Account" className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
      <img src={IconSearch} alt="Search" className={`cursor-pointer ${ocult?.includes('search') ? 'hidden' : 'block'} w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8`}/>
      <img src={HeartImage} alt="Heart" className={`cursor-pointer ${ocult?.includes('feedback') ? 'hidden' : 'block'} w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8`}/>
      <img src={ShoppingCartImage} onClick={()=> setShowShoppingCart(prev => !prev)} alt="Cart" className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
      
      {showShoppingCart && <ShoppingCart 
        setShowShoppingCart={setShowShoppingCart}
      />}
    </div>
  );
}
