import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Fish from './components/Fish';
import FishImage from './components/FishImage';
import eye from './images/eye.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 4500);
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return null;
    }

    return (
      <div className="page-wrapper">
        <Grid>
          <header>
            <h1><FishImage name="logo" /></h1>
          </header>
          <main className="container main-container">
            <Row className="show-grid">
              <Fish name="diamond-trevally"/>
              <Fish name="california-sheephead"/>
              <Fish name="milkfish"/>
              <Fish name="paroon-shark"/>
            </Row>
            <Row className="show-grid">
              <Fish name="red-coris-wrasse"/>
              <Fish name="sockeye-salmon"/>
              <Fish name="indo-pacific-sailfish"/>
              <Fish name="giant-snakehead"/>
            </Row>
            <Row className="show-grid">
              <Fish name="yellowmargin-triggerfish"/>
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
              <Fish name="red-roman"/>
              <Fish name="zander"/>
              <Fish name="ballyhoo"/>
              <Fish name="rouget-barbet"/>
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
              <Fish name="flying-fish"/>
              <Fish name="alligator-gar"/>
              <Fish name="flying-gurnard"/>
            </Row>
            <Row className="show-grid">
              <Fish name="european-pilchard"/>
              <Fish name="bonito"/>
              <Fish name="orange-spotted-sunfish"/>
              <Fish name="orange-roughy"/>
            </Row>
            <Row className="show-grid">
              <Fish name="mudskipper"/>
              <Fish name="blackfin-scad"/>
              <Fish name="armored-stickleback"/>
              <Fish name="mangrove-snapper"/>
            </Row>
          </main>
        </Grid>
        <footer>
          <p>c/2017 sunday desert</p>
          <p><small>the illustrated encyclopedia of fish is a colour study piece, an educational tool, an interactive palette</small></p>
          <p><a href="http://sundaydesert.tumblr.com/" target="_blank" rel="noopener noreferrer"><img src={eye} alt="sundes secondary logo"/></a></p>
        </footer>
      </div>
    );
  }
}

export default App;
