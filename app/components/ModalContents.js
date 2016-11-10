import React from 'react';
import FishImage from './FishImage';
import { Row, Col } from 'react-bootstrap';
// import { data } from './json/data.json';

class ModalContents extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name } = this.props;
    const fishName = name.replace(/-/g, ' ');
    return (
      <div>
        <h2>{fishName}</h2>
        <span className="sci-name">Ostracion Cubicus</span>
        <Row className="show-grid">
          <Col xs={12} sm={7}>
            <FishImage name={name} />
          </Col>
          <Col xs={12} sm={5}>
            more info on this side
          </Col>
        </Row>
      </div>
    )
  }
}

export default ModalContents;
