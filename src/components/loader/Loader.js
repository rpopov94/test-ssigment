import React from "react"
import logo from '../../images/preloader.svg';
import './loader.css';

function Loader(props){
return(
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
    );
}
export default Loader;