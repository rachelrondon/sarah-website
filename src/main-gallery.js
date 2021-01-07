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
import squareFlower from '../public/main-images/square-flower.jpg';
import squareFlowerTwo from '../public/main-images/square-flower-two.jpg';
import squareFlowerThree from '../public/main-images/square-flower-three.jpg';
import squareFlowerFour from '../public/main-images/square-flower-four.jpg';


const MainGallery = () => {
    return(
      <div className="main-gallery">
        <div className="content-wrapper">
          <div className="content">
            <div className="content-imgs">
                <div className="main-img-card" target="_blank">
                  <img src={verticalGalleryImgTwo}></img>
                  <div className="gallery-txt">
                    <p className="gallery-title">MIXED MEDIA</p>
                    <a className="link" href="/mixed-media" target="_blank">view gallery</a>
                  </div>
                </div>
                <div className="right-column">
                  <div className="main-img-card-two">
                    <img src={squareFlowerTwo}></img>
                    <div className="gallery-txt">
                      <p className="gallery-title">COLLAGE</p>
                      <a className="link" href="/collage" target="_blank">view gallery</a>
                    </div>
                  </div>
                  <div className="main-img-card-two">
                    <img src={squareFlowerFour}></img>
                    <div className="gallery-txt">
                      <p className="gallery-title">OIL PAINTINGS</p>
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
