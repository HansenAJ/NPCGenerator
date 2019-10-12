import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css';


const randomSelect= (trait) => trait[Math.floor(Math.random()*(trait.length))]

// const traitDisplay = (field, trait) => {
//   return (
//     <div>
//        {field} : {trait}
//     </div>
//   )
// }

//const field = ['First Name', 'Last Name', 'Race', 'Gender', 'Alignment', "Class", 'Height', 'Weight', 'Weapon', 'Level', 'Pyshical Trait', 'First Social Trait', 'Second Social Trait']

const toSoctrait = (key) =>
      key === "soctrait1" ? "soctrait"
    : key === "soctrait2" ? "soctrait"
    : key

const getRandomFieldFromServer = (key) =>
    fetch(`/api/${toSoctrait(key)}/`)
        .then(res => res.json())

export default class LandingPage extends Component {

  state = {
    start: {
      fname: [],
      lname: [],
      race: [],
      gender: [],
      allignment: [],
      classtype: [],
      height: [],
      weight: [],
      weapon: [],
      level: [],
      phystrait: [],
      soctrait1: [],
      soctrait2: []
    },
    randomized: {
      fname: '',
      lname: '',
      race: '',
      gender: '',
      allignment: '',
      classtype: '',
      height: '',
      weight: '',
      weapon: '',
      level: '',
      phystrait: '',
      soctrait1: '',
      soctrait2: '',
    }
  }

  componentDidMount = () => {

    this.setAllRandomFields();

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

    start[key] = values.map(o => o[toSoctrait(key)]);

    this.setState({start})
  }

  getRandomField = (key) => randomSelect(this.state.start[key])

  setRandomizedField = (key) => {
      let randomized = {...this.state.randomized};

      randomized[key] = this.getRandomField(key)

      this.setState({ randomized })
  }


  render = () =>(
    <div className="App">
        <div className="mainTraitBox">
        <button className ="linkButton" onClick={() => this.setAllRandomFields()}>Make Me a New NPC</button>
          <article className="mainDisplay">
            Your NPC
            <br></br>
            <font className="traitText">{this.state.randomized.fname}</font> <font className="traitText">{this.state.randomized.lname}</font> is a level <font className="traitText">{this.state.randomized.level}</font> <font className="traitText">{this.state.randomized.race}</font> <font className="traitText">{this.state.randomized.classtype}</font> who uses a <font className="traitText">{this.state.randomized.weapon}</font>.
            <br></br>
            <font className="traitText">{this.state.randomized.fname}</font> is <font className="traitText">{this.state.randomized.gender}</font>, and are of <font className="traitText">{this.state.randomized.allignment}</font> allignment.
            <br></br>
            <font className="traitText">{this.state.randomized.fname}</font> is <font className="traitText">{this.state.randomized.height}</font> and <font className="traitText">{this.state.randomized.weight}</font> for a <font className="traitText">{this.state.randomized.race}</font>.
            <br></br>
            They are known to be <font className="traitText">{this.state.randomized.soctrait1}</font>, and it is a well kept secret that they are <font className="traitText">{this.state.randomized.soctrait2}</font>.
            <br></br>
            The thing a person would notice first about them : <font className="traitText">{this.state.randomized.phystrait}</font>.
          </article>
        </div>
        
        <Link to={{
            pathname: "/addtrait/"
            }}
            className='linkButton'>
            Add New Trait
        </Link>
        <Link to={{
            pathname: "/updateview/",
            }}
            className='linkButton'>
            Update View
        </Link>
    </div>
  );
}
