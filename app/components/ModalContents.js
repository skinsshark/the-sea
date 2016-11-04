import React from 'react';

class ModalContents extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name } = this.props;
    const fishName = name.replace(/-/g, ' ');
    return (
      <h2>{fishName}</h2>
    )
  }
}

export default ModalContents;
