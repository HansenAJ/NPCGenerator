import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddTrait extends Component {

    render(){
        return(
            <div>
                Here Is The Update View
                <Link to={{
                    pathname: "/"
                    }}
                    className='linkbutton'>
                    Home
                </Link>
            </div>
        )
    }
}