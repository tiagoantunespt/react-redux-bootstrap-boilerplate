import React from 'react'
import { connect } from 'react-redux'
import { increment, fetchInfo } from '../../actions'
import { Jumbotron, Button } from 'react-bootstrap'

const Home = props => (
  <div className='container'>
    <Jumbotron>
      <h1>Counter: {props.count}</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p>
        <Button bsStyle="primary" onClick={props.increment}>Action increment</Button>
      </p>
      <p>
        <Button bsStyle="primary" onClick={props.fetchInfo}>Ajax request using Saga</Button>
      </p>
    </Jumbotron>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment(10)),
  fetchInfo: () => dispatch(fetchInfo('123'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
