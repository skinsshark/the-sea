import React from 'react';
import { Col } from 'react-bootstrap';
import FishImage from './FishImage';
import ModalContents from './ModalContents';
import Modal from 'react-modal';

class Fish extends React.Component {
  constructor() {
    super();
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
      <Col xs={12} sm={6} md={3}
        onClick={this.openModal}>
        <FishImage
          name={name}
        />
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal}
        className="modal-content"
        overlayClassName="modal-overlay">
          <span className="mobile-back visible-sm visible-xs glyphicon glyphicon-remove"
          aria-hidden="true"
          onClick={this.closeModal}></span>
          <ModalContents name={name} />
        </Modal>
      </Col>
    );
  }
}

export default Fish;
