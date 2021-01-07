import React from 'react';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';
import collagePhoto from '../public/gallery-photos/collage-images/always-in-this-twilight.jpg';
import squareFlowerThree from '../public/main-images/square-flower-three.jpg';
import squareFlowerTwo from '../public/main-images/square-flower-two.jpg';

const MainAbout = () => {
    return(
      <div className="main-about">
        <img src={squareFlowerThree} alt="_blank"></img>
        <div className="main-about-content">
          <h2>ABOUT THE ARTIST</h2>
          <p>Sarah Rondon graduated from SUNY New Paltz</p>
        </div>
      </div>
    )
  }

export default MainAbout;
