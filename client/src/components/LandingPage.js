import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg';
// import './App.css';

const randomSelect= (trait) => trait[Math.floor(Math.random()*(trait.length))]

const traitDisplay = (field, trait) => {
  return (
    <div>
       {field} : {trait}
    </div>
  )
}

//Pull state on did mount
//randomize each bit of state and add to second holder
//'onclick' re-calls randomizer on that field, updates state, forcing refresh

const field = ['First Name', 'Last Name', 'Race', 'Gender', 'Alignment', "Class", 'Height', 'Weight', 'Weapon', 'Level', 'Pyshical Trai', 'Social Trait 1', 'Social Trait 2']

const getRouteNameFromKey = (key) =>
      key === "socTrait1" ? "soctrait"
    : key === "socTrait2" ? "soctrait"
    : key

const getRandomFieldFromServer = (key) =>
    fetch(`/api/${getRouteNameFromKey(key)}`)
        .then(res => res.json())

export default class LandingPage extends Component {

  state = {
    start: {
      fname: ["Blast", "Squat", "Brick"],
      lname: ["HardCheese", "AbbThrust", "PunchGroin"],
      race: ["Human", "Elf", "Orc"],
      gender: ["Male", "Female", "Andro"],
      alignment: ["Op 1", "Op 2", "Op 3"],
      classtype: ["Op 1", "Op 2", "Op 3"],
      height: ["Op 1", "Op 2", "Op 3"],
      weight: ["Op 1", "Op 2", "Op 3"],
      weapon: ["Op 1", "Op 2", "Op 3"],
      level: ["Op 1", "Op 2", "Op 3"],
      pysTrait: ["Op 1", "Op 2", "Op 3"],
      socTrait1: ["Op 1", "Op 2", "Op 3"],
      socTrait2: ["Op 1", "Op 2", "Op 3"]
    },
    randomized: {
      fname: '',
      lname: '',
      race: '',
      gender: '',
      alignment: '',
      classtype: '',
      height: '',
      weight: '',
      weapon: '',
      level: '',
      pysTrait: '',
      socTrait1: '',
      socTrait2: '',
    }
  }

  componentDidMount = () => {

    this.setAllRandomFields();
    // let randomState = {...this.state.randomized}

    // for (let property1 in this.state.start) {
    //   //console.log("ObjectStatePropery = " + this.state.start[property1][0])
    // //   randomState[objState[property1][0]] = tempObj
    //     randomState[property1] = randomSelect(this.state.start[property1])
    //     console.log("rand: ", randomState)
    // }

    // this.setState({ randomized: randomState })

  }

  setAllRandomFields = () =>
      Promise.all(
        Object.keys(this.state.randomized)
            .map(k =>
                getRandomFieldFromServer(k) 
                    .then(this.cacheFieldValues(k))
                    .then(() => this.setRandomizedField(k))
            )
      )
    
  cacheFieldValues = (key) => (values) => {
      let start = {...this.state.start}

      start[key] = values;

      this.setState({start})
  }

  getRandomField = (key) => randomSelect(this.state.start[key])

  setRandomizedField = (key) => {
      let randomized = {...this.state.randomized};

      randomized[key] = this.getRandomField(key)

      this.setState({randomized})
  }


  render = () =>(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {traitDisplay(field[0], this.state.randomized.fname)}
        {traitDisplay(field[1], this.state.randomized.lname)}
        {traitDisplay(field[2], this.state.randomized.race)}
        {traitDisplay(field[3], this.state.randomized.gender)}
        {traitDisplay(field[4], this.state.randomized.alignment)}
        {traitDisplay(field[5], this.state.randomized.classtype)}
        {traitDisplay(field[6], this.state.randomized.height)}
        {traitDisplay(field[7], this.state.randomized.weight)}
        {traitDisplay(field[8], this.state.randomized.weapon)}
        {traitDisplay(field[9], this.state.randomized.level)}
        {traitDisplay(field[10], this.state.randomized.pysTrait)}
        {traitDisplay(field[11], this.state.randomized.socTrait1)}
        {traitDisplay(field[12], this.state.randomized.socTrait2)}
        <Link to={{
            pathname: "/addtrait/"
            }}
            class='linkbutton'>
            Add New Trait
        </Link>
        {/* pass props through link with react router */}
      </header>
    </div>
  );
}
