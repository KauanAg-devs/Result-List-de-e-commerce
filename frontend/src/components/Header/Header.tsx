import AccountLogo from "../../images/mdi_account-alert-outline.svg"
import HeartImage from "../../images/akar-icons_heart.svg"
import LogoSvg from '../../images/Frame 168.svg'
import IconSearch from "../../images/akar-icons_search.svg"
import ShoppingCartImage from "../../images/ant-design_shopping-cart-outlined.svg"
import './Header.css'


function Header() {
    return (
     <header id='header'>
        <div id="groups">
          <div id='group-1'>
            <div>
            <img src={LogoSvg} alt=""/>
           </div>
          </div>
           
          <div id="group-2">
            <div>
            <h1 id="home">Home</h1>
            <h1 id="shop">Shop</h1>
            <h1 id="about">About</h1>
            <h1 id="contact">Contact</h1>
            </div>
          </div>
          
          <div id="group-3">
            <img src={AccountLogo} alt=""/>
            <img src={IconSearch} alt=""/>
            <img src={HeartImage} alt=""/>
            <img src={ShoppingCartImage} alt=""/>
          </div>
        </div>
     </header>
    )
}

export default Header
