import React from 'react';
import flower from '../public/main-images/flower-one.jpg';


const Main = () => {
    return(
      <div className="main">
        <div className="content-wrapper">
          <div className="content">
            <h1 className="h1">SARAH RONDON</h1>
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
