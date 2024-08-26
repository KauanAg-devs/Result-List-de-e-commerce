import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { QualityBar } from "../../components/QualityBar/QualityBar";

export default function Home(){
    return (
        <div className="bg-white flex items-center flex-col w-[90%] h-[200%]">
            <Header />
            <Navigation
            items={[
                    {title: 'Home', link: '/.'},
                    {title: 'Shop', link: '/shop'}
                ]}
                title="Home"
            />
            <QualityBar/>
            <Footer />
        </div>
    )
}