import React from 'react'
import MainNavbar from './components/Navbar'
import Home from './components/Home'
import Scorekeep from './components/Scorekeep'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Router>
    <MainNavbar />
      <Route exact path='/'><Home /></Route>
      <Route exact path='/scorekeep'><Scorekeep /></Route>
    </Router>
    </div>
  )
}

export default App