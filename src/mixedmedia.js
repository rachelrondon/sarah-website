import React from 'react';
import mixedMediaOne from '../public/gallery-photos/mixed-media/mixed-media-one.jpg';
import mixedMediaTwo from '../public/gallery-photos/mixed-media/mixed-media-two.jpg';
import mixedMediaThree from '../public/gallery-photos/mixed-media/mixed-media-three.jpg';
import mixedMediaFour from '../public/gallery-photos/mixed-media/mixed-media-four.jpg';
import mixedMediaFive from '../public/gallery-photos/mixed-media/mixed-media-five.jpg';
import mixedMediaSix from '../public/gallery-photos/mixed-media/mixed-media-six.jpg';
import mixedMediaSeven from '../public/gallery-photos/mixed-media/mixed-media-seven.jpg';
import mixedMediaEight from '../public/gallery-photos/mixed-media/mixed-media-eight.jpg';
import mixedMediaNine from '../public/gallery-photos/mixed-media/mixed-media-nine.jpg';
import mixedMediaTen from '../public/gallery-photos/mixed-media/mixed-media-ten.jpg';
import mixedMediaEleven from '../public/gallery-photos/mixed-media/mixed-media-eleven.jpg';


const MixedMedia = () => {
  return (
    <div className="gallery">
      <div className="gallery-imgs">
        <img src={mixedMediaOne} alt="mixed-media" />
        <img src={mixedMediaTwo} alt="mixed-media" />
        <img src={mixedMediaThree} alt="mixed-media" />
        <img src={mixedMediaFour} alt="mixed-media" />
        <img src={mixedMediaFive} alt="mixed-media" />
        <img src={mixedMediaSix} alt="mixed-media" />
        <img src={mixedMediaSeven} alt="mixed-media" />
        <img src={mixedMediaEight} alt="mixed-media" />
        <img src={mixedMediaNine} alt="mixed-media" />
        <img src={mixedMediaTen} alt="mixed-media" />
        <img src={mixedMediaEleven} alt="mixed-media" />
      </div>
    </div>
  )
}

export default MixedMedia;
