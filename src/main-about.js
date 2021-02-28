import React from 'react';

const MainAbout = ({image}) => {
    return(
      <div className="about-container">
        <div className="about">
          <img src={image} alt="_blank" alt="image of artwork"></img>
          <div className="main-about-content">
            <h2>ABOUT THE ARTIST</h2>
            <p>Sarah Rondon graduated from SUNY New Paltz</p>
          </div>
        </div>
      </div>
    )
  }

export default MainAbout;
