import Product, { ProductType } from "./Product";

type ProductsContainerProps = {
    currentSection: number, 
    filterValue: number, 
    products: ProductType[]
}
function ProductsContainer({currentSection, filterValue, products}: ProductsContainerProps) {

    const startIndex = (currentSection - 1) * filterValue;
    const endIndex = startIndex + filterValue;
    const filteredProducts = products.slice(startIndex, endIndex);
  
    const showProducts = filteredProducts.map((product, index) => {
       return <Product
          key={index}
          price={product.price}
          image={product.image}
          name={product.name}
          title={product.title}
          discount={product.discount}
        />
      })

    return (
      <div id='products-container'>
        <div id='products'>
            {showProducts}
        </div>
      </div>
    )
}

export default ProductsContainer