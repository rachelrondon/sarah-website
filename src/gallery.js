import React from 'react';
import galleryPhoto from '../public/main-images/horizonal-img.jpg';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';
import unknownHistoryCollage from '../public/gallery-photos/collage-images/unknown-history.jpg';
import mixedMediaEight from '../public/gallery-photos/mixed-media/mixed-media-eight.jpg';
import mainOilPainting from '../public/gallery-photos/oil-paintings/ACS_0178.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="main-gallery-photo">
          <img src={verticalGalleryImg}></img>
          <div className="gallery-txt">
            <p className="gallery-title">MIXED MEDIA</p>
            <a className="link" href="/mixed-media" target="_blank">view gallery</a>
          </div>
      </div>
      <div className="main-gallery-photo">
          <img src={verticalGalleryImgTwo}></img>
          <div className="gallery-txt">
            <p className="gallery-title">COLLAGE</p>
            <a className="link" href="/collage" target="_blank">view gallery</a>
          </div>
      </div>
      <div className="main-gallery-photo">
          <img src={verticalGalleryImgTwo}></img>
          <div className="gallery-txt">
            <p className="gallery-title">OIL PAINTING</p>
            <a className="link" href="/oil-paintings" target="_blank">view gallery</a>
          </div>
      </div>
    </div>
  )
}

export default Gallery;
