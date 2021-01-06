import React from 'react';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';

const MainGallery = () => {
    return(
      <div className="main-gallery">
        <div className="content-wrapper">
          <div className="content">
            <h2 className="gallery-title">Gallery</h2>
            <p>Photographs of ceramics, painting, and sketch</p>
            <div className="content-imgs">
              <div className="img-container-one">
                <img src={verticalGalleryImg}></img>
                <p>Oil Paintings</p>
              </div>
              <div className="img-container-two">
                <img src={verticalGalleryImgTwo}></img>
                <p>Collages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default MainGallery;
