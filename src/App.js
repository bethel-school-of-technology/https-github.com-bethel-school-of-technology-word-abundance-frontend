import React from 'react';
import Navbar from './components/Navbar';
import CategoryList from './components/CategoryList';
import light from './light.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <h1 id="title">ABUNDANT</h1>
        <img src={light} className="App-light" alt="light" />
        
      </header>
    </div>
  );
}

export default App;
