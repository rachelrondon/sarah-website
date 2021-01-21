import React from 'react';
import squareFlowerThree from '../public/main-images/square-flower-three.jpg';
import aboutImage from '../public/main-images/about-image.jpg';

const MainAbout = () => {
    return(
      <div className="main-about">
        <img src={aboutImage} alt="_blank" alt="image of artwork"></img>
        <div className="main-about-content">
          <h2>ABOUT THE ARTIST</h2>
          <p>Sarah Rondon graduated from SUNY New Paltz</p>
        </div>
      </div>
    )
  }

export default MainAbout;
