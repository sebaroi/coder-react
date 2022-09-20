
import React from 'react';
import './App.css';
import NatBar from './components/NatBar';
import Footer from './components/Footer';
import Card from './components/Card';
import './components/Card.css'
import Carrusel from './components/Carrusel'





const App = () => {
  return (
    <div>
      <NatBar/>
      <Carrusel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;

