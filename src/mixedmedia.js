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
        <img src={mixedMediaOne} alt="image of mixed-media artwork" />
        <img src={mixedMediaTwo} alt="image of mixed-media artwork" />
        <img src={mixedMediaThree} alt="image of mixed-media artwork" />
        <img src={mixedMediaFour} alt="image of mixed-media artwork" />
        <img src={mixedMediaFive} alt="image of mixed-media artwork" />
        <img src={mixedMediaSix} alt="image of mixed-media artwork" />
        <img src={mixedMediaSeven} alt="image of mixed-media artwork" />
        <img src={mixedMediaEight} alt="image of mixed-media artwork" />
        <img src={mixedMediaNine} alt="image of mixed-media artwork" />
        <img src={mixedMediaTen} alt="image of mixed-media artwork" />
        <img src={mixedMediaEleven} alt="image of mixed-media artwork" />
      </div>
    </div>
  )
}

export default MixedMedia;
