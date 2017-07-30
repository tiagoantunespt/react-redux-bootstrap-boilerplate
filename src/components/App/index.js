import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Nav from '../Nav'
import Loadable from 'react-loadable'

const NotFound = () => <div className='container'>Not Found</div>

const LoadingComponent = ({isLoading, error}) => {
  if (isLoading) {
    return <div className='container'>Loading...</div>
  } else if (error) {
    return <div>An error occured loading the page.</div>
  } else {
    return null
  }
}

const LoadableComponent = Loadable({
  loader: () => import('../Async'),
  loading: LoadingComponent
})

const App = () => (
  <div>
    <header className='header'>
      <Nav />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/async" component={LoadableComponent} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App
