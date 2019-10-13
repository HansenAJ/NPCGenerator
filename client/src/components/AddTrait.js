import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddTrait extends Component {

    state = {
        newTrait: {},
        selectTrait: 'fname'
    }
    

    inputHandler = (evnt) => {
        let updateItem = {...this.state.newTrait}
        updateItem[evnt.target.name] = evnt.target.value
        this.setState({ newTrait: updateItem })
        console.log(updateItem[evnt.target.name])
      }

    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addTrait(this.state.newTrait)
    }

    changeSelect = (evnt) => {
        document.getElementById('traitInput').setAttribute('name', evnt.target.value)
        this.setState( {selectTrait: evnt.target.value} )
    }
  addTrait= (data) => {
    //let dummyinput = {fname: 'dummyinput'}
    console.log("SelectTrait: ", this.state.selectTrait)
    fetch(`/api/${this.state.selectTrait}/`, 
        { method  : "POST"
        , headers : { "Content-Type": "application/json" }
        , body    : JSON.stringify(data)
        }).then(document.getElementById('traitInput').value = '')
    }

    render(){
        return(
            <div className='addTrait'>
                <Link to={{
                    pathname: "/"
                    }}
                    className='linkButton'>
                    Home
                </Link>
                <h2 className="traitText">Add New Item</h2>
                <form method = "POST" onSubmit={this.handleSubmit}>
                    <select name="" onChange={this.changeSelect}>
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
                    <label className="traitText"> Input Trait </label>
                    <input type="text" name="fname" placeholder="New Trait Here" onChange={this.inputHandler} id='traitInput'/>
                    <input type="submit" value="Add New Trait" className='linkButton'/>
                </form>
            </div>            
        )
    }
}