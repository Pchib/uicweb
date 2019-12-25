import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img1 from '../img/im5.jpg';
import img2 from '../img/im22.jpg';
import img3 from '../img/im20.jpg';
import img4 from '../img/im15.jpg';

export default class Boxes extends Component {
    render() {
        return (
            <div>
                <section className="boxes">
        <div className="container1">
            <div>
                    
            <h1 className="bt1 mb-4"><b>Category of available items</b> </h1>
            <p className="bt0 mb-5 ">They are grilling celebrities in their own right.</p>
            <div className="row">
            <div className=" col-md-6 meb ">
                <img src={img1} alt="1"/>
                <h2 className="bt3 mt-5"style={{fontSize: '25px'}}><b>Cake</b></h2>
                <p className="bt2"style={{fontSize: '20px', color: '#777'}}>Cakes for all occasion</p>
                <p className="bt2" style={{fontSize: '20px', color: '#777'}}>Butter Cream & Fondant Icing Available</p>
            <Link to="/cake"  ><button className="btn mb-5" style={{color: 'white' }}>More...</button></Link> 
            </div>
            <div className=" col-md-6 meb mt-3">
            <img src={img2} alt="2"/>
                <h2 className="bt3 mt-5"style={{fontSize: '25px'}} ><b>Bread</b></h2>
                <p  className="bt2"style={{fontSize: '20px', color: '#777'}}>Different Types and Variety of bread</p>
                <p className="bt2" style={{fontSize: '20px', color: '#777'}}>With Brand New Flavour</p>
                <Link to="/bread"  ><button className="btn mb-5" style={{fontSize: '20px', color: 'white'}} >More...</button></Link> 
            </div>
            </div>
            <div className="row mt-3">
            <div className=" col-md-6 meb mt-3">
            <img src={img3} alt="3"/>
                <h2 className="bt3 mt-5"style={{fontSize: '25px'}}><b>Pie</b></h2>
                <p  className="bt2"style={{fontSize: '20px', color: '#777'}}>Pies With Awesome Taste</p>
                <p className="bt2" style={{fontSize: '20px', color: '#777'}}>Chicken & Meat Pie Available</p>
            <Link to="/pie"  ><button className="btn mb-5"style={{fontSize: '20px', color: 'white'}}>More... </button></Link>
            </div>
                <div className=" col-md-6 meb mt-3">
                <img src={img4} alt="4"/>
                    <h2 className="bt3 mt-5"style={{fontSize: '25px'}}><b>Chin-Chin</b></h2>
                    <p  className="bt2"style={{fontSize: '20px', color: '#777'}}>Rich Chinny Chops</p>
                    <p  className="bt2"style={{fontSize: '20px', color: '#777'}}>Available in different sizes and packaging</p>
                    <Link to="/chinchin"  > <button className="btn mb-5" style={{color: 'white' }}>More...</button></Link>
                </div>
            </div>
         
            </div>

            <div className="clr"></div>
            <Link to="/menu"><button className="btold" style={{color: 'white' }}>View Full Menu</button></Link>

        </div>
    </section>
            </div>
        )
    }
}
