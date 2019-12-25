import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from '../img/about-img.png';
export default class Delivery extends Component {
    render() {
        return (
            <div>
               <article className="delivery">
                <div className="container1 row ">
                    <div className=" col-sm-8 " >
                        <p className="at1" style={{fontSize: '25px', color: 'black'}}>BRAND NEW FALVOUR AND RECIPE THAT WILL MAKE YOUR TASTE-BUD SMILE</p>
                        <p className="at2"style={{fontSize: '20px', color: '#777'}}>We are here to listen to you and deliver an exellence product by any means necessary</p>
                      <Link to="/order" >  <button className="btn pl-2"style={{color: 'white' }}>Place Your Order</button></Link>
                    </div>
                    <div className="col-sm-4" style={{width: '100%', }}> <img className="pull-right"  src={img} alt="kletjlg"/></div>
                </div>
                </article> 
            </div>
        )
    }
}
