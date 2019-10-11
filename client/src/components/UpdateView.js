import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TraitDisplay from "./TraitDisplay"




const getAllFromServer = (key) =>
    fetch(`/api/${key}/`)
    .then(res => res.json())


export default class UpdateView extends Component {
    state ={
        displayHolder: 'fname',
        fname: [{fname: 'demo', id: 1}],
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

    cacheFieldValues = (key) => (values) => {
        let tempHolder;
        let idHolder;
        let stateHolder = {...this.state}
        for(let x in values){
            // console.log("Values: ", values)
            // console.log("ID : ", values[x].id)
            idHolder = values[x].id
            tempHolder = {[key]: values[x][key], id: idHolder}
            // console.log("Temp:", tempHolder)
            stateHolder[key].push(tempHolder)
        }
        this.setState({stateHolder})
    }

    componentDidMount(){
        //this.setState(this.props.location.state.parentState)
        this.setToState();
    }
    setToState = () =>
        Promise.all(
          Object.keys(this.state)
              .map(k =>
                  getAllFromServer(k) 
                      .then(this.cacheFieldValues(k))
              )
        )
    

     
    render(){
       let nameInput = 'fname';
        //console.log("State : ", this.state.fname[0].fname)
        return(
            <div>
                Here Is The Update View
                <Link to={{
                    pathname: "/"
                    }}
                    className='linkbutton'>
                    Home
                </Link>
                <div>
                    {/* Some Text {this.state.fname[1]} */}
                    {this.state[nameInput].map(trait => (
                        <TraitDisplay trait={trait} traitName={nameInput}/>
                ))}
                </div>

                
                {/* <button onClick={deleteFromServer(dummyData)}>Test Delete</button> */}
            </div>
        )
    }
}