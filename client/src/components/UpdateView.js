import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TraitDisplay from "./TraitDisplay"




const getAllFromServer = (key) =>
    fetch(`/api/${key}/`)
    .then(res => res.json())


export default class UpdateView extends Component {
    state = {
        displayHolder: 'fname',
        start:{
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
            soctrait: []
        }
    }

      cacheFieldValues = (key) => (values) => {

        let start = {...this.state.start}
    
        start[key] = values
    
        this.setState({start})
      }

    componentDidMount(){
        //this.setState(this.props.location.state.parentState)
        this.setToState();
    }
    setToState = () =>
        Promise.all(
          Object.keys(this.state.start)
              .map(k =>
                  getAllFromServer(k) 
                      .then(this.cacheFieldValues(k))
              )
        )
    
        changeSelect = (evnt) => {
            let stateChange = {...this.state.start}
            console.log("StateChange Start: ", stateChange)
            stateChange.displayHolder = evnt.target.value
            console.log("StateChange End: ", stateChange)
            this.setState( stateChange )
        }

        deleteFromServer = (trait, traitName, traitID) => {
            fetch(`/api/${traitName}/${traitID}/`,
                { method  : "DELETE"
                , headers : { "Content-Type": "application/json" }
                , body    : JSON.stringify(trait)
            }).then(res => {
                this.setToState()
            })
        }
    

     
    render(){
       //let nameInput = 'lname';
       console.log("DisplayHolder: ", this.state.displayHolder)
        //console.log("State : ", this.state.fname[0].fname)
        return(
            <div>
                <Link to={{
                    pathname: "/"
                    }}
                    className='linkButton'>
                    Home
                </Link>
                <br></br>
                <select className="selectorDropdown" name="" onChange={this.changeSelect}>
                        {/* <option defaultValue>Choose Trait Type</option> */}
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                        <option value="race">Race</option>
                        <option value="allignment">Allignment</option>
                        <option value="gender">Gender</option>
                        <option value="classtype">Class</option>
                        <option value="weight">Weight</option>
                        <option value="height">Height</option>
                        <option value="phystrait">Physical Trait</option>
                        <option value="soctrait">Social Trait</option>
                        <option value="level">Level</option>
                    </select>
                <div>
                    {this.state.start[this.state.displayHolder].map(trait => (
                        <TraitDisplay trait={trait} deleteFromServer={this.deleteFromServer} traitName={this.state.displayHolder}/>
                ))}
                </div>

                
                {/* <button onClick={deleteFromServer(dummyData)}>Test Delete</button> */}
            </div>
        )
    }
}