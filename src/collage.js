import React from 'react';

import collagePhotoOne from '../public/gallery-photos/collage-images/aerial-disturbance.jpg';
import collagePhotoTwo from '../public/gallery-photos/collage-images/always-in-this-twilight.jpg';
import collagePhotoThree from '../public/gallery-photos/collage-images/collage-photo-two.jpg';
import collagePhotoFour from '../public/gallery-photos/collage-images/collage-photo.jpg';
import collagePhotoFive from '../public/gallery-photos/collage-images/color-block.jpg';
import collagePhotoSix from '../public/gallery-photos/collage-images/common-spy.jpg';
import collagePhotoSeven from '../public/gallery-photos/collage-images/falling-through-the-air.jpg';
import collagePhotoEight from '../public/gallery-photos/collage-images/heatwave.jpg';
import collagePhotoNine from '../public/gallery-photos/collage-images/honey-and-the-Moth.jpg';
import collagePhotoTen from '../public/gallery-photos/collage-images/my-dreams-begin-to-creep.jpg';
import collagePhotoEleven from '../public/gallery-photos/collage-images/renew.jpg';
import collagePhotoTwelve from '../public/gallery-photos/collage-images/sight-and-sound.jpg';
import collagePhotoThirteen from '../public/gallery-photos/collage-images/the-night-kept-coming.jpg';
import collagePhotoFourteen from '../public/gallery-photos/collage-images/the-spell.jpg';
import collagePhotoFifteen from '../public/gallery-photos/collage-images/the-tree-in-the-mountains.jpg';
import collagePhotoSixteen from '../public/gallery-photos/collage-images/unknown-history.jpg';
import collagePhotoSeventeen from '../public/gallery-photos/collage-images/westward.jpg';
import collagePhotoEighteen from '../public/gallery-photos/collage-images/poppy-talk.jpg';

const OilPaintings = () => {
  return (
    <div className="gallery">
        <h2 className="title">Collages</h2>
        <div className="collages gallery-photos">
          <div className="photos-row">
            <img className="photo" src={collagePhotoOne} alt="collages" />
            <img className="photo" src={collagePhotoTwo} alt="collages" />
            <img className="photo" src={collagePhotoThree} alt="collages" />
            <img className="photo" src={collagePhotoFour} alt="oil painting" />
            <img className="photo" src={collagePhotoFive} alt="oil painting" />
            <img className="photo" src={collagePhotoSix} alt="oil painting" />
            <img className="photo" src={collagePhotoSeven} alt="oil painting" />
            <img className="photo" src={collagePhotoEight} alt="oil painting" />
            <img className="photo" src={collagePhotoNine} alt="oil painting" />
            <img className="photo" src={collagePhotoTen} alt="oil painting" />
            <img className="photo" src={collagePhotoEleven} alt="oil painting" />
            <img className="photo" src={collagePhotoTwelve} alt="oil painting" />
            <img className="photo" src={collagePhotoThirteen} alt="oil painting" />
            <img className="photo" src={collagePhotoFourteen} alt="oil painting" />
            <img className="photo" src={collagePhotoFifteen} alt="oil painting" />
            <img className="photo" src={collagePhotoSixteen} alt="oil painting" />
            <img className="photo" src={collagePhotoSeventeen} alt="oil painting" />
            <img className="photo" src={collagePhotoEighteen} alt="oil painting" />
          </div>
        </div>
    </div>
  )
}

export default OilPaintings;
