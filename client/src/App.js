import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './views/Main'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
