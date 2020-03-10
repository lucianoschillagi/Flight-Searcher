import React, { Component } from 'react';
import './App.css';

import { 
        BrowserRouter as Router,
        Route, 
        Switch, 
        Redirect 
      } from "react-router-dom"

import Welcome from './Components/WelcomePage';
import Search from './Components/SearchPage';
import Flights from './Components/FlightsPage';

class App extends Component {

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/flights" component={Flights} />
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default App;
