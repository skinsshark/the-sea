import React from 'react';
import Loading from 'react-loading-bar'
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Loader from './components/Loader';
import App from './components/App';

// TODO: remove all .DS_Stores

class IEF extends React.Component {
  constructor( props ) {
    super(props);
    this.state = { show: null };
    console.log("cinstr");
  }
  onShow() {
    this.setState({ show: true });
    console.log("showing bar");
  }

  onHide(){
    this.setState({ show: false });
    console.log("hiding loader");
  }

  render () {
    const content = null;
    if (this.state.show == null) {
      const content = <App onLoad={this.onHide()}/>;
    }
    return (
      <div className="page-wrapper">
        <App/>
        {content}
      </div>
    );
  }
}

render(
  <IEF />,
  document.getElementById('app')
);
