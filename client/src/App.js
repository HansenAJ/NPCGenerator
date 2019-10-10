import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import AddTrait from './components/AddTrait';
import UpdateView from './components/UpdateView';

class App extends Component {

  render = () =>(
    <div className="App">
      <Router>
        <Switch>
        <Route exact path ="/" component={LandingPage}/>
        <Route exact path ="/addtrait" component={AddTrait}/>
        <Route exact path ="/updateview" component={UpdateView}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

