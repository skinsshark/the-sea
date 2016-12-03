import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Fish from './components/Fish';
import Logo from './components/Logo';

// TODO: remove all .DS_Stores

class App extends React.Component {
  render () {
    return (
      <div className="page-wrapper">
        <Grid>
          <header>
            <h1><Logo /></h1>
          </header>
          <main className="container main-container">
            <Row className="show-grid">
              <Fish name="blue-ram-cichlid"/>
              <Fish name="mahi-mahi"/>
              <Fish name="yellowtail-kingfish"/>
              <Fish name="yellow-boxfish"/>
            </Row>
            <Row className="show-grid">
              <Fish name="bonito"/>
              <Fish name="sockeye-salmon"/>
              <Fish name="red-coris-wrasse"/>
              <Fish name="giant-gourami"/>
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

render(
  <App />,
  document.getElementById('app')
);
