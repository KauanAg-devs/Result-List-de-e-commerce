import LogoSvg from '../../../../images/Frame 168.svg'

export default function HeaderLogo() {
    return (
      <div className="w-[26vmax] relative left-0 flex justify-start items-center">
        <img src={LogoSvg} alt="logo" className="relative w-[15vw] left-[1vmax]"/>
      </div>
    )
}