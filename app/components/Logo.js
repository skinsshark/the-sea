import React from 'react';
import FishImage from './FishImage';

class Logo extends React.Component{

  render () {
    return (
      <a href="http://skinsshark.github.io/the-sea">
        <FishImage name="logo" />
      </a>
    );
  }
}

export default Logo;
