
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { RootState } from "../../store";
import Footer from "../../components/Footer/Footer";
import { Main } from "./components/Main";
 

export function ProductDetails(): JSX.Element {
  const productSelector = useSelector((state: RootState) => state.product);

  return (
    
    <div className="container w-[90%] flex flex-col">
      <Header />
      <Breadcrumbs productName={productSelector?.name || 'Loading...'} />
      <Main />
      <Footer style="container py-12 border-t w-full mx-auto h-full flex flex-col md:flex-row justify-around items-start" />
    </div>
  );
}
