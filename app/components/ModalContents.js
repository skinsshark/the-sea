import React from 'react';

class ModalContents extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { name } = this.props;
    // TODO: remove the hyphen
    return (
      <h2>{name}</h2>
    )
  }
}

export default ModalContents;
