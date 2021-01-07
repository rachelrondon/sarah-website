import React from 'react';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';
import collagePhoto from '../public/gallery-photos/collage-images/always-in-this-twilight.jpg';

const MainAbout = () => {
    return(
      <div className="main-about">
        <div className="content-wrapper">
          <div className="main-about-content">
            <img src={collagePhoto} alt="blank"></img>
            <div className="main-about-content-txt">
              <h2>About the Artist</h2>
              <p>Ceramics, mixed media, and oil paintings portfolio</p>
              <p>Ceramics, mixed media, and oil paintings portfolio</p>
              <p>Ceramics, mixed media, and oil paintings portfolio</p>
              <p>Ceramics, mixed media, and oil paintings portfolio</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default MainAbout;
