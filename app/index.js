import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Fish from './components/Fish';

// TODO: remove all .DS_Stores

class App extends React.Component {
  render () {
    return (
      <Grid>
        <header>
          <h1><a href="#"><img src="app/images/Logo.png" /></a></h1>
        </header>
        <main className="container">
          <Row className="show-grid">
            <Fish name="stoplight-loosejaw"/>
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
          </Row>
        </main>
      </Grid>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
