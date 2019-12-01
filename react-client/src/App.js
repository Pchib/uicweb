/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Boxes from './componets/Boxes';
import Delivery from './componets/Delivery';
import Breadlist from './componets/Breadlist';
import Training from './componets/Training';
import Header from './componets/Header.js';
import Footer from './componets/Footer';
import Menu from './componets/Menu';
import Team from './componets/Team';
import Contact from './componets/Contact';
import Order from './componets/Order';
import './App.css';

function App() {
    return (
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
                   <Route path="/contact" render={props =>(
                       <Contact/>
                   )} />
                   <Route path="/bread" render={props =>(
                       <Breadlist/>
                   )} />      
                   <Route path="/order" render={props =>(
                       <Order/>
                   )} />        
                        </div> 
            </Router>
             
        </div>
       
    );
}

export default App;