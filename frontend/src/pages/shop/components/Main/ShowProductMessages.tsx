import filterImage from '../../../../images/Group 57.svg';
import verticalLine from '../../../../images/Line 5.svg'; 

type ShowProductsMessageProps = {
  productsCount: number;
};

function ShowProductsMessage({ productsCount }: ShowProductsMessageProps) {
  return (
    <div className="flex items-center justify-center md:justify-start w-1/3 md:w-full lg:w-full max-w-6xl p-4 md:p-6">
      <img 
        src={filterImage} 
        alt="Filter" 
        className="hidden lg:block md:block md:w-16 lg:w-20" 
      />
      <img 
        src={verticalLine} 
        alt="Vertical Line" 
        className="hidden lg:block md:block w-2 h-8 md:w-2.5 md:h-12 lg:w-3 lg:h-14 mx-2 md:mx-4"
      />
      <h1 className="text-sm md:text-base lg:text-lg font-light whitespace-nowrap">
        Showing 1-{productsCount} files
      </h1>
    </div>
  );
}

export default ShowProductsMessage;
