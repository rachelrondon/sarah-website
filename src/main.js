import React from 'react';
import horizontalMainImg from '../public/main-images/floral.jpg';
import dreams from '../public/gallery-photos/collage-images/my-dreams-begin-to-creep.jpg';
import air from '../public/gallery-photos/collage-images/falling-through-the-air.jpg';

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
          <img src={air}></img>
        </div>
      </div>
    )
  }

export default Main;
