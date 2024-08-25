import { Link } from "react-router-dom";
import verticalLine from '../../../images/Line 5.svg';

type BreadcrumbsProps = {
  productName: string;
};

export function Breadcrumbs({ productName }: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="flex items-center bg-[#f9f1e7] w-full h-auto px-4 md:px-8 lg:px-16">
      <div className="flex items-center w-full justify-between md:justify-start md:w-[80%]">
        <Link to="/" className="text-[#9f9f9f] text-sm md:text-base lg:text-lg py-4 md:py-6 mx-2">Home</Link>
        <p className="text-sm md:text-base lg:text-xl font-light mx-2">{'>'}</p>
        <Link to="/shop" className="text-[#9f9f9f] text-sm md:text-base lg:text-lg py-4 md:py-6 mx-2">Shop</Link>
        <p className="text-sm md:text-base lg:text-xl font-light mx-2">{'>'}</p>
        <img 
          src={verticalLine} 
          alt="Vertical Line" 
          className="hidden md:block md:w-2 md:h-8 lg:w-3 lg:h-10 mx-2"
        />
        <h2 className="text-xs md:text-sm lg:text-base font-thin mx-2">{productName}</h2>
      </div>
    </nav>
  );
}
