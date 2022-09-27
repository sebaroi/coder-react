
import React from 'react';
import '../styles/App.css';
import NatBar from '../components/content/NatBar';
import Footer from '../components/content/Footer';
import Card from '../components/content/Card';
import '../styles/Card.css'
import Carrusel from '../components/content/Carrusel'





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

