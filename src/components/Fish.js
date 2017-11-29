import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FishImage from './FishImage';
import ModalContents from './ModalContents';
import Modal from 'react-modal';

class Fish extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
    console.log(this.state.open)
  }

  render() {
    const { name } = this.props;

    return (
      <Col xs={12} sm={6} md={3}>
        <div onClick={this.handleClick}>
          <FishImage
            name={name}
          />
        </div>
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.handleClick}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <span className="mobile-back visible-sm visible-xs glyphicon glyphicon-remove"
            aria-hidden="true"
            onClick={this.handleClick}
          ></span>
          <ModalContents name={name} />
        </Modal>
      </Col>
    );
  }
}

export default Fish;
