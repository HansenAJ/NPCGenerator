import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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

const field = ['First Name', 'Last Name', 'Race', 'Gender', 'Alignment', "Class", 'Height', 'Weight', 'Weapon', 'Level', 'Pyshical Trait', 'Social Trait 1', 'Social Trait 2']

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
      <header className="App-header">
        <button onClick={() => this.setAllRandomFields()}>Make Me a New NPC</button>
        {traitDisplay(field[0], this.state.randomized.fname)}
        {traitDisplay(field[1], this.state.randomized.lname)}
        {traitDisplay(field[2], this.state.randomized.race)}
        {traitDisplay(field[3], this.state.randomized.gender)}
        {traitDisplay(field[4], this.state.randomized.allignment)}
        {traitDisplay(field[5], this.state.randomized.classtype)}
        {traitDisplay(field[6], this.state.randomized.height)}
        {traitDisplay(field[7], this.state.randomized.weight)}
        {traitDisplay(field[8], this.state.randomized.weapon)}
        {traitDisplay(field[9], this.state.randomized.level)}
        {traitDisplay(field[10], this.state.randomized.phystrait)}
        {traitDisplay(field[11], this.state.randomized.soctrait1)}
        {traitDisplay(field[12], this.state.randomized.soctrait2)}
        
        <Link to={{
            pathname: "/addtrait/"
            }}
            className='linkbutton'>
            Add New Trait
        </Link>
        <Link to={{
            pathname: "/updateview/",
            }}
            className='linkbutton'>
            Update View
        </Link>
      </header>
    </div>
  );
}
