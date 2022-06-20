import './App.css';
import { Routes, Route } from "react-router-dom";
import Head from './components/Header/Header'
import Map from './components/map/Map';
import Timer from './components/time/Time';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Head/>
      <Routes>
        <Route expact path='/' element={<Home/>}/>
        <Route path='/time' element={<Timer/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>
    </div>
  );
}

export default App;
