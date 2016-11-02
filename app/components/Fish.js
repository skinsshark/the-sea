import React from 'react';
import { Col } from 'react-bootstrap';
import FishImage from './FishImage';
import Modal from 'react-modal';

class Fish extends React.Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      open: true
    });
  }

  closeModal() {
    this.setState({
      open: false
    });
  }

  render() {
    const { name } = this.props;


    return (
      <Col xs={12} md={3}
        onClick={this.openModal}>
        <FishImage
          name={name}
        />
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
          <h1>{name}</h1>
        </Modal>
      </Col>
    )
  }
}

export default Fish;
