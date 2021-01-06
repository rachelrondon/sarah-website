import React from 'react';
import horizontalMainImg from '../public/main-images/floral.jpg';

const Main = () => {
    return(
      <div className="main">
        <div className="content-wrapper">
          <div className="content">
            <h1 className="h1">Sarah Rondon</h1>
            <p>Oil Paintings, Collage, and Mixed Media Portfolio</p>
          </div>
        </div>
        <div className="content-wrapper">
          <img src={horizontalMainImg}></img>
        </div>
      </div>
    )
  }

export default Main;
