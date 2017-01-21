import data from '!json!./json/data.json';
import React from 'react';
import FishImage from './FishImage';

class ModalContents extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name } = this.props;
    const fishName = name.replace(/-/g, ' ');
    const colourCode = data.fish[name].colours;
    const fishWeight = data.fish[name].weight;
    const fishSize = data.fish[name].size;

    return (
      <div className="modal-wrapper">
        <FishImage name={name} />
        <p className="fish-names">
          <span className="en-fish">{fishName}</span> {data.fish[name].sci}
        </p>
        <ul className="schemes col-sm-6">
          {colourCode.map((name, i)=>{
            return <li key={i} style={{backgroundColor: name}} className="scheme"></li>;
          })}
        </ul>
        <div className="col-sm-6 facts">
          <div className="fact-details">
            <img src="app/images/weight.png" /><span className="weight">{fishWeight}</span>
            <br className="visible-mobile"/>
            <img src="app/images/size.png" /><span>{fishSize}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContents;
