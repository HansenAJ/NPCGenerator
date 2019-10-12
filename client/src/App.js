import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import AddTrait from './components/AddTrait';
import UpdateView from './components/UpdateView';

import './App.css';

class App extends Component {

  render = () =>(
    <div className="App">
      <header>
        Random NPC Generator
      </header>
      <div className="mainApp">
        <Router>
          <Switch>
          <Route exact path ="/" component={LandingPage}/>
          <Route exact path ="/addtrait" component={AddTrait}/>
          <Route exact path ="/updateview" component={UpdateView}/>
          </Switch>
        </Router>
      </div>
      <footer>
        Powered By Magic!
      </footer>
    </div>
  );
}

export default App;

