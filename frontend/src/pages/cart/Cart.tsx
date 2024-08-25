import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { QualityBar } from "../../components/QualityBar/QualityBar";
import Navigation from "../../components/Navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateProduct } from "../../shoppingCartSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import DeleteFromCart from "../../images/delete-from-cart.svg";
import { removeProduct } from "../../shoppingCartSlice";

export default function Cart(){
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state: RootState) => state.shoppingCart);
    
    const handleQuantityChange = (sku: string, quantity: number) => {
        dispatch(updateProduct({ sku, quantity }));
    }

    const handleRemoveProduct = (sku: string) => {
        dispatch(removeProduct(sku));
    };

    const totalPrice = shoppingCart.products.reduce((total, product) => {
        return total + parseFloat(product.price) * product.quantity;
    }, 0);

    return (
        <div className="container mx-auto w-[90%] flex flex-col">
            <Header
              ocult={['search', 'feedback']}
            />
            <Navigation 
                title="Cart"
                items={[
                    {title: "Shop", link: "/shop"},
                    {title: "Cart", link: "/cart"}
                ]}
            />
            <main className="flex flex-col md:flex-row h-auto px-2 py-8 w-full justify-center">
                <div className="flex flex-col md:w-[70%] items-start">
                    <div className="bg-[#f9f1e7] py-4 flex justify-between w-full px-2 text-xs md:text-base">
                      <p>Product</p>
                      <p>Price</p>
                      <p>Quantity</p>
                      <p>Subtotal</p>
                    </div>

                    {shoppingCart.products.map((product) => {
                      return (
                       <div kwey={product.sku} className="flex flex-col lg:flex-row mt-10 w-full justify-between items-center px-2">
                            <img src={product.image} alt={product.title} className="rounded-lg w-20 h-20 md:w-24 md:h-24"/>
                            <p className="text-gray-500 text-xs md:text-base mt-2 md:mt-0">{product.name}</p>
                            <p className="text-gray-500 text-xs md:text-base mt-2 md:mt-0">{formatPrice(String(parseFloat(product.price)))}</p>
                            <input 
                                type="number" 
                                min={1} 
                                className="outline-none border border-gray-300 w-16 text-center py-1 rounded-md mt-2 md:mt-0" 
                                value={product.quantity}
                                onChange={(e) => handleQuantityChange(product.sku, parseFloat(e.target.value))}
                            />
                            <p className="mt-2 md:mt-0">{isNaN((parseFloat(product.price) * product.quantity)) ? '' : formatPrice(String(parseFloat(product.price) * product.quantity))}</p>
                            <img src={DeleteFromCart} className="cursor-pointer" onClick={() => handleRemoveProduct(product.sku)} alt="delete-from-cart" />
                       </div>
                    )})}
                </div>

                <div className="mt-10 md:mt-0 md:ml-5 bg-[#f9f1e7] px-6 py-4 w-full md:w-[30%] flex flex-col items-start justify-around">
                    <p className="text-lg md:text-2xl font-medium text-center w-full">Cart Totals</p>
                    <p className="ml-6 text-sm md:text-base mt-4">Subtotal <span className="ml-4 text-sm md:text-base text-gray-500">{isNaN(totalPrice) ? '' : formatPrice(String(totalPrice))}</span></p>
                    <p className="ml-6 text-sm md:text-base">Total <span className="ml-4 text-lg text-[#b88e2f]">{isNaN(totalPrice) ? '' : formatPrice(String(totalPrice))}</span></p>
                    <div className="w-full flex justify-center mt-6">
                        <Link to="/checkout" className="border text-center border-black w-24 h-8 md:w-36 md:h-10 rounded-lg flex items-center justify-center font-base text-xs md:text-base">Check Out</Link> 
                    </div>
                </div>
            </main>
            <QualityBar/>
            <Footer
             style="container py-12 border-t w-full mx-auto h-full flex flex-col md:flex-row justify-around items-start"
            />
        </div>
    )
}
