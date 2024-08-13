import AccountLogo from "../../images/mdi_account-alert-outline.svg"
import HeartImage from "../../images/akar-icons_heart.svg"
import IconSearch from "../../images/akar-icons_search.svg"
import ShoppingCartImage from "../../images/ant-design_shopping-cart-outlined.svg"

export default function HeaderAccountLinks() {
  return (
    <div className="w-[26vmax] mt-3 relative flex justify-end">
    <div className="relative right-[10%] w-[70%] flex items-center justify-evenly">
    <img src={AccountLogo} alt="" className="relative w-[1.5vmax]"/>
    <img src={IconSearch} alt="" className="relative w-[1.5vmax]"/>
    <img src={HeartImage} alt="" className="relative w-[1.5vmax]"/>
    <img src={ShoppingCartImage} alt="" className="relative w-[1.5vmax]"/>
    </div>     
  </div>  

  )
}