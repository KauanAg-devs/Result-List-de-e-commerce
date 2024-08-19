import '../../index.css';
import './shop.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { QualityBar } from './components/Main/QualityBar';

function App() {
  return (
    <div className="bg-white flex items-center flex-col w-[98%] h-[200%]">
     <Header/>
     <Navigation/>
     <Main/>
     <QualityBar />
     <Footer/>
    </div>
  );
}

export default App;