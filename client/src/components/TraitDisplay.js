import React, { Component } from 'react'



export default class TraitDisplay extends Component {

        state = {
        }
    
        deleteFromServer = (trait, traitName, traitID) => {
            console.log("Delete Called")
            console.log("Trait: ", trait)
            console.log("Name: ", traitName)
            console.log("ID: ", traitID)
              fetch(`/api/${traitName}/${traitID}/`,
                { method  : "DELETE"
                , headers : { "Content-Type": "application/json" }
                , body    : JSON.stringify(trait)
                })
        }

    render(){
        //console.log("Trait: ", this.props.traitName)
        let traitName = this.props.traitName
        return(
            <div>
                Some text Goes Here : {this.props.trait[traitName]} ID : {this.props.trait.id}
                <br></br>
                <button onClick={() => this.deleteFromServer(this.props.trait, this.props.traitName, this.props.trait.id)}>Delete Trait</button>
            </div>
            )
    }

}