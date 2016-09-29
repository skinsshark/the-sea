import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap';

class Fish extends React.Component {
  render () {
    const { name } = this.props;
    const basicProps = {
      alt: name,
    };
    const imageURL = "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-9/12249813_1086012711439358_6608414893079548960_n.jpg?oh=49a8e005f262d3ef1f3c2b9640263405&oe=587AF613";

    return (
      <Col xs={12} md={3}>
        <img src={imageURL} {...basicProps} />
      </Col>
    );
  }
}

export default Fish;
