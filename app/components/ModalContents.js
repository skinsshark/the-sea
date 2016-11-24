import data from '!json!./json/data.json';
import React from 'react';
import FishImage from './FishImage';
import { Row, Col } from 'react-bootstrap';

class ModalContents extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name } = this.props;
    const fishName = name.replace(/-/g, ' ');
    return (
      <div>
        <FishImage name={name} />
        // <p className="sci-name">{{scientific}}</p>
      </div>
    )
  }
}

export default ModalContents;
