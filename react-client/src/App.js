/* eslint-disable jsx-a11y/no-distracting-elements */
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Boxes from './componets/Boxes';
import Delivery from './componets/Delivery';
import Breadlist from './componets/Breadlist';
import Cakelist from './componets/Cakelist';
import Pielist from './componets/Pielist';
import Donutlist from './componets/Donutlist';
import Training from './componets/Training';
import Header from './componets/Header.js';
import Footer from './componets/Footer';
import Menu from './componets/Menu';
import Team from './componets/Team';
import Order from './componets/Order';
import Enroll from './componets/Enroll';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {};
      };
    render() {
        return (
            <div>
            <div>
            <Router>
                <div className = "App" >
                   <Route  exact path="/" render={props=>(
                       <div>
                       <Header/>
                       <div className="clr"></div>
                      <marquee>CHECK US OUT! Shop D41 Mami Market, Army Barrack, Point Road, Apapa,Lagos</marquee>
                       <Delivery/>
                       <div className="clr"></div>
                       <Boxes/>
                       <div className="clr"></div>
                       <Training/>
                       <div className="clr"></div>
                       <Footer/>
                       </div>
                   )}/>
                   <Route path="/menu" render={props =>(
                       <Menu/>
                   )}/>
                   <Route path="/team" render={props =>(
                       <Team/>
                   )} />
                  
                <Route path="/bread" render={props =>(
                    <Breadlist/>
                )} />      
                <Route path="/cake" render={props =>(
                    <Cakelist/>
                )} />   
                <Route path="/pie" render={props =>(
                    <Pielist/>
                )} />  
                <Route path="/donut" render={props =>(
                    <Donutlist/>
            )} />
                <Route path="/order" render={props =>(
                    <Order/>
                )} />    
                <Route path="/enroll" render={props =>(
                    <Enroll/>
            )} />     
                        </div> 
            </Router>
             
        </div>
            </div>
        )
    }
}
