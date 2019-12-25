import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="footer">
                    <div className="container1">
                        <div className="about-us pt-5">
                            <h3><b>About Us</b> </h3>
                            <p>Factory : Shop D41 Mami Market, Army Barrack, Point Road, Apapa,Lagos </p>
                            <p>Opening Time : Monday - Saturday 9am - 10pm </p>
                        </div>
                        <div className="fotter-newsletter">
                            <h3><b>Newsletter</b></h3>
                            <p>Stay updated with our lastest</p>
                        
                        </div>
                        <div className="fotter-follow">
                            <h3><b>Follow Us</b></h3>
                            <p>Let us be social</p>
                            <div className="fa fa-facebook"></div>
                            <p>Okuoha Joseph</p>
                            <div className="fa fa-twitter"></div>
                            <p>Chiboy</p>
                            <div className="fa fa-envelope"></div>
                            <p>ugwujoy87@gmail.com</p>
                        </div>
                        <div className="clr"></div>
                        <div className="last">
                            Copyright ©2019 All rights reserved | This website is created by <b id="span">Ugwu Isaac</b> 
                        </div>
                    </div>
                    <div className="time"></div>
                </footer>
                
            </div>
        )
    }
}
