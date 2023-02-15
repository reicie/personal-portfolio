import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/navbar';
import HeroComponent from './components/hero/hero';

function App() {
  return (
    <div className="App"> 
    <NavbarComponent/>
    <HeroComponent/>
    </div>
  );
}

export default App;