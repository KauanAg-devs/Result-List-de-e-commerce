import './Footer.css'
import FooterHelp from './FooterHelp'
import FooterLinks from './FooterLinks'
import FooterLocal from './FooterLocal'
import FooterNewsletter from './FooterNewsletter'

function Footer(): JSX.Element {
    return  (
    <footer id="footer">
        <div id="footer-data">
            <FooterLocal/>
            <FooterLinks/>
            <FooterHelp/>
            <FooterNewsletter/>  
        </div>
    </footer>
    )
}

export default Footer