import FooterHelp from './FooterHelp';
import FooterLinks from './FooterLinks';
import FooterLocal from './FooterLocal';
import FooterNewsletter from './FooterNewsletter';

type FooterProps = {
    style?: string;
};

function Footer({ style }: FooterProps): JSX.Element {
    return (
        <footer className="relative items-center flex flex-col h-full w-full">
            <div className={style ? style: "container bg-gray-100 w-full h-full flex flex-col md:flex-row justify-around items-start"}>
                <FooterLocal />
                <FooterLinks />
                <FooterHelp />
                <FooterNewsletter />
            </div>
            { style && <div className="w-[85%] mx-auto border-b"></div>}
            <p className='py-4 px-4 w-full items-start'>
            2023 Compass. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
