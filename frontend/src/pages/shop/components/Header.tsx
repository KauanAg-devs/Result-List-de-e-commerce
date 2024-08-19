import { useState } from 'react';
import HeaderLogo from './Header/HeaderLogo';
import HeaderGeneralLinks from './Header/HeaderGeneralLinks';
import HeaderAccountLinks from './Header/HeaderAccountLinks';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full bg-white">
            <div className="container mx-auto flex items-center justify-evenly py-4">
                <HeaderLogo />

                <button 
                    className="lg:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-50" 
                    onClick={toggleMenu} 
                    aria-label="Toggle navigation"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <nav 
                    className={`w-auto lg:flex lg:items-center lg:space-x-4 lg:justify-evenly lg:w-full lg:h-auto lg:bg-transparent 
                        ${isMenuOpen ? 'absolute w-full top-20 right-10 bg-white shadow-lg' : 'hidden lg:flex'}`}
                    style={{ zIndex: 40 }}
                >
                    <div className={`flex w-full flex-col items-center justify-center lg:flex-row lg:space-x-4 p-4 lg:p-0`}>
                        <HeaderGeneralLinks />
                        <HeaderAccountLinks />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
