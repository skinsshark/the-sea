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
        <FishImage name={name} />
        {/*<p className="sci-name">Ostracion Cubicus</p>*/}
      </div>
    )
  }
}

export default ModalContents;
