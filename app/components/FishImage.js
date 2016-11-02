import React from 'react';
import { render } from 'react-dom';
import { Col } from 'react-bootstrap';
import Modal from 'react-modal';

class FishImage extends React.Component {
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

  render () {
    const { name } = this.props;
    const basicProps = {
      alt: name,
    };
    const imageURL = "app/images/" + name + ".png";

    return (
      <span>
        <img src={imageURL} onClick={this.openModal}
          {...basicProps}
        />
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
          <img src={imageURL} />
        </Modal>
      </span>
    );
  }
}

export default FishImage;
