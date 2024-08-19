import LogoSvg from '../../../../images/Frame 168.svg'

export default function HeaderLogo() {
    return (
        <div className="w-full flex justify-center items-center">
            <img 
                src={LogoSvg} 
                alt="logo" 
                className="w-32 h-auto max-w-full" 
            />
        </div>
    )
}
