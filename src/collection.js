import React from 'react';
import CollectionCard from './collection-card.js';

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return (
      <section className="collection-container">
        {this.state.data.map((item) => {
          return (
            <CollectionCard
              id={item.id}
              collection={item.collection}
              image={item.image}
              imageTxt={item.imageTxt}
            />
          )
        })}
      </section>
    )
  }
}

export default Collection;
