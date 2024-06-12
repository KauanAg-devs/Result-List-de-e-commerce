import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import QualityBar from './components/QualityBar/QualityBar';

function App() {
  return (
    <div className="App">
     <Header/>
     <Navigation/>
     <Main/>
     <QualityBar/>
    </div>
  );
}

export default App;
