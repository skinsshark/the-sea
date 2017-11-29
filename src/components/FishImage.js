import React, { Component } from 'react';

class FishImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
  }

  handleImageErrored() {
    this.setState({ loaded: false });
  }

  render () {
    const { name, className } = this.props;
    const basicProps = {
      alt: name,
    };
    const imageURL = require("../images/fish/" + name + ".png");
    let styleClass = className ? className + ' img img-fish' : 'img img-fish';

    if (this.state.loaded) {
      styleClass += ' img-loaded';
      if (name === 'mudskipper') {
        styleClass += ' mudskipper';
      }
    }

    return (
        <img src={imageURL}
          alt={name}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
          className={styleClass}
          {...basicProps}
        />
    );
  }
}

export default FishImage;
