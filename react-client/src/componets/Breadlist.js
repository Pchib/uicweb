import React, { Component } from 'react'
import {breaddata}from '../data/breaddata'
import {Link} from 'react-router-dom'
export default class Breadlist extends Component {
    constructor(props){
        super(props)
        this.state={
            breaddata
        }

    }
    render() {
        return (
            <div>
                <ul className="row ">
                {this.state.breaddata.map(value =><li key={value.id} className="col-md-6 ml-auto mb-4">
                     <img src={value.img} alt='[1'/>
                    <p>{value.name}</p>
                    <p><strong className="ml-auto mr-1">{value.size.type1}{'  '}:{'       '}
                    <small className="ml-auto  mr-5" >{value.size.price1}</small>
                    </strong></p>
                   <p> <strong className="ml-auto mb-4 mr-1">{value.size.type2}{'  '}:{'       '}
                    <small className="ml-auto mb-4 mr-5">{value.size.price2}</small>
                    </strong></p>
                  <Link to="/order"> <p><botton className="btn btn-danger">Place Your Order</botton></p></Link> 
                    
                </li>)}
                </ul>
            </div>
        )
    }
}
