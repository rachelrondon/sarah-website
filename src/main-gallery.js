import React from "react";
const MainGallery = () => {
  return (
    <div className="main-gallery">
      <div className="content-wrapper">
        <div className="content">
          <div className="content-imgs">
            <div className="main-img-card" target="_blank">
              <img src="" alt="image of mixed media artwork"></img>
              <div className="gallery-txt">
                <p className="gallery-title">MIXED MEDIA</p>
                <a className="link" href="/mixed-media" target="_blank">
                  view gallery
                </a>
              </div>
            </div>
            <div className="right-column">
              <div className="main-img-card-two">
                <img src="" alt="image of a collage"></img>
                <div className="gallery-txt">
                  <p className="gallery-title">COLLAGE</p>
                  <a className="link" href="/collage" target="_blank">
                    view gallery
                  </a>
                </div>
              </div>
              <div className="main-img-card-two">
                <img src="" alt="image of an oil painting"></img>
                <div className="gallery-txt">
                  <p className="gallery-title">OIL PAINTING</p>
                  <a className="link" href="/oil-paintings" target="_blank">
                    view gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
