import { useState } from 'react';
import HeaderLogo from './Header/HeaderLogo';
import HeaderGeneralLinks from './Header/HeaderGeneralLinks';
import HeaderAccountLinks from './Header/HeaderAccountLinks';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="relative w-full flex items-center justify-between px-4 bg-white shadow-md">
            <HeaderLogo />

            <button 
                className="lg:hidden  p-2 text-gray-500 hover:text-gray-700 z-50" 
                onClick={toggleMenu} 
                aria-label="Toggle navigation"
            >
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            <nav 
                className={`absolute top-10 lg:top-0 right-0  bg-white shadow-lg lg:shadow-none transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:opacity-100 lg:pointer-events-auto lg:relative lg:flex lg:items-center lg:space-x-4 lg:w-auto lg:h-auto lg:bg-transparent`} 
                style={{ zIndex: 40 }}
            >
                <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-4 w-full lg:w-auto p-4">
                    <HeaderGeneralLinks />
                    <HeaderAccountLinks />
                </div>
            </nav>
        </header>
    );
}

export default Header;