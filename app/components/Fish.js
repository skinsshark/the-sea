import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap';

class Fish extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('yo');
  }
  render () {
    const { name } = this.props;
    const basicProps = {
      alt: name,
    };
    const imageURL = "app/images/" + name + ".png";

    return (
      <Col xs={12} md={3}>
        <img src={imageURL}
          {...basicProps}
          onClick={this.handleClick}
        />
      </Col>
    );
  }
}

export default Fish;
