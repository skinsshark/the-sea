import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap';

class Fish extends React.Component {
  render () {
    const { name } = this.props;
    const basicProps = {
      alt: name,
    };
    const imageURL = "/src/client/images/" + name + ".png";

    return (
      <Col xs={12} md={3}>
        <img src={imageURL} {...basicProps} />
      </Col>
    );
  }
}

export default Fish;
