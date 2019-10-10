import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddTrait extends Component {

    state = {
        newTrait: {}
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
    }
  addTrait= (data) => {
    //let dummyinput = {fname: 'dummyinput'}
    fetch(`/api/fname/`, 
        { method  : "POST"
        , headers : { "Content-Type": "application/json" }
        , body    : JSON.stringify(data)
        })
    }

    render(){
        return(
            <div>
                <h2>Add New Item</h2>
                <form method = "POST" onSubmit={this.handleSubmit}>
                    <select name="" onChange={this.changeSelect}>
                        {/* <option defaultValue>Choose Trait Type</option> */}
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                        <option value="race">Race</option>
                    </select>
                    <label>Input Trait</label>
                    <input type="text" name="fname" placeholder="New Trait Here" onChange={this.inputHandler} id='traitInput'/>
                    <input type="submit" value="Add New Trait" className='button'/>
                </form>
                <Link to={{
                    pathname: "/"
                    }}
                    class='linkbutton'>
                    Home
                </Link>
            </div>            
        )
    }
}