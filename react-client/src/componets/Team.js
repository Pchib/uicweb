import React, { Component } from 'react';
import {Teamdata} from '../data/Teamdata'
import Header from './Header.js';
import Footer from './Footer';
export default class Team extends Component {
    constructor(props){
        super(props);
        this.state={
            Teamdata
        }
    }
    render() {
        return (
            <div>
                <Header/>
                
                <div className="container ml-lg-5 row">
                    {this.state.Teamdata.map(value =><li className="col-sm-4  mt-5 " style={{textDecoration: 'none'}} key={value.id}>
                        <img style={{borderRadius:'10px'}} src={value.img} alt="9" />
                        <p>{value.name}</p>
                        <p  style={{fontSize: '1rem'}}>{value.title}</p>

                    </li>)}
                </div>
                <Footer/>
           
            </div>
        )
    }
}
