import React, { Component } from 'react'
import {cakedata}from '../data/cakedata'
import {Link} from 'react-router-dom'
export default class Cakelist extends Component {
    constructor(props){
        super(props)
        this.state={
            cakedata
        }

    }
    render() {
        return (
            <div>
                <ul className="row ">
                {this.state.cakedata.map(value =><li key={value.id} className="col-md-6 ml-auto mb-4">
                     <img src={value.img} alt='[1'/>
                    <p>{value.name}</p>
                    <p><strong className="ml-auto mr-1">{value.size.type1}
                    </strong></p>
                   <p> <strong className="ml-auto mb-4 mr-1">{value.size.type2}
                    </strong></p>
                  <Link to="/order"> <p><botton className="btn btn-danger">Place Your Order</botton></p></Link> 
                    
                </li>)}
                </ul>
            </div>
        )
    }
}