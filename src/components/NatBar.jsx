import React from 'react';
import logoRash from '../imagenes/logoChico1.png';
import FormSearch from './FormSearch';
import Secciones from './secciones';



const NatBar = () => {
  return (
    <div>
      
      <nav className="banner navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> 
    <div className='logoRash'>
        <img 
        src={logoRash} 
        alt='logo de Rash' />
    </div> </a>
{/*     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> */}
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">

        <Secciones />
      </ul>
    <FormSearch />
    </div>
  </div>
</nav>

    </div>
  );
}

export default NatBar;
