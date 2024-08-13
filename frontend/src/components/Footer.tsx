import FooterHelp from './Footer/FooterHelp';
import FooterLinks from './Footer/FooterLinks';
import FooterLocal from './Footer/FooterLocal';
import FooterNewsletter from './Footer/FooterNewsletter';

function Footer(): JSX.Element {
    return (
        <footer className="w-full bg-gray-100 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-start">
                <FooterLocal />
                <FooterLinks />
                <FooterHelp />
                <FooterNewsletter />
            </div>
        </footer>
    );
}

export default Footer;
