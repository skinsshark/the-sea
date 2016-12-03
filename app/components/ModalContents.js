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
    const colourCode = data.fish[name].colours;

    return (
      <div>
        <FishImage name={name} />
        <p className="fish-names">
          <span className="en-fish">{fishName}</span> {data.fish[name].sci}
        </p>
        <ul className="schemes">
          {colourCode.map(function(name, i){
            return <li key={i} style={{backgroundColor: name}} className="scheme"></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ModalContents;
