import { Link } from 'react-router-dom';
import Arrow from '../../../images/dashicons_arrow-down-alt2.svg';

function Navigation(): JSX.Element {
    return (
        <nav id='nav' className="container relative h-42 md:h-96 sm:h-22 justify-center items-center flex flex-col w-full p-4 md:p-6 lg:p-8'">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 lg:mb-8'>
                Shop
            </h1>   
            <div className='flex flex-col md:flex-row md:space-x-4 items-center justify-center'>
                <Link to='/' className='text-lg md:text-xl font-light hover:text-gray-700 transition-colors duration-300'>Home</Link>
                <img src={Arrow} alt="Arrow icon" className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mx-2'/>
                <Link to='shop' className='text-sm md:text-base font-thin hover:text-gray-700 transition-colors duration-300'>Shop</Link>
            </div>
        </nav>
    );
}

export default Navigation;
