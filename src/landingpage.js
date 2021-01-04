import React from 'react';
import NavBar from './navbar.js';
import landingPagePhoto from '../public/art-supplies.png';
import getMessyPhoto from '../public/get-messy-logo.png';
import mainImageOne from '../public/main-images/main-image-one.jpg';
import mainImageTwo from '../public/main-images/main-image-two.jpg';
import galleryPhoto from '../public/main-images/horizonal-img.jpg';
import verticalGalleryImg from '../public/main-images/vertical-gallery-img.jpg';
import verticalGalleryImgTwo from '../public/main-images/vertical-gallery-img-two.jpg';
import horizontalImg from "../public/main-images/horizontal-img.jpg";
import {Link} from 'react-router-dom';
import {Player} from 'video-react';


export default function LandingPage() {
  return (
      <div className="landing-page">
          <div className="content-wrapper">
            <div className="content">
              <h1 className="h1">Art & Ceramics</h1>
              <p className="sub-title">Sarah Rondon Gallery Site</p>
            </div>
          </div>
          <a href="/gallery" className="gallery">
            <img className="gallery-photo rotate" src={galleryPhoto} alt="art photo" />
          </a>
          <div className="content-wrapper">
            <div className="content">
              <h2 className="gallery-title">Gallery</h2>
              <p className="gallery-content">Photographs of ceramics, painting, and sketch</p>
              <div className="content-imgs">
                <div className="img-container-one">
                  <img src={verticalGalleryImg}></img>
                  <p className="img-title">Oil Paintings</p>
                </div>
                <div className="img-container-two">
                  <img src={verticalGalleryImgTwo}></img>
                  <p className="img-title">Collages</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}
