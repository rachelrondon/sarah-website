import React from 'react';
import NavBar from './navbar.js';
import landingPagePhoto from '../public/art-supplies.png';
import getMessyPhoto from '../public/get-messy-logo.png';
import mainImageOne from '../public/main-images/main-image-one.jpg';
import mainImageTwo from '../public/main-images/main-image-two.jpg';
import galleryPhoto from '../public/main-images/gallery-two.png';
import {Link} from 'react-router-dom';
import {Player} from 'video-react';


export default function LandingPage() {
  return (
      <div className="landing-page">
          <div className="landing-page-video-div">
            <video className="langing-page-video" autoPlay loop muted>
              <source  type="video/mp4" />
            </video>
          </div>
          <a href="/gallery" className="gallery">
            <img className="gallery-photo rotate" src={galleryPhoto} alt="art photo" />
            <h2 className="gallery-title">GALLERY</h2>
          </a>
          <div className="landing-page-details">
            <h2 className="title">FEATURED</h2>
            <a target="_blank" href="https://getmessyart.com/artist/">
              <img className="featured-logo" src={getMessyPhoto} alt="get messy photo" />
            </a>
          </div>
      </div>
  )
}
