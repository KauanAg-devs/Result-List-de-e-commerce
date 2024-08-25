import { Link } from "react-router-dom";

export default function HeaderGeneralLinks() {
  return (
    <div className="w-full mx-auto flex justify-evenly items-center py-4">
      <Link to="/" className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight hover:text-gray-700">
        Home
      </Link>
      <Link to="/shop" className="sm:ml-2 text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight hover:text-gray-700">
        Shop
      </Link>
      <Link to="/about" className="sm:ml-2 text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight hover:text-gray-700">
        About
      </Link>
      <Link to="/contact" className="sm:ml-2 text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight hover:text-gray-700">
        Contact
      </Link>
    </div>
  );
}
