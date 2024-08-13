import './index.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import QualityBar from './components/QualityBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navigation/>
     <Main/>
     <QualityBar/>
     <Footer/>
    </div>
  );
}

export default App;