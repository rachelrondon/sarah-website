import React from 'react';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';

const MainGallery = () => {
    return(
      <div className="main-gallery">
        <div className="content-wrapper">
          <div className="content">
            <h2 className="gallery-title">Gallery</h2>
            <p>Photographs of ceramics, painting, and mixed-media</p>

            <div className="content-imgs">
                <a href="/oil-paintings" className="main-img-card" target="_blank">
                  <img src={verticalGalleryImg}></img>
                  <div className="gallery-txt">
                    <p className="gallery-title">Oil Paintings</p>
                  </div>
                </a>
                <a href="/collages" className="main-img-card" target="_blank">
                  <img src={verticalGalleryImgTwo}></img>
                  <div className="gallery-txt">
                    <p className="gallery-title">Collage</p>
                  </div>
                </a>
                <a href="/mixed-media" className="main-img-card" target="_blank">
                  <img src={verticalGalleryImgTwo}></img>
                  <div className="gallery-txt">
                    <p className="gallery-title">Mixed Media</p>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default MainGallery;
