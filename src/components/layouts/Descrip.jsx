import React from 'react';
import '../../styles/Descrip.css'
const Descrip = () => {
    return (
        <div>

<main class="container">
    <div class="container-fluid caracteristicaContenedor">
        <div class="row">
            <div class="col-sm-3" className='texto'></div>
            <div class="col-sm-6">
            <div className="card">
  <div className="card__title">
    <div className="icon">
      <a href="#"><i className="fa fa-arrow-left" /></a>
    </div>
    <h3>New products</h3>
  </div>
  <div className="card__body">
    <div className="half">
      <div className="featured_text">
        <h1>Nurton</h1>
        <p className="sub">Office Chair</p>
        <p className="price">$210.00</p>
      </div>
      <div className="image">
        <img src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg" alt="" />
      </div>
    </div>
    <div className="half">
      <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
      </div>
      <span className="stock"><i className="fa fa-pen" /> In stock</span>
      <div className="reviews">
        <ul className="stars">
          <li><i className="fa fa-star" /></li>
          <li><i className="fa fa-star" /></li>
          <li><i className="fa fa-star" /></li>
          <li><i className="fa fa-star" /></li>
          <li><i className="fa fa-star-o" /></li>
        </ul>
        <span>(64 reviews)</span>
      </div>
    </div>
  </div>
  <div className="card__footer">
    <div className="recommend">
      <p>Recommended by</p>
      <h3>Andrew Palmer</h3>
    </div>
    <div className="action">
      <button type="button">Add to cart</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
<div class="col-sm-3" className='texto'></div>
</main>
        </div>
    );
}

export default Descrip;
