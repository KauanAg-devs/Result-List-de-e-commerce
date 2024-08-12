import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import QualityBar from './components/QualityBar/QualityBar';
import Footer from './components/Footer/Footer';

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
