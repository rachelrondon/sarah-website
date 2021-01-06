import React from 'react';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';

const MainAbout = () => {
    return(
      <div className="main-about">
        <div className="content-wrapper-callout">
            <div className="left-image">
              <img src={verticalGalleryImgTwo}></img>
            </div>
            <div className="image-card-wrapper">
              <div className="image-card">
                <h2>About The Artist</h2>
                <p className="image-card-content">Sarah Rondon graduated from SUNY New Paltz with a Bachelors of Fine Arts</p>
              </div>
          </div>
        </div>
      </div> 
    )
  }

export default MainAbout;
