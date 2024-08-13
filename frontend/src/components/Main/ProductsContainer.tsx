import Product, { ProductType } from "./Product";

type ProductsContainerProps = {
  currentSection: number; 
  filterValue: number; 
  products: ProductType[];
};

function ProductsContainer({ currentSection, filterValue, products }: ProductsContainerProps) {
  const startIndex = (currentSection - 1) * filterValue;
  const endIndex = startIndex + filterValue;
  const filteredProducts = products.slice(startIndex, endIndex);

  const showProducts = filteredProducts.map((product, index) => (
    <Product
      key={index}
      price={product.price}
      image={product.image}
      name={product.name}
      title={product.title}
      discount={product.discount}
    />
  ));

  return (
    <div className="h-[calc(100%-8vmax)] w-full flex justify-center items-start box-border pt-[10px]">
      <div className="w-[94%] flex justify-evenly items-center flex-wrap gap-[3%]">
        {showProducts}
      </div>
    </div>
  );
}

export default ProductsContainer;
