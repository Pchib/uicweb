import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

import img1 from '../img/enroll.jpg'

export default class Order extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name : '',
        address:'',
        email : '',
        phone : '',
        product : '',
        type : '',
        occasion : '',
        description : '',
        message :'',
        messtyle:{},
         discake:{},
         disbread:{},
         expcake:{},

         backimage: { backgroundImage: `url(${img1})`,
            backgroundPosition: 'center center',
            backgroundAttachment:'fixed',
            minHeight: '500px',
            overflow: 'hidden',
            color: 'black',
            backgroundSize: 'cover'

            }
      };
      this.fname = this.fname.bind(this);
      this.faddress = this.faddress.bind(this);
      this.femail = this.femail.bind(this);
      this.fphone = this.fphone.bind(this);
      this.fproduct = this.fproduct.bind(this);
      this.ftype = this.ftype.bind(this);
      this.foccasion = this.foccasion.bind(this);
      this.fdescription = this.fdescription.bind(this);

      this.submit = this.submit.bind(this);
      this.productCo = this.productCo.bind(this);

    };
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
    fproduct(e){
        let product  = e.target.value;

        this.setState({
            product
        })
    }
    ftype(e){
        let type = e.target.value;

        this.setState({
            type
        })
    }
    foccasion(e){
        let occasion = e.target.value;

        this.setState({
            occasion
        })
    }
    fdescription(e){
        let description = e.target.value;

        this.setState({
            description
        })
    }
    submit(e){
        e.preventDefault();
        let baseURL = process.env.baseURL || "http://localhost:4000";

        axios.post(`${baseURL}/post2`,{
            name:this.state.name,
            address:this.state.address,
            email:this.state.email,
            phone:this.state.phone,
            product :this.state.product,
            type :this.state.type,
            occasion :this.state.occasion,
            description :this.state.description
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
    } ,4000)}else if(res.data.error){
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
            }else{
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
         
        })
    }
    
    productCo(e){
        if(e.target.value==='Cakes'){ 
            return this.setState({
                expcake:{display:'none '},
            discake:{display:'block '}
        })}else if(e.target.value==='Bread'){
            return this.setState({
            expcake:{display:'block '},
            discake:{display:'none'},
            disbread:{display:'block'}
        })}
        else if(e.target.value==='Donut'){
            return this.setState({
            expcake:{display:'block '},
            discake:{display:'none'},
            disbread:{display:'none'}
        })}
        else if(e.target.value==='Egg roll'){
            return this.setState({
            expcake:{display:'block '},
            discake:{display:'none'},
            disbread:{display:'none'}
        })}
        else if(e.target.value==='Chin-chin'){
            return this.setState({
            expcake:{display:'block '},
            discake:{display:'none'},
            disbread:{display:'none'}
        })}
    }
   
render() {
    return (
        <div>
            <Header/>
        <div className="container2 ">
            <h1 className="top-name">Place Your Order</h1>
            <div className="main"style={this.state.backimage}>
            <div className="pt-4 pb-4" style={{backgroundColor :'rgba(189, 192, 204, 0.219)',   paddingRight: '20px'
                }} >
                <div className="expenses">
                <form className="form pb-5 pr-4"  method="">
                        <article>
                            Place fill out the form below, we will contact you within the next 48 hours to discuss your order
                        <p><small>                                    All order must be secures by a non-refundable deposit/payment
                            We will contact you by e-maill or phone as soon as possible to discuss your inquiry.
                        </small></p>
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
                              onChange={this.femail}
                               type="email"
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
                        <p> <label className="label">Product
                        <select name="" onClick={this.productCo} onChange={this.fproduct }className="input form-control" id="make">
                        <option value="">-select-</option>
                        <option value="Cakes" >Cakes</option>
                        <option value="Bread" >Bread</option>
                        <option value="Donut">Donut</option>
                        <option value="Egg roll">Egg roll</option>
                        <option value="Chin-chin">Chin-chin</option>
                        </select>
                    </label></p>
                    <div className="expcake" style={this.state.expcake}>
                    <p><label className="label">Type
                    <select name="" onChange={this.ftype} className="input form-control" id="make">
                        <option value="">-select-</option>
                        <option value="Big Size">Big Size</option>
                        <option value="Small Size">Small Size</option>
                    </select>
                    </label></p>
                    </div>
                   
                    <div className="cakeform" style={this.state.discake}>
                    <article>
                    {'For Cakes'} 
                <p><small>Please give us some information on the {'quantity'}</small></p>  
                </article>
               
            <p><label className="label">Occasion 
                                <input
                                 className="placeholder form-control"
                                  placeholder="E.g Wedding"
                                   id="expenseamount"
                                    type="text"
                                    onChange={this.foccasion}
                                    />
                            </label></p>
                <p> <label className="label1">Decription:
                                <input
                                 className="placeholder form-control" 
                                  id="expense"
                                   type="textarea"
                                   onChange={this.fdescription}
                                    />
                            </label></p>
                    </div>

                    
                    <div className="breadform"style={this.state.disbread}>
                    <article>
                    {'For bread'} 
                <p><small>Please give us some information on the {'Variety '}</small></p>  
                </article>
               
            <p><label className="label">Varieties 
                                <input 
                                className="placeholder form-control" 
                                placeholder="E.g Coconut Bread "
                                 id="expenseamount"
                                  type="text"
                                  />
                            </label></p>
                
               
                    </div>
              
                        <p>  <input
                         type="submit" 
                         value="Send" 
                         id="submit"
                         onClick={this.submit}

                         />
                        </p>
                </form>
<div className=" pt-3 mess" style={this.state.messtyle}>                     
                        {this.state.message}
</div>
            </div>
            
                </div>
              
            

        </div>
    </div>
        </div>
    )
}
}
