import { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { QualityBar } from "../../components/QualityBar/QualityBar";
import { InputForm } from "./components/InputForm";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

export function Checkout() {
    const shoppingCart = useSelector((state: RootState) => state.shoppingCart);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [, setLoading] = useState(false);

    const fetchAddress = async (cep: string) => {
        setLoading(true);
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();            
            if (data && !data.erro) {
                setValue("streetAddress", data.logradouro);
                setValue("locality", data.localidade);
                setValue("province", data.uf);
                setValue("countryRegion", "Brasil");
                setValue("addOnAddress", data.complemento);
            }
        } catch (error) {
            console.error("Erro ao buscar o endereço", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, "");
        if (cep.length === 8) {
            fetchAddress(cep);
        }
    };
    

    const onSubmit = (data: object) => {
        console.log(data);
    };

    return (
        <div className="bg-white flex items-center flex-col w-[90%] h-[200%]">
            <Header ocult={['feedback', 'search']} />
            <Navigation 
                title="Checkout"
                items={[
                    { title: "Home", link: "/" },
                    { title: "Checkout", link: "/checkout" }
                ]}
            />
            <main className="w-full mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row justify-around">
                    <div className="flex-1">
                        <p className="text-3xl font-normal mb-4">Billing Details</p>
                        <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
                            <InputForm 
                                register={register}
                                errors={errors}
                                inputName="First name"
                                requiredText="First name is required"
                            />
                            <InputForm
                                register={register}
                                errors={errors}
                                inputName="Last name"
                                requiredText="Last name is required"
                            />
                        </div>
                        <InputForm
                            register={register}
                            errors={errors}
                            inputName="Company Name (Optional)"
                            requiredText=""
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputName="ZIP Code"
                            requiredText="ZIP Code is required"
                            onChange={handleCepChange} 
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputRegisterName="countryRegion"
                            inputName="Country / Region"
                            requiredText="Country/Region is required"
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputRegisterName="streetAddress"
                            inputName="Street address"
                            requiredText="Street address is required"
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputRegisterName="locality"
                            inputName="Town / City"
                            requiredText="Town/City is required"
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputRegisterName="province"
                            inputName="province"
                            requiredText="Province is required"
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputRegisterName="addOnAddress"
                            inputName="Add-on address"
                            requiredText=""
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputName="Email address"
                            requiredText="Email is required"
                        />
                        <InputForm
                            register={register}
                            errors={errors}
                            inputName="Additional information"
                            requiredText=""
                        />
                    </div>
                    <div className="w-[25%] h-[100%]">
                        <div className="h-2/3 border-b border-gray-300 flex justify-between items-center mb-3">
                            <div id="product" className="h-full w-auto py-2">
                                <p className="text-lg">Product</p>
                                {shoppingCart.products.map(product => (
                                    <p key={product.name} className="text-sm text-gray-500 py-2">
                                        {product.name}<span className="text-black"> x {product.quantity}</span>
                                    </p>
                                ))}
                                <p className="py-2">Subtotal</p>
                                <p>Total</p>
                            </div>
                            <div id="subtotal" className="w-auto py-2">
                                <p className="text-lg">Subtotal</p>
                                {shoppingCart.products.map(product => (
                                    <p key={product.name} className="py-2 text-sm">
                                        {formatPrice(String(parseFloat(product.price) * product.quantity))}
                                    </p>
                                ))}
                                <p className="text-sm py-2">
                                    {formatPrice(String(shoppingCart.products.reduce((acc, product) => acc + (parseFloat(product.price) * product.quantity), 0)))}
                                </p>
                                <p className="text-lg font-semibold text-[#b88e2f] py-2">
                                    {formatPrice(String(shoppingCart.products.reduce((acc, product) => acc + (parseFloat(product.price) * product.quantity), 0)))}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-3">
                                <div className="bg-black rounded-full h-3 w-3 mr-3"></div>
                                <p>Direct Bank Transfer</p>
                            </div>
                            <p className="text-sm text-gray-400 font-thin mb-6">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                            </p>
                            <div className="flex items-center mb-3">
                                <div className="border border-gray-500 rounded-full h-3 w-3 mr-3"></div>
                                <p className="text-gray-500">Direct Bank Transfer</p>
                            </div>
                            <div className="flex items-center mb-3">
                                <div className="border border-gray-500 rounded-full h-3 w-3 mr-3"></div>
                                <p className="text-gray-500">Cash On Delivery</p>
                            </div>
                            <p className="text-sm font-thin">
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span>
                            </p>
                        </div>
                        <div className="flex justify-center mt-4 mb-4">
                            <button type="submit" className="border border-black w-[45%] h-14 rounded-md">Place order</button>
                        </div>
                    </div>
                </form>
            </main>
            <QualityBar />
            <Footer style="py-12 border-t w-full flex flex-col md:flex-row justify-around items-start" />
        </div>
    );
}
