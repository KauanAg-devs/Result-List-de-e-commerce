import { Link } from 'react-router-dom';
import Arrow from '../../images/dashicons_arrow-down-alt2.svg';

type NavigationProps = {
    title: string;
    items: {title: string, link: string}[];
};
function Navigation({title, items}: NavigationProps): JSX.Element {
    const firstLink = items && items[0];  
    const secondLink = items && items[1];  

    return (
        <nav id='nav' className="container relative h-42 md:h-96 sm:h-22 justify-center items-center flex flex-col w-full p-4 md:p-6 lg:p-8'">
            <p className='z-10 text-2xl md:text-3xl lg:text-4xl font-medium mb-4 lg:mb-8'>
                {title}
            </p>   
            <div className='z-10 flex flex-col md:flex-row md:space-x-4 items-center justify-center'>
                <Link to={firstLink.link} className='text-lg md:text-xl font-light hover:text-gray-700 transition-colors duration-300'>{firstLink.title}</Link>
                <img src={Arrow} alt="Arrow icon" className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mx-2'/>
                <Link to={secondLink.link} className='text-sm md:text-base font-thin hover:text-gray-700 transition-colors duration-300'>{secondLink.title}</Link>
            </div>
        </nav>
    );
}

export default Navigation;
