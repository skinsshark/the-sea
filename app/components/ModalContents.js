import data from '!json!./json/data.json';
import React from 'react';
import FishImage from './FishImage';
import { Row, Col } from 'react-bootstrap';

class ModalContents extends React.Component {
  constructor() {
    super();
  }

  //TODO: renderColourBlocks

  render() {
    const { name } = this.props;
    const fishName = name.replace(/-/g, ' ');

    return (
      <div>
        <FishImage name={name} />
        <p>{data.fish[name].sci}</p>
      </div>
    )
  }
}

export default ModalContents;
