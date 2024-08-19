import FooterHelp from './Footer/FooterHelp';
import FooterLinks from './Footer/FooterLinks';
import FooterLocal from './Footer/FooterLocal';
import FooterNewsletter from './Footer/FooterNewsletter';


function Footer(): JSX.Element {
    return (
        <footer className="relative items-center flex flex-col h-full w-full">
            <div className="container bg-gray-100 w-full h-full flex flex-col md:flex-row justify-around items-start">
                <FooterLocal />
                <FooterLinks />
                <FooterHelp />
                <FooterNewsletter />
            </div>
        </footer>
    );
}

export default Footer;
