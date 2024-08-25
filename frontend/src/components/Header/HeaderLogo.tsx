import LogoSvg from '../../images/Frame 168.svg';

export default function HeaderLogo() {
    return (
        <div className="w-[14%] flex-shrink-0">
            <img 
                src={LogoSvg} 
                alt="logo" 
                className="ml-5 w-32 h-auto" 
            />
        </div>
    );
}