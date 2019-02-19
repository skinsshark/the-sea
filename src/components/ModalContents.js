import React, { Component } from 'react';
import data from '../data.json';
import FishImage from './FishImage';
import sizeImage from '../images/size.png';
import weightImage from '../images/weight.png';

class ModalContents extends Component {
  render() {
    const { name } = this.props;
    const fishName = name.replace(/-/g, ' ');
    const { colours, weight, size, sci } = data.fish[name];

    return (
      <div className="modal-wrapper">
        <FishImage name={name} />
        <p className="fish-names">
          <span className="en-fish">{fishName}</span> {sci}
        </p>
        <div className="details">
          <ul className="schemes">
            {colours.map((name, i)=>{
              return <li key={i} style={{backgroundColor: name}} className="scheme"></li>;
            })}
          </ul>
          <div className="facts">
            <div className="fact-details">
              <img src={weightImage} alt={`weight of ${name} is ${weight}`} /><span className="weight">{weight}</span>
              <br className="visible-mobile"/>
              <img src={sizeImage} alt={`size of ${name} is ${size}`} /><span>{size}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContents;
