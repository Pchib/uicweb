import {Link} from 'react-router-dom'
import '../App.css';
import logo from '../img/logo.jpg';
import img1 from '../img/banner-bg.jpg'
import img2 from '../img/img22.jpg'
import img3 from '../img/img17.jpg'
import img4 from '../img/img6.jpg'
import img5 from '../img/img12.jpeg'
import img6 from '../img/img4.jpg'
import img7 from '../img/img1.jpg'



import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            slide : {}
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
          
       
            this.setState({
                slide:{ 
                    backgroundImage: `url(${img1})`,
                    backgroundPosition: 'center center',
                    backgroundAttachment:'fixed',
                    minHeight: '500px',
                    overflow: 'hidden',
                    backgroundSize: 'cover'} 
            })
           
        
            setTimeout(()=>{
                return  this.setState({
                    slide:{ 
                        backgroundImage: `url(${img2})`,
                        backgroundPosition: 'center center',
                        backgroundAttachment:'fixed',
                        minHeight: '500px',
                        overflow: 'hidden',
                        backgroundSize: 'cover'} 
                })
               
             }, 4000)
             setTimeout(()=>{
                return  this.setState({
                    slide:{ 
                        backgroundImage: `url(${img3})`,
                        backgroundPosition: 'center center',
                        backgroundAttachment:'fixed',
                        minHeight: '500px',
                        overflow: 'hidden',
                        backgroundSize: 'cover'} 
                })
               
             }, 8000)
             setTimeout(()=>{
                return  this.setState({
                    slide:{ 
                        backgroundImage: `url(${img4})`,
                        backgroundPosition: 'center center',
                        backgroundAttachment:'fixed',
                        minHeight: '500px',
                        overflow: 'hidden',
                        backgroundSize: 'cover'} 
                })
               
             }, 12000)
             setTimeout(()=>{
                return  this.setState({
                    slide:{ 
                        backgroundImage: `url(${img5})`,
                        backgroundPosition: 'center center',
                        backgroundAttachment:'fixed',
                        minHeight: '500px',
                        overflow: 'hidden',
                        backgroundSize: 'cover'} 
                })
               
             }, 16000)
             setTimeout(()=>{
                return  this.setState({
                    slide:{ 
                        backgroundImage: `url(${img6})`,
                        backgroundPosition: 'center center',
                        backgroundAttachment:'fixed',
                        minHeight: '500px',
                        overflow: 'hidden',
                        backgroundSize: 'cover'} 
                })
               
             }, 20000)
             setTimeout(()=>{
                return  this.setState({
                    slide:{ 
                        backgroundImage: `url(${img7})`,
                        backgroundPosition: 'center center',
                        backgroundAttachment:'fixed',
                        minHeight: '500px',
                        overflow: 'hidden',
                        backgroundSize: 'cover'} 
                })
               
             }, 24000)
       
        
        
             setInterval(this.componentDidMount, 28000)
 
    }    

    


    render() {

    
       
        return (
            <div>
                 <div> 
            <body style={this.state.slide} >
            <header>  
                {/* slide 1 */}
                <div1 className="slide">
                   <div className="banner">     
                        <section>
                            <div className="container1">
                                <div className="top1">
                                    <p className="top "> +2348160880412</p>
                                    <p className="top"> ugwuisaaciu@gmail.com</p>
                                </div>
                                <div className="clr"></div>
                            </div>
                        </section>
                        <div className="container1">
                            <div className="branding">
                                <img src={logo} alt="2"/>

                                <nav>
                                    <ul>
                                       
                                        <li><Link to="/"><span>HOME</span> </Link> </li>
                                        <li><Link to="/menu" >MENU </Link> </li>
                                        <li><Link to="/team">TEAM</Link> </li>
                                        <li><Link to="/contact">CONTACT </Link> </li>
                                    </ul>
                                    
                                </nav>
                            </div>
                            <div className="clr"></div>
                            <section className="showcase1 ">
                                <div className="container1">
                                    <p className="t1">WHENEVER WE BAKE,WE BAKE WITH OUR HEART</p>
        
                                    <h1 className="homeh">Bread Winners Bakery, Apapa, Lagos</h1>
                                    <h1 className="menuh">Menu</h1>
                                    <h1 className="teamh">TEAM</h1>
                                    <h1 className="contacth">Contact</h1>
                                    <div className="button">
                                        <Link to="/menu" className="but "><input type="button" value="CHECK OUR MENU"/></Link> 
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div1>

            </header>
            </body>
        </div>
            </div>
        )
    }
}
