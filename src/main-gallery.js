import React from 'react';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';
import collagePhoto from '../public/gallery-photos/collage-images/always-in-this-twilight.jpg';
import collagePhotoTwo from '../public/gallery-photos/collage-images/my-dreams-begin-to-creep.jpg';
import renewCollage from '../public/gallery-photos/collage-images/renew.jpg';
import mixedMediaEight from '../public/gallery-photos/mixed-media/mixed-media-eight.jpg';
import mainOilPainting from '../public/gallery-photos/oil-paintings/ACS_0178.jpg';
import unknownHistoryCollage from '../public/gallery-photos/collage-images/unknown-history.jpg';
import mixedMediaEleven from '../public/gallery-photos/mixed-media/mixed-media-eleven.jpg';

const MainGallery = () => {
    return(
      <div className="main-gallery">
        <div className="content-wrapper">
          <div className="content">
            <h2 className="title">Gallery</h2>
            <p>Photographs of ceramics, painting, and mixed-media</p>

            <div className="content-imgs">
                <a href="/oil-paintings" className="main-img-card" target="_blank">
                  <img src={mixedMediaEleven}></img>
                </a>
                <a href="/oil-paintings" className="main-img-card-two" target="_blank">
                  <img src={unknownHistoryCollage}></img>
                </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default MainGallery;
