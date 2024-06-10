import CompassImage from "../../images/CompassLogo"
import CompassNameImage from "../../images/CompassName"
import './Header.css'

function Header() {

    return (
     <header id='header'>
        <div id='items'>
            <div>
               <CompassImage/>
               <CompassNameImage/>
            </div>
            
        </div>
     </header>
    )
}

export default Header

