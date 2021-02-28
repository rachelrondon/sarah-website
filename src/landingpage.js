import React from 'react';
import Hero from './hero.js';
import MainGallery from './main-gallery.js';
import MainAbout from './main-about.js';
import Filter from './filter.js';
import Collection from './collection.js';

// mixed media images //
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

// oil paiting images
import oilPaintingOne from '../public/gallery-photos/oil-paintings/ACS_0146.jpg';
import oilPaintingTwo from '../public/gallery-photos/oil-paintings/ACS_0147.jpg';
import oilPaintingThree from '../public/gallery-photos/oil-paintings/ACS_0148.jpg';
import oilPaintingFour from '../public/gallery-photos/oil-paintings/ACS_0149.jpg';
import oilPaintingFive from '../public/gallery-photos/oil-paintings/ACS_0150.jpg';
import oilPaintingSix from '../public/gallery-photos/oil-paintings/ACS_0152.jpg';
import oilPaintingSeven from '../public/gallery-photos/oil-paintings/ACS_0153.jpg';
import oilPaintingEight from '../public/gallery-photos/oil-paintings/ACS_0165.jpg';
import oilPaintingNine from '../public/gallery-photos/oil-paintings/ACS_0166.jpg';
import oilPaintingTen from '../public/gallery-photos/oil-paintings/ACS_0167.jpg';
import oilPaintingEleven from '../public/gallery-photos/oil-paintings/ACS_0171.jpg';
import oilPaintingTwelve from '../public/gallery-photos/oil-paintings/ACS_0174.jpg';
import oilPaintingThirteen from '../public/gallery-photos/oil-paintings/ACS_0175.jpg';
import oilPaintingFourteen from '../public/gallery-photos/oil-paintings/ACS_0176.jpg';
import oilPaintingFifteen from '../public/gallery-photos/oil-paintings/ACS_0178.jpg';
import oilPaintingSixteen from '../public/gallery-photos/oil-paintings/ACS_0180.jpg';
import oilPaintingSeventeen from '../public/gallery-photos/oil-paintings/ACS_0181.jpg';
import oilPaintingEighteen from '../public/gallery-photos/oil-paintings/ACS_0182.jpg';
import oilPaintingNineteen from '../public/gallery-photos/oil-paintings/ACS_0183.jpg';
import oilPaintingTwenty from '../public/gallery-photos/oil-paintings/ACS_0184.jpg';
import oilPaintingTwentyOne from '../public/gallery-photos/oil-paintings/ACS_0193.jpg';
import oilPaintingTwentyTwo from '../public/gallery-photos/oil-paintings/ACS_0198.jpg';
import oilPaintingTwentyThree from '../public/gallery-photos/oil-paintings/ACS_0204.jpg';
import oilPaintingTwentyFour from '../public/gallery-photos/oil-paintings/ACS_0205.jpg';
import oilPaintingTwentyFive from '../public/gallery-photos/oil-paintings/IMG_1541.PNG';

