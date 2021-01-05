import React from 'react';
import galleryPhoto from '../public/main-images/horizonal-img.jpg';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <a className="main-gallery-photo">
        <div className="gallery-photo-wrapper">
          <img src={verticalGalleryImg}></img>
        </div>
      </a>
      <a className="main-gallery-photo">
        <div className="gallery-photo-wrapper">
          <img src={verticalGalleryImgTwo}></img>
        </div>
      </a>
      <a className="main-gallery-photo">
        <div className="gallery-photo-wrapper">
          <img src={verticalGalleryImg}></img>
        </div>
      </a>
      <a className="main-gallery-photo">
        <div className="gallery-photo-wrapper">
          <img src={verticalGalleryImgTwo}></img>
        </div>
      </a>
    </div>
  )
}

export default Gallery;
