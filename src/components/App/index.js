import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Jumbotron>
          <h1>About</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </Jumbotron>
      </div>
    )
  }
}

export default App
