import React, { useState } from "react";

const Card = ({ key, collection, title, image, imageTxt, artist }) => {
  return (
    <section className="card-container">
      <div className="card" key={key}>
        <img className="card-image" src={image} alt={imageTxt} />
        <p className="card-text">{collection}</p>
      </div>
      <div className="card-content">
        <p className="card-content-title">{title}</p>
        <p className="card-content-info">
          {artist} &#8226; {collection}{" "}
        </p>
      </div>
    </section>
  );
};

export default Card;
