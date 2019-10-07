import React from 'react';
import logo from './logo.svg';
import './App.css';
import { object } from 'prop-types';


const randomSelect= (trait) => {
  console.log("Trait = " + trait)
  let randSelect = Object.values(trait[1])[Math.floor(Math.random()*(trait.length + 1))];
  console.log("RandSelect = " + randSelect)
  return randSelect
}

const traitDisplay = (field, trait) => {
  return (
    <div>
       {/* <button onClick={clickRefresh}>{field} : {randSelect}</button> */}
       {field} : {trait}
    </div>
  )
}

//Pull state on did mount
//randomize each bit of state and add to second holder
//'onclick' re-calls randomizer on that field, updates state, forcing refresh

const field = ['First Name', 'Last Name', 'Race', 'Gender', 'Alignment', "Class", 'Height', 'Weight', 'Weapon', 'Level', 'Pyshical Trai', 'Social Trait 1', 'Social Trait 2']


class App extends React.Component {

  state = {
    start: {
      firstName: ["Blast", "Squat", "Brick"],
      lastName: ["HardCheese", "AbbThrust", "PunchGroin"],
      race: ["Human", "Elf", "Orc"],
      gender: ["Male", "Female", "Andro"],
      alignment: ["Op 1", "Op 2", "Op 3"],
      class: ["Op 1", "Op 2", "Op 3"],
      height: ["Op 1", "Op 2", "Op 3"],
      weight: ["Op 1", "Op 2", "Op 3"],
      weapon: ["Op 1", "Op 2", "Op 3"],
      level: ["Op 1", "Op 2", "Op 3"],
      pysTrait: ["Op 1", "Op 2", "Op 3"],
      socTrait1: ["Op 1", "Op 2", "Op 3"],
      socTrait2: ["Op 1", "Op 2", "Op 3"]
    },
    randomized: {
      firstName: '',
      lastName: '',
      race: '',
      gender: '',
      alignment: '',
      class: '',
      height: '',
      weight: '',
      weapon: '',
      level: '',
      pysTrait: '',
      socTrait1: '',
      socTrait2: ''
    }
  }

  componentDidMount = () => {

    let objState = Object.entries(this.state.start)
    let tempObj;
    let randomState = this.state.randomized

    for (let property1 in objState) {
      tempObj = randomSelect(objState[property1])
      console.log("ObjectStatePropery = " + objState[property1][0])
      randomState[objState[property1][0]] = tempObj
    }

    this.setState({ randomState })

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

        {traitDisplay(field[0], this.state.randomized.firstName)}
        {traitDisplay(field[1], this.state.randomized.lastName)}
        {traitDisplay(field[2], this.state.randomized.race)}
        {traitDisplay(field[3], this.state.randomized.gender)}
        {traitDisplay(field[4], this.state.randomized.alignment)}
        {traitDisplay(field[5], this.state.randomized.class)}
        {traitDisplay(field[6], this.state.randomized.height)}
        {traitDisplay(field[7], this.state.randomized.weight)}
        {traitDisplay(field[8], this.state.randomized.weapon)}
        {traitDisplay(field[9], this.state.randomized.level)}
        {traitDisplay(field[10], this.state.randomized.pysTrait)}
        {traitDisplay(field[11], this.state.randomized.socTrait1)}
        {traitDisplay(field[12], this.state.randomized.socTrait2)}
      </header>
    </div>
  );
}

export default App;

