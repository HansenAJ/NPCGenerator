import React, { Component } from 'react'



export default class TraitDisplay extends Component {

        state = {
        }
    

    render(){
        //console.log("Trait: ", this.props.traitName)
        let traitName = this.props.traitName
        return(
            <div>
                Trait : {this.props.trait[traitName]}
                <button className='linkButton' onClick={() => this.props.deleteFromServer(this.props.trait, this.props.traitName, this.props.trait.id)}>Delete Trait</button>
            </div>
            )
    }

}