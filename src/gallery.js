import React from 'react';
import galleryPhoto from '../public/main-images/horizonal-img.jpg';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <a className="main-gallery-photo">
          <img src={verticalGalleryImg}></img>
          <div className="gallery-txt">
            <p className="gallery-title">Ceramics</p>
          </div>
      </a>
      <a className="main-gallery-photo">
          <img src={verticalGalleryImgTwo}></img>
          <div className="gallery-txt">
            <p className="gallery-title">Ceramics</p>
          </div>
      </a>
      <a className="main-gallery-photo">
          <img src={verticalGalleryImg}></img>
          <div className="gallery-txt">
            <p className="gallery-title">Ceramics</p>
          </div>
      </a>
      <a className="main-gallery-photo">
          <img src={verticalGalleryImg}></img>
          <div className="gallery-txt">
            <p className="gallery-title">Ceramics</p>
          </div>
      </a>
    </div>
  )
}

export default Gallery;
