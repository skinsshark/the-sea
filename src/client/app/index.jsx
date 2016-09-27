import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  render () {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={3}>
            <img src="/src/client/images/giant-gourami.png" />
          </Col>
          <Col xs={12} md={3}>
            <img src="/src/client/images/asian-arowana.png" />
          </Col>
          <Col xs={12} md={3}>
            <img src="/src/client/images/rainbow-trout.png" />
          </Col>
          <Col xs={12} md={3}>
            <img src="/src/client/images/yellow-boxfish.png" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);
