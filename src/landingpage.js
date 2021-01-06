import React from 'react';
import Main from './main.js';
import MainGallery from './main-gallery.js';
import MainAbout from './main-about.js';

export default function LandingPage() {
  return (
      <div className="landing-page">
        <Main />
        <MainAbout />
        <MainGallery />
    </div>
  )
}
