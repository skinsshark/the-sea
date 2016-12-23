import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap';

class FishImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
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
    const imageURL = "app/images/fish/" + name + ".png";
    var styleClass = className ? className + ' img' : 'img';
    if (this.state.loaded) {
      styleClass += ' img-loaded';
    }

    return (
        <img src={imageURL}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          className={styleClass}
          {...basicProps}
        />
    );
  }
}

export default FishImage;
