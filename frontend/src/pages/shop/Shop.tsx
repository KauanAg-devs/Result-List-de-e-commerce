import '../../index.css';
import './shop.css'
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Main from './components/Main';
import Footer from '../../components/Footer/Footer';
import { QualityBar } from '../../components/QualityBar/QualityBar';

function App() {
  return (
    <div className="bg-white flex items-center flex-col w-[90%] h-[200%]">
     <Header/>
     <Navigation
       title='Shop'
       items={[
         {title: 'Home', link: '/.'}, 
         {title: 'Shop', link: '/shop'},
       ]}
     />
     <Main/>
     <QualityBar />
     <Footer/>
    </div>
  );
}

export default App;