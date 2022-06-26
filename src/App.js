import { Routes, Route, Switch } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import Head from './components/Header/Header'
import Map from './components/map/Map';
import Timer from './components/time/Time';
import Home from './components/home/Home';
import './App.css';


function App() {
  const [ count, setCount ] = useState(0);
  const timerRef = useRef();
  useEffect(() => {
      timerRef.current = setInterval(() => {
          setCount(c => c + 1);
      }, 1000);

      return () => {
          clearInterval(timerRef.current);
      };
  }, [ timerRef, setCount ]);


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
