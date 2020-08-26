import React from 'react';
import oilPaintingOne from '../public/gallery-photos/oil-paintings/ACS_0146.jpg';
import collagePhotoOne from '../public/gallery-photos/collage-images/aerial-disturbance.jpg';
import mixedMediaOne from '../public/gallery-photos/mixed-media/mixed-media-one.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-photos">
        <div className="photos-row">
          <a href="/oil-paintings" className="gallery-main-img-div">
            <img className="gallery-main-img" src={oilPaintingOne} alt="oil painting" />
            <h2 className="gallery-main-title">Oil Paintings</h2>
          </a>
          <a href="/collage" className="gallery-main-img-div">
            <img className="gallery-main-img" src={collagePhotoOne} alt="collages" />
            <h2 className="gallery-main-title">Collages</h2>
          </a>
          <a href="/mixed-media" className="gallery-main-img-div">
            <img className="gallery-main-img" src={mixedMediaOne} alt="mixed media" />
            <h2 className="gallery-main-title">Mixed Media</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
