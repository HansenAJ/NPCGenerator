import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';

class App extends Component {

  render = () =>(
    <div className="App">
      <Router>
        <Switch>
        <Route exact path ="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

