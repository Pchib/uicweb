import React, { Component } from 'react';
import img1 from '../img/video-bg.jpg';
export default class Training extends Component {
    render() {
        return (
            <div>
                <section className="traning">
                    <div className="container1">
                        <div className="letter">
                            <h5>Training</h5>
                            <h2><b><p>Limited Space Available!</p></b></h2>
                            <button><a href="eorm">Enroll Now</a> </button>
                        </div>
                        <div className="vidimg">
                            <img src={img1} alt="1"/>
                        </div> 
                        <div className="clr"></div>
                    </div>
                </section>
            </div>
        )
    }
}
