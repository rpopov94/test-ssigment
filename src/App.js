import { Routes, Route, HashRouter } from "react-router-dom";
import { HashRouter as Router} from "react-router-dom";
import Head from './components/Header/Header'
import Map from './components/map/Map';
import Timer from './components/time/Time';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Head/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/time' element={<Timer/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>
    </div>
  );
}

export default App;
