import React, { useState } from 'react';

const CollectionCard = ({id, collection, image, imageTxt}) => {

  return (
      <section className="collection-card-container">
        <div className="collection-card" key={id}>
          <img className="collection-image" src={image} alt={imageTxt} />
          <p className="collection-title">{collection}</p>
        </div>
      </section>
    )
}

export default CollectionCard;
