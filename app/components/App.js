import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Fish from './Fish';
import Logo from './Logo';

// TODO: remove all .DS_Stores

class App extends React.Component {
  constructor( props ) {
    super(props);
    this.state = { loaded: null };
  }

  handleImageLoaded() {
    this.setState({ loaded: true });
    console.log("loaded kids");
  }

  handleImageErrored() {
    this.setState({ loaded: false });
  }

  render () {
    const { className } = this.props;
    var styleClass = className ? className + ' img page-wrapper' : 'img page-wrapper';
    if (this.state.loaded) {
      styleClass += ' img-loaded';
    }
    return (
      <div
      onLoad={this.handleImageLoaded.bind(this)}
      onError={this.handleImageErrored.bind(this)}
      className={styleClass}>
        <Grid>
          <header>
            <h1><Logo /></h1>
          </header>
          <main className="container main-container">
            <Row className="show-grid">
              <Fish name="red-coris-wrasse"/>
              <Fish name="sockeye-salmon"/>
              <Fish name="indo-pacific-sailfish"/>
              <Fish name="giant-snakehead"/>
            </Row>
            <Row className="show-grid">
              <Fish name="mudskipper"/>
              <Fish name="four-horn-sculpin"/>
              <Fish name="sloanes-viperfish"/>
              <Fish name="giant-gourami"/>
            </Row>
            <Row className="show-grid">
              <Fish name="blue-ram-cichlid"/>
              <Fish name="mahi-mahi"/>
              <Fish name="yellowtail-kingfish"/>
              <Fish name="yellow-boxfish"/>
            </Row>
            <Row className="show-grid">
              <Fish name="atlantic-mackerel"/>
              <Fish name="bluefin-tuna"/>
              <Fish name="asian-catfish"/>
              <Fish name="black-sea-bass"/>
            </Row>
            <Row className="show-grid">
              <Fish name="wels-catfish"/>
              <Fish name="tiger-queen-anthias"/>
              <Fish name="barracuda"/>
              <Fish name="asian-arowana"/>
            </Row>
            <Row className="show-grid">
              <Fish name="star-sturgeon"/>
              <Fish name="rainbow-trout"/>
              <Fish name="blue-parrotfish"/>
              <Fish name="paraya"/>
            </Row>
            <Row className="show-grid">
              <Fish name="goblin-shark"/>
              <Fish name="humpback-anglerfish"/>
              <Fish name="goliath-grouper"/>
              <Fish name="stoplight-loosejaw"/>
            </Row>
            <Row className="show-grid">
              <Fish name="hogfish"/>
              <Fish name="crocodile-icefish"/>
              <Fish name="atlantic-halibut"/>
              <Fish name="pirhana"/>
            </Row>
            <Row className="show-grid">
              <Fish name="blue-marlin"/>
              <Fish name="mangrove-snapper"/>
              <Fish name="alligator-gar"/>
              <Fish name="flying-gurnard"/>
            </Row>
            <Row className="show-grid">
              <Fish name="european-pilchard"/>
              <Fish name="bonito"/>
              <Fish name="orange-spotted-sunfish"/>
            </Row>
          </main>
        </Grid>
        <footer>
          <p>c/2016 sunday desert</p>
          <p><small>the illustrated encyclopedia of fish is</small></p>
        </footer>
      </div>
    );
  }
}

export default App;
