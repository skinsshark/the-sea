import React from 'react';
import { Col } from 'react-bootstrap';
import FishImage from './FishImage';

class Fish extends React.Component {


  render() {
    const { name } = this.props;


    return (
      <Col xs={12} md={3}>
        <FishImage
          name={name}
        />
      </Col>
    )
  }
}

export default Fish;
