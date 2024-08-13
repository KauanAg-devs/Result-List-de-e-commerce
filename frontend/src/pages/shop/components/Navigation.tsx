import { Link } from 'react-router-dom';
import Arrow from '../../../images/dashicons_arrow-down-alt2.svg';

function Navigation(): JSX.Element {
    return (
        <nav id='nav' className="p-4 md:p-6 lg:p-8">
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 lg:mb-8 relative'>
                Shop
            </h1>   
            <div className='flex flex-col md:flex-row md:space-x-4 items-center justify-center'>
                <Link to='/' className='text-lg md:text-xl font-light'>Home</Link>
                <img src={Arrow} alt="" className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'/>
                <Link to='shop' className='text-sm md:text-base font-thin'>Shop</Link>
            </div>
        </nav>
    );
}

export default Navigation;
