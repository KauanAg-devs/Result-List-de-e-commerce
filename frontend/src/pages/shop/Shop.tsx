import '../../index.css';
import './shop.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white flex items-center flex-col w-full h-[200%]">
     <Header/>
     <Navigation/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;