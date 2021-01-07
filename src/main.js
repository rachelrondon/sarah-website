import React from 'react';
import horizontalMainImg from '../public/main-images/floral.jpg';
import dreams from '../public/gallery-photos/collage-images/my-dreams-begin-to-creep.jpg';
import air from '../public/gallery-photos/collage-images/falling-through-the-air.jpg';
import flower from '../public/main-images/flower-one.jpg';


const Main = () => {
    return(
      <div className="main">
        <div className="content-wrapper">
          <div className="content">
            <h1 className="h1">Sarah Rondon</h1>
            <p>Mixed Media, Collage, Oil Painting Portfolio</p>
          </div>
        </div>
        <div className="content-wrapper">
          <img src={flower}></img>
        </div>
      </div>
    )
  }

export default Main;
