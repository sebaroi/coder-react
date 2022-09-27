import React from 'react';
import '../../styles/Card.css'

const Card = () => {
    return (
        <div>
            <div className="card">
  <div className="imgBox">
    <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" className="mouse" />
  
  </div>
  <div className="contentBox">
    <h3>Mouse Corsair M65</h3>
    <h2 className="price">$ 648.<small>98</small> </h2>
    <a href="#" className="descripcion">Descripcion</a>
  </div>
</div>

        </div>
    );
}

export default Card;
