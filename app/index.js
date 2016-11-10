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
        {/* TODO: change link */}
          <h1><a href="#">the illustrated encyclopedia of fish</a></h1>
        </header>
        <main>
          <Row className="show-grid">
            <Fish name="asian-arowana"/>
            <Fish name="rainbow-trout"/>
            <Fish name="bluefin-tuna"/>
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
            <Fish name="mahi-mahi"/>
            <Fish name="asian-catfish"/>
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
