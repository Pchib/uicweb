import React, { Component } from 'react';
import Header from './Header';
import img1 from '../img/enroll.jpg'

import axios from 'axios';
export default class Enroll extends Component {
    constructor(props){
        super(props)
        this.state={
            name : '',
            address:'',
            email : '',
            phone : '',
            learn : '',
            message :'',
            messtyle:{},
            backimage: { backgroundImage: `url(${img1})`,
            backgroundPosition: 'center center',
            backgroundAttachment:'fixed',
            minHeight: '500px',
            overflow: 'hidden',
            color: 'black',
            backgroundSize: 'cover'

            }

        }
        this.fname = this.fname.bind(this);
        this.faddress = this.faddress.bind(this);
        this.femail = this.femail.bind(this);
        this.fphone = this.fphone.bind(this);
        this.flearn = this.flearn.bind(this);
        this.submit = this.submit.bind(this);

    }
   
    fname(e){
        let name = e.target.value;
        this.setState({
            name
        })
    }
    faddress(e){
        let address = e.target.value;
        this.setState({
            address
        })
    }
    femail(e){
        let email = e.target.value;
        this.setState({
            email
        })
    }
    fphone(e){
        let phone = e.target.value;
        this.setState({
            phone
        })
    }
    flearn(e){
        let learn = e.target.value;
        this.setState({
            learn
        })
    }
    submit(e){
        e.preventDefault();
        let baseURL = process.env.baseURL || "http://localhost:4000";

        axios.post(`${baseURL}/post1`,{
            name:this.state.name,
            address:this.state.address,
            email:this.state.email,
            phone:this.state.phone,
            learn:this.state.learn
        })
        .then((res) => {
            console.log(res.data)
            if(res.data.error1){
                this.setState({
                    message:res.data.error1,
                    messtyle:{textAlign:'center','borderRadius': '7px','minHeight': '55px',display:'block ', backgroundColor :'brown ', color:'white '},
                })
                setTimeout(()=>{
                    return  this.setState({
                        message:'',
                        messtyle:{},
                    })
                } ,4000)
               
                console.log(this.state.message);   
            }else if(res.data.error){
                this.setState({
                    message:'unable to send "bad network "',
                    messtyle:{textAlign:'center','borderRadius': '7px','minHeight': '55px',display:'block ', backgroundColor :'brown ',color:'white '},
                })
                setTimeout(()=>{
                    return  this.setState({
                        message:'',
                        messtyle:{},
                    })
                } ,4000)
            }else if(res.data.info){
                this.setState({
                    message:'Message Sent, Will Contact You In The Next 24 Hours',
                    messtyle:{textAlign:'center','borderRadius': '7px','minHeight': '55px',display:'block', backgroundColor :'green '},
                })
                setTimeout(()=>{
                    return  this.setState({
                        message:'',
                        messtyle:{},
                    })
                } ,4000)
            }
                else{
                    this.setState({
                        message:'An error occured ',
                        messtyle:{textAlign:'center','borderRadius': '7px','minHeight': '55px',display:'block ', backgroundColor :'brown ',color:'white '},
                    })
                    setTimeout(()=>{
                        return  this.setState({
                            message:'',
                            messtyle:{},
                        })
                    } ,4000)

                }
         
        })
    }
    render() {
        return (
            <div>
                <Header/>
            <div className="container2 " >
                <h1 className="top-name">Place Your Order</h1>
                <div className="main " style={this.state.backimage}>
                 <div className="pt-4 pb-4" style={{backgroundColor :'rgba(189, 192, 204, 0.219)',   paddingRight: '20px'
                }} >
                    <div className="expenses">
                        <form className="form pb-5" action="#" method="">
                                <article>
                                    Place fill out the form below, we will contact you within the next 48 hours to discuss your Request
                                </article>
                                
                                
                            <label className="label1 col-form-label">Name:
                                <input 
                                className="placeholder form-control " 
                                placeholder="E.g. Okuha Joy" 
                                id="expense" 
                                type="text" 
                                onChange={this.fname}
                                />
                            </label>
                                <p><label className="label col-form-label">Address
                                    <input 
                                    className="placeholder form-control" 
                                    placeholder="E.g. No.8 Coulcrick Road, Apapa Lagos, Nigeria"
                                     id="expenseamount"
                                      type="text" 
                                      onChange={this.faddress}
                                      required
                                      />
                                </label></p>
                                <p><label className="label">E-maill
                                    <input
                                     className="placeholder form-control" 
                                     placeholder="E.g. ugwujoy18@yahoo.com" 
                                     id="expenseamount" 
                                     type="text"
                                     onChange={this.femail}
                                     />
                                </label></p>
                               <p> <label className="label">Phone Number
                                    <input 
                                    className="placeholder form-control"
                                     placeholder="E.g. +234....."
                                      id="expenseamount"
                                       type="number"
                                       onChange={this.fphone}
                                       />
                                </label></p>
                                <label className="label1 col-form-label">What do you want to learn:
                                <input
                                 className="placeholder form-control" 
                                 placeholder="E.g. Cake" 
                                 id="expense"
                                  type="text"
                                  onChange={this.flearn}
                                   />
                        </label>
                           
                         
                              <p>  <input
                               type="submit" 
                               value="Send" 
                               id="submit"
                               onClick={this.submit}
                               />
                                </p>
                        <div className=" pt-3 mess" style={this.state.messtyle}>
                            {this.state.message}
                    </div>
                        </form>
                    </div>
                   
               
               </div>
            </div>
        </div>
    
            </div>
        )
    }
}
