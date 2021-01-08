import React from 'react';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';
import squareFlowerTwo from '../public/main-images/square-flower-two.jpg';
import squareFlowerThree from '../public/main-images/square-flower-three.jpg';

const MainGallery = () => {
    return(
      <div className="main-gallery">
        <div className="content-wrapper">
          <div className="content">
            <div className="content-imgs">
                <div className="main-img-card" target="_blank">
                  <img src={verticalGalleryImgTwo} alt="image of mixed media artwork"></img>
                  <div className="gallery-txt">
                    <p className="gallery-title">MIXED MEDIA</p>
                    <a className="link" href="/mixed-media" target="_blank">view gallery</a>
                  </div>
                </div>
                <div className="right-column">
                  <div className="main-img-card-two">
                    <img src={squareFlowerTwo} alt="image of a collage"></img>
                    <div className="gallery-txt">
                      <p className="gallery-title">COLLAGE</p>
                      <a className="link" href="/collage" target="_blank">view gallery</a>
                    </div>
                  </div>
                  <div className="main-img-card-two">
                    <img src={squareFlowerThree} alt="image of an oil painting"></img>
                    <div className="gallery-txt">
                      <p className="gallery-title">OIL PAINTING</p>
                      <a className="link" href="/oil-paintings" target="_blank">view gallery</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default MainGallery;
