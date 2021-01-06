import React from 'react';
import galleryPhoto from '../public/main-images/horizonal-img.jpg';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <a href="/oil-paintings" className="main-gallery-photo" target="_blank">
          <img src={verticalGalleryImgTwo}></img>
          <div className="gallery-txt">
            <p className="gallery-title">Oil Painting</p>
          </div>
      </a>
      <a href="/mixed-media" className="main-gallery-photo" target="_blank">
          <img src={verticalGalleryImg}></img>
          <div className="gallery-txt">
            <p className="gallery-title">Mixed Media</p>
          </div>
      </a>
      <a href="/collage" className="main-gallery-photo" target="_blank">
          <img src={verticalGalleryImg}></img>
          <div className="gallery-txt">
            <p className="gallery-title">Collage</p>
          </div>
      </a>
    </div>
  )
}

export default Gallery;
