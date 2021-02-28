import React from 'react';

const Hero = ({image}) => {
    return(
      <div className="hero-container">
        <div className="content-wrapper">
          <div className="content">
            <h1 className="name">SARAH RONDON</h1>
            <p>Mixed Media, Collage, Oil Painting Portfolio</p>
          </div>
        </div>
        <div className="content-wrapper">
          <img src={image}></img>
        </div>
      </div>
    )
  }

export default Hero;
