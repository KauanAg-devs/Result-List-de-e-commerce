import { Link } from "react-router-dom";

export default function HeaderGeneralLinks() {
  return (
   <div className="w-40 lg:w-[45vmax] relative flex justify-evenly">
     <Link to={'/'} className="text-black text-1dot2vmax not-italic font-medium leading-custom">Home</Link>
     <Link to={'/shop'} className="text-black text-1dot2vmax not-italic font-medium leading-custom">Shop</Link>
     <Link to={'/about'}className="text-black text-1dot2vmax not-italic font-medium leading-custom">About</Link>
     <Link to={'/contact'} className="text-black text-1dot2vmax not-italic font-medium leading-custom">Contact</Link>
   </div>
  )
}