import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Fish from './Fish.jsx'

class App extends React.Component {
  render () {
    return (
      <Grid>
      <h1>the illustrated etestncyclopedia of fish</h1>
        <Row className="show-grid">
          <Fish name="giant-gourami" />
          <Fish name="asian-arowana" />
          <Fish name="rainbow-trout" />
          <Fish name="yellow-boxfish" />
        </Row>
      </Grid>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);
