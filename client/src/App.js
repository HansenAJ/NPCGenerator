import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import AddTrait from './components/AddTrait';

class App extends Component {

  render = () =>(
    <div className="App">
      <Router>
        <Switch>
        <Route exact path ="/" component={LandingPage}/>
        <Route exact path ="/addtrait" component={AddTrait}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

