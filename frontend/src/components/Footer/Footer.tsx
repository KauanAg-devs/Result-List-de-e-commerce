import './Footer.css'
import Line4 from '../../images/Line 4.svg'
function Footer(): JSX.Element {
    return (
        <>
        <footer id="footer">
            <div id="footer-data">
                <div id='footer-local'>
                  <h1>Footer.</h1>
                  <p> Rua Alexandre Dumas, 1711 - 6° </p> 
                  <p> andar - Chácara Santo Antônio, </p> 
                  <p> São Paulo - SP, 04717-004 </p>
                </div>

                <div id='footer-links'>
                   <h1>Links</h1>
                   <a href=".">Home</a>
                   <a href=".">Shop</a>
                   <a href=".">About</a>
                   <a href=".">Contact</a>
                </div>

                <div id='footer-help'>
                    <h1>Help</h1>
                    <a href=".">Payment Options</a>
                    <a href=".">Returns</a>
                    <a href=".">Privacy Policies</a>
                </div>

                <div>
                    <h1>Newsletter</h1>
                    <div>
                      <input type="text" placeholder="Enter Your Email Adress"/>
                      <button>subscribe</button>
                    </div>
                </div>
            </div>

            <div id='company-data-name'>
                <img id='company-line4' src={Line4} alt="" />
                <div>
                  <h1> 2024 Compass UOL </h1>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer