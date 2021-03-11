import React from "react";
import Card from "./card.js";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      filteredData: this.props.data,
      showCount: 3,
      collection: "all",
      btnText: "Show More",
      expanded: false,
      length: 0,
      count: 2,
    };
  }

  showAll() {
    this.setState({
      colletion: "all",
      showCount: 3,
      btnText: "Show More",
      filteredData: this.props.data,
    });
  }

  showOilPaintings() {
    let filteredList = this.props.data.filter((item) => {
      return item.collection === "Oil Painting";
    });
    this.setState({
      collection: "oil painting",
      filteredData: filteredList,
      showCount: 3,
      btnText: "Show More",
    });
  }

  showCollage() {
    let filteredList = this.props.data.filter((item) => {
      return item.collection === "Collage";
    });
    this.setState({
      collection: "collage",
      filteredData: filteredList,
      showCount: 3,
      btnText: "Show More",
    });
  }

  showMixedMedia() {
    let filteredList = this.props.data.filter((item) => {
      return item.collection === "Mixed Media";
    });
    this.setState({
      collection: "mixed media",
      filteredData: filteredList,
      showCount: 3,
      btnText: "Show More",
    });
  }

  loadMore() {
    let btnText = this.state.btnText;
    let multiplesOfThree = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
    let length = this.state.filteredData.length;
    let numOfReloads = Math.round(length / 3);
    let newLength;

    this.setState({
      count: this.state.count + 1,
    });

    if (length % 3 !== 0) {
      if (multiplesOfThree.includes(length - 1)) {
        newLength = length - 1;
      } else if (multiplesOfThree.includes(length + 1)) {
        newLength = length + 1;
      }
    } else {
      newLength = length;
    }

    if (this.state.showCount === 3) {
      this.setState({
        showCount: this.state.showCount + 3,
        expanded: true,
        btnText: "Show More",
      });
    } else {
      this.setState({
        showCount: this.state.showCount + 3,
        expanded: true,
        btnText: "Show More",
      });
    }

    if (btnText === "Show Less") {
      this.setState({
        showCount: 3,
        btnText: "Show More",
      });
    }

    if (numOfReloads === this.state.count) {
      this.setState({
        btnText: "Show Less",
        count: 1,
      });
    }
    console.log(this.state.count);
    console.log(numOfReloads);
  }

  render() {
    return (
      <section className="filter-container">
        <div className="filter-btns">
          <button onClick={this.showOilPaintings.bind(this)} className="btn">
            Oil Paintings
          </button>
          <button onClick={this.showMixedMedia.bind(this)} className="btn">
            Mixed Media
          </button>
          <button onClick={this.showCollage.bind(this)} className="btn">
            Collage
          </button>
          <button onClick={this.showAll.bind(this)} className="btn">
            Show All
          </button>
        </div>
        <div className="filter-card-container">
          {this.state.filteredData
            .slice(0, this.state.showCount)
            .map((item) => {
              return (
                <Card
                  artist={this.props.artist}
                  key={item.id}
                  collection={item.collection}
                  title={item.title}
                  image={item.image}
                  imageTxt={item.imageTxt}
                />
              );
            })}
        </div>
        <div className="filter-container-btn">
          <button className="load-more-btn" onClick={this.loadMore.bind(this)}>
            {this.state.btnText}
          </button>
        </div>
      </section>
    );
  }
}

export default Filter;
