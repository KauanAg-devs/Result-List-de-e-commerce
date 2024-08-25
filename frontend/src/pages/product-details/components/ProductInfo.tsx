import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { addProduct } from "../../../shoppingCartSlice";
import verticalLine from '../../../images/Line 5.svg';
import { TagsList } from "./TagList";
import { ProductType } from "../../shop/components/Main/Product";
import { ProductDetailsType } from "./Main";
import { formatPrice } from "../../../utils/formatPrice";

type ProductInfoProps = {
  product: ProductType;
  productDetails: ProductDetailsType;
  setShowShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
  quantity: number;
};

export function ProductInfo({ product, productDetails, setShowShoppingCart }: ProductInfoProps): JSX.Element {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<FormValues>({ defaultValues: { quantity: 1 } });

  const handleAddProductToCart = (data: FormValues) => {
    dispatch(addProduct({ ...product, quantity: data.quantity }));
    setShowShoppingCart(prev => !prev);
  };

  const [,, categoryName, color, size] = productDetails.sku.split('-');

  return (
    <section className="relative flex left-10 flex-col mt-8 text-start w-full max-w-2xl">
      <p className="text-sm md:text-3xl font-thin">{product.name}</p>
      <p className="text-sm md:text-lg text-gray-500">{formatPrice(product.price)}</p>

      <div className="flex w-full items-center">
        <p className="text-sm md:text-lg mr-2"> ⭐⭐⭐⭐⭐</p>
        <img
          src={verticalLine}
          alt="Vertical Line"
          className="mr-2 hidden lg:block md:block w-2 h-8 md:w-2.5 md:h-12 lg:w-3 lg:h-8"
        />
        <p className="text-xs md:text-sm text-nowrap text-gray-500">5 Customer Reviews</p>
      </div>

      <p className="text-xs md:text-sm font-thin">{productDetails.description}</p>

      <form onSubmit={handleSubmit(handleAddProductToCart)} className="mt-4">
        <p className="text-sm text-gray-400">Size</p>
        <button type="button" className="rounded-md bg-[#f9f1e7] px-2 py-2">{size}</button>
        <p className="text-sm mt-4 text-gray-400">Color</p>
        <button type="button" style={{backgroundColor: color}} className="h-8 w-8 rounded-full"></button>

        <div className="flex w-52 justify-evenly items-center mt-4">
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                min={1}
                {...field}
                className="outline-none border border-gray-300 w-16 text-center py-1 rounded-md"
              />
            )}
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Add To Cart</button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-4">
        <p>SKU: {productDetails.sku}</p>
        <p>Category: {categoryName.toLocaleLowerCase()}</p>
        <TagsList tags={productDetails.tags} />
      </div>
    </section>
  );
}
