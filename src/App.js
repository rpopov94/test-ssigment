import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Head from './components/Header/Header'
import Map from './components/map/Map';
import Timer from './components/time/Time';
import Home from './components/home/Home';
import './App.css';


function App() {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
      setInterval(() => {
          setCount(c => c + 1);
      }, 1000);
  }, [ setCount ]);


  return (
    <div className="App">
      <Head/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/time' element={<Timer time={count} />} exact/>
        <Route path='/map' element={<Map/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
