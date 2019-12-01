import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import img1 from '../img/b.jpg';
import img2 from '../img/im5.jpg';
import img3 from '../img/mp.jpg';
import img4 from '../img/mm.jpg';
import img5 from '../img/im16.jpg';
  
export default class Menu extends Component {

    render() {
        return (    
    
            <div>
                <Header/>
            <div className="container">
            <div className="row mt-5 mb-auto">
           <Link to="/bread" className="col-md-2 ml-auto mb-4 menu meb ">
           <img src={img1} alt="img1"/>
              <p>Bread</p> 
              <p><button className="btn btn-danger"> View List</button></p>
            </Link>
            <Link to="/cake" className="col-md-2 ml-auto mb-4 menu meb">
                <img src={img2} alt="img1"/>
               <p> Cakes</p>
               <p><button className="btn btn-danger"> View List</button></p>
            </Link>
            <Link to="/pie" className="col-md-2 ml-auto mb-4 menu meb">
            <img src={img3} alt="img1"/>
              <p>  Pie</p>
              <p><button className="btn btn-danger"> View List</button></p>
                </Link>
            <Link to="/donut" className="col-md-2 ml-auto mb-4 menu meb">
            <img src={img4} alt="img1"/>
              <p>  Donut and Egg Roll</p>
              <p><button className="btn btn-danger"> View List</button></p>
                </Link>
            <Link to="/chinchin" className="col-md-2 ml-auto mb-4 menu meb">
            <img src={img5} alt="img1"/>
              <p>  Chin Chin</p>
              <p><button className="btn btn-danger"> View List</button></p>
                </Link>
            </div>
     
            </div>
                <Footer/>
            </div>
        )
    }
}