// collage images
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

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImage: collagePhotoSeven,
      aboutImage: collagePhotoTwo,
      collection: [
        {
          id: 1,
          collection: "Oil Paintings",
          title: "Oil Paintings Collection",
          image: oilPaintingOne,
          imageTxt: "oil paintings collection"
        },
        {
          id: 2,
          collection: "Mixed Media",
          title: "Mixed Media Collection",
          image: mixedMediaOne,
          imageTxt: "mixed media collection"
        },
        {
          id: 3,
          collection: "Collage",
          title: "Collage Collection",
          image: collagePhotoOne,
          imageTxt: "collage collection"
        },
      ],
      data: [
        {
          id: 1,
          collection: "Oil Paintings",
          title: "Oil Paintings One",
          image: oilPaintingOne,
          imageTxt: "oil-painting",
        },
        {
          id: 2,
          collection: "Oil Paintings",
          title: "Oil Paintings Two",
          image: oilPaintingTwo,
          imageTxt: "oil-painting",
        },
        {
          id: 3,
          collection: "Oil Paintings",
          title: "Oil Paintings Three",
          image: oilPaintingThree,
          imageTxt: "oil-painting",
        },
        {
          id: 4,
          collection: "Oil Paintings",
          title: "Oil Paintings Four",
          image: oilPaintingFour,
          imageTxt: "oil-painting",
        },
        {
          id: 5,
          collection: "Oil Paintings",
          title: "Oil Paintings Five",
          image: oilPaintingFive,
          imageTxt: "oil-painting",
        },
        {
          id: 6,
          collection: "Oil Paintings",
          title: "Oil Paintings Six",
          image: oilPaintingSix,
          imageTxt: "oil-painting",
        },
        {
          id: 7,
          collection: "Oil Paintings",
          title: "Oil Paintings Seven",
          image: oilPaintingSeven,
          imageTxt: "oil-painting",
        },
        {
          id: 8,
          collection: "Oil Paintings",
          title: "Oil Paintings Eight",
          image: oilPaintingEight,
          imageTxt: "oil-painting",
        },
        {
          id: 9,
          collection: "Oil Paintings",
          title: "Oil Paintings Nine",
          image: oilPaintingNine,
          imageTxt: "oil-painting",
        },
        {
          id: 10,
          collection: "Oil Paintings",
          title: "Oil Paintings Ten",
          image: oilPaintingTen,
          imageTxt: "oil-painting",
        },
        {
          id: 11,
          collection: "Oil Paintings",
          title: "Oil Paintings Eleven",
          image: oilPaintingEleven,
          imageTxt: "oil-painting",
        },
        {
          id: 12,
          collection: "Oil Paintings",
          title: "Oil Paintings Twelve",
          image: oilPaintingTwelve,
          imageTxt: "oil-painting",
        },
        {
          id: 13,
          collection: "Oil Paintings",
          title: "Oil Paintings Thirteen",
          image: oilPaintingThirteen,
          imageTxt: "oil-painting",
        },
        {
          id: 14,
          collection: "Oil Paintings",
          title: "Oil Paintings Fourteen",
          image: oilPaintingFourteen,
          imageTxt: "oil-painting",
        },
        {
          id: 15,
          collection: "Oil Paintings",
          title: "Oil Paintings Fifteen",
          image: oilPaintingFifteen,
          imageTxt: "oil-painting",
        },
        {
          id: 16,
          collection: "Oil Paintings",
          title: "Oil Paintings Sixteen",
          image: oilPaintingSixteen,
          imageTxt: "oil-painting",
        },
        {
          id: 17,
          collection: "Oil Paintings",
          title: "Oil Paintings Seventeen",
          image: oilPaintingSeventeen,
          imageTxt: "oil-painting",
        },
        {
          id: 18,
          collection: "Oil Paintings",
          title: "Oil Paintings Eighteen",
          image: oilPaintingEighteen,
          imageTxt: "oil-painting",
        },
        {
          id: 19,
          collection: "Oil Paintings",
          title: "Oil Paintings Nineteen",
          image: oilPaintingNineteen,
          imageTxt: "oil-painting",
        },
        {
          id: 20,
          collection: "Oil Paintings",
          title: "Oil Paintings Twenty",
          image: oilPaintingTwenty,
          imageTxt: "oil-painting",
        },
        {
          id: 21,
          collection: "Oil Paintings",
          title: "Oil Paintings TwentyOne",
          image: oilPaintingTwentyTwo,
          imageTxt: "oil-painting",
        },
        {
          id: 22,
          collection: "Oil Paintings",
          title: "Oil Paintings TwentyTwo",
          image: oilPaintingTwentyTwo,
          imageTxt: "oil-painting",
        },
        {
          id: 23,
          collection: "Oil Paintings",
          title: "Oil Paintings TwentyThree",
          image: oilPaintingTwentyThree,
          imageTxt: "oil-painting",
        },
        {
          id: 24,
          collection: "Oil Paintings",
          title: "Oil Paintings TwentyFour",
          image: oilPaintingTwentyFour,
          imageTxt: "oil-painting",
        },
        {
          id: 25,
          collection: "Oil Paintings",
          title: "Oil Paintings TwentyFive",
          image: oilPaintingTwentyFive,
          imageTxt: "oil-painting",
        },
        {
          id: 26,
          collection: "Collage",
          title: "Collage One",
          image: collagePhotoOne,
          imageTxt: "collage",
        },
        {
          id: 27,
          collection: "Collage",
          title: "Collage Two",
          image: collagePhotoTwo,
          imageTxt: "collage",
        },
        {
          id: 28,
          collection: "Collage",
          title: "Collage Three",
          image: collagePhotoThree,
          imageTxt: "collage",
        },
        {
          id: 29,
          collection: "Collage",
          title: "Collage Four",
          image: collagePhotoFour,
          imageTxt: "collage",
        },
        {
          id: 30,
          collection: "Collage",
          title: "Collage Five",
          image: collagePhotoFive,
          imageTxt: "collage",
        },
        {
          id: 31,
          collection: "Collage",
          title: "Collage Six",
          image: collagePhotoSix,
          imageTxt: "collage",
        },
        {
          id: 32,
          collection: "Collage",
          title: "Collage Seven",
          image: collagePhotoSeven,
          imageTxt: "collage",
        },
        {
          id: 33,
          collection: "Collage",
          title: "Collage Eight",
          image: collagePhotoEight,
          imageTxt: "collage",
        },
        {
          id: 34,
          collection: "Collage",
          title: "Collage Nine",
          image: collagePhotoNine,
          imageTxt: "collage",
        },
        {
          id: 35,
          collection: "Collage",
          title: "Collage Ten",
          image: collagePhotoTen,
          imageTxt: "collage",
        },
        {
          id: 36,
          collection: "Collage",
          title: "Collage Eleven",
          image: collagePhotoEleven,
          imageTxt: "collage",
        },
        {
          id: 37,
          collection: "Collage",
          title: "Collage Twelve",
          image: collagePhotoTwelve,
          imageTxt: "collage",
        },
        {
          id: 38,
          collection: "Collage",
          title: "Collage Thirteen",
          image: collagePhotoThirteen,
          imageTxt: "collage",
        },
        {
          id: 39,
          collection: "Collage",
          title: "Collage Fourteen",
          image: collagePhotoFourteen,
          imageTxt: "collage",
        },
        {
          id: 40,
          collection: "Collage",
          title: "Collage Fifteen",
          image: collagePhotoFifteen,
          imageTxt: "collage",
        },
        {
          id: 41,
          collection: "Collage",
          title: "Collage Sixteen",
          image: collagePhotoSixteen,
          imageTxt: "collage",
        },
        {
          id: 42,
          collection: "Collage",
          title: "Collage Seventeen",
          image: collagePhotoSeventeen,
          imageTxt: "collage",
        },
        {
          id: 43,
          collection: "Collage",
          title: "Collage Eighteen",
          image: collagePhotoEighteen,
          imageTxt: "collage",
        },
        {
          id: 44,
          collection: "Mixed Media",
          title: "Mixed Media One",
          image: mixedMediaOne,
          imageTxt: "mixed-media",
        },
        {
          id: 45,
          collection: "Mixed Media",
          title: "Mixed Media Two",
          image: mixedMediaTwo,
          imageTxt: "mixed-media",
        },
        {
          id: 46,
          collection: "Mixed Media",
          title: "Mixed Media Three",
          image: mixedMediaThree,
          imageTxt: "mixed-media",
        },
        {
          id: 47,
          collection: "Mixed Media",
          title: "Mixed Media Four",
          image: mixedMediaFour,
          imageTxt: "mixed-media",
        },
        {
          id: 48,
          collection: "Mixed Media",
          title: "Mixed Media Five",
          image: mixedMediaFive,
          imageTxt: "mixed-media",
        },
        {
          id: 49,
          collection: "Mixed Media",
          title: "Mixed Media Six",
          image: mixedMediaSix,
          imageTxt: "mixed-media",
        },
        {
          id: 50,
          collection: "Mixed Media",
          title: "Mixed Media Seven",
          image: mixedMediaSeven,
          imageTxt: "mixed-media",
        },
        {
          id: 51,
          collection: "Mixed Media",
          title: "Mixed Media Eight",
          image: mixedMediaEight,
          imageTxt: "mixed-media",
        },
        {
          id: 52,
          collection: "Mixed Media",
          title: "Mixed Media Nine",
          image: mixedMediaNine,
          imageTxt: "mixed-media",
        },
        {
          id: 53,
          collection: "Mixed Media",
          title: "Mixed Media Ten",
          image: mixedMediaTen,
          imageTxt: "mixed-media",
        },
        {
          id: 54,
          collection: "Mixed Media",
          title: "Mixed Media Eleven",
          image: mixedMediaEleven,
          imageTxt: "mixed-media",
        },
      ],
    }
  }

  render() {
    return (
      <div className="landing-container">
        <Hero image={this.state.heroImage} />
        <Filter data={this.state.data} />
        <MainAbout image={this.state.aboutImage} />
      </div>
    )
  }
}

export default LandingPage;
