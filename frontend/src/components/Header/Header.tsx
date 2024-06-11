import AccountLogo from "../../images/AccountLogo"
import CompassLogo from "../../images/CompassLogo"
import CompassName from "../../images/CompassName"
import HeartImage from "../../images/HeartImage"
import MagnifyingGlassImage from "../../images/MagnifyingGlassImage"
import ShoppingCartImage from "../../images/ShoppingCartImage"
import './Header.css'

function Header() {
    return (
     <header id='header'>
        <div id="groups">
          <div id='group-1'>
            <div>
           <CompassLogo/>
           <CompassName/>
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
            <AccountLogo/>
            <MagnifyingGlassImage/>
            <HeartImage/>
            <ShoppingCartImage/>
          </div>
        </div>
     </header>
    )
}

export default Header

