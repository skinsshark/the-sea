import React from 'react';
import Row from './Row.jsx'

class GridFrame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div className="container">
        <Row numOf={1} />
      </div>
    );
  }

}

export default GridFrame;
