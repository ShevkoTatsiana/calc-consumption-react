import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import {MaterialsComponent} from '../Materials/Materials';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*</header>*/}
      <MaterialsComponent/>
    </div>
  );
}

export default App;
