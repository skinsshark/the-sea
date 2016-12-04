import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap';

class FishImage extends React.Component {
  render () {
    const { name } = this.props;
    const basicProps = {
      alt: name,
    };
    const imageURL = "app/images/fish/" + name + ".png";

    return (
        <img src={imageURL}
          {...basicProps}
        />
    );
  }
}

export default FishImage;
