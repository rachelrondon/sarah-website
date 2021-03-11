import React from "react";
//import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
//import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="main-gallery-photo">
        <img src="" alt="image of mixed media artwork"></img>
        <div className="gallery-txt">
          <p className="gallery-title">MIXED MEDIA</p>
          <a className="link" href="/mixed-media" target="_blank">
            view gallery
          </a>
        </div>
      </div>
      <div className="main-gallery-photo">
        <img src="" alt="image of a collage"></img>
        <div className="gallery-txt">
          <p className="gallery-title">COLLAGE</p>
          <a className="link" href="/collage" target="_blank">
            view gallery
          </a>
        </div>
      </div>
      <div className="main-gallery-photo">
        <img src="" alt="image of an oil painting"></img>
        <div className="gallery-txt">
          <p className="gallery-title">OIL PAINTING</p>
          <a className="link" href="/oil-paintings" target="_blank">
            view gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
