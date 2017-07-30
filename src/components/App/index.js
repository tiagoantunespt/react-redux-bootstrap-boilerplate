import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Nav from '../Nav'

const notFound = () => <div className='container'>Not Found</div>

const App = () => (
  <div>
    <header className='header'>
      <Nav />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={notFound} />
      </Switch>
    </main>
  </div>
)

export default App
