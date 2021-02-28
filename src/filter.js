import React from 'react';
import Card from './card.js';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      showCount: 3,
      collection: 'all',
      btnText: "Load More",
      expanded: false
    }
  }

  showAll() {
    this.setState({
      collection: 'all',
      data: this.props.data,
      showCount: 3,
    })
  }

  showOilPaintings() {
    let filteredList = this.props.data.filter((item) => {
      return item.collection === "Oil Paintings";
    });
    this.setState({
      collection: "oil paintings",
      data: filteredList,
      showCount: 3,
    })
  }

  showCollage() {
    let filteredList = this.props.data.filter((item) => {
      return item.collection === "Collage";
    });
    this.setState({
      collection: "collage",
      data: filteredList,
      showCount: 3,
    })
  }

  showMixedMedia() {
    let filteredList = this.props.data.filter((item) => {
      return item.collection === "Mixed Media";
    });
    this.setState({
      collection: "mixed media",
      data: filteredList,
      showCount: 3,
    })
  }

  loadMore() {
    this.state.showCount === 3 ? (
      this.setState({
        showCount: this.state.showCount + 3,
        expanded: true,
        btnText: "Show Less"
      })
    ) : this.setState({
      showCount: 3,
      expanded: false,
      btnText: "Show More"
    })
  }


  render() {
    return (
      <section className="filter-container">
        <div className="filter-btns">
          <button onClick={this.showOilPaintings.bind(this)} className="btn">Oil Paintings</button>
          <button onClick={this.showMixedMedia.bind(this)} className="btn">Mixed Media</button>
          <button onClick={this.showCollage.bind(this)} className="btn">Collage</button>
        </div>
        <div className="filter-card-container">
          {this.state.data.slice(0, this.state.showCount).map((item) => {
            return (
              <Card
                key={item.id}
                collection={item.collection}
                title={item.title}
                image={item.image}
                imageTxt={item.imageTxt}
              />
            )
          })}
        </div>
        <div className="filter-container-btn">
          <button className="load-more-btn" onClick={this.loadMore.bind(this)}>{this.state.btnText}</button>
        </div>
      </section>
    )
  }
}

export default Filter;
