import React, { Component } from 'react';
import Header from './Header';
export default class Order extends Component {
    render() {
        return (
            <div>
                <Header/>
            <div class="container2">
                <h1 class="top-name">Place Your Order</h1>
                <div class="main">
                    <div class="expenses">
                        <form class="form pb-5" action="#" method="">
                                <article>
                                    Place fill out the form below, we will contact you within the next 48 hours to discuss your order
                              <p><small>                                    All order must be secures by a non-refundable deposit/payment.btn-danger
                                    We will contact you by e-maill or phone as soon as possible to discuss your inquiry.
                                </small></p>
                                </article>
                                
                                
                                <label class="label1 col-form-label">Name:
                                    <input className="placeholder " placeholder="E.g. Okuha Joy" id="expense" type="text" />
                                </label>
                                <p><label class="label col-form-label">Address
                                    <input class="placeholder" placeholder="E.g. No.8 Coulcrick Road, Apapa Lagos, Nigeria" id="expenseamount" type="text" required/>
                                </label></p>
                                <p><label class="label">E-maill
                                    <input class="placeholder" placeholder="E.g. ugwujoy18@yahoo.com" id="expenseamount" type="number"/>
                                </label></p>
                               <p> <label class="label">Phone Number
                                    <input class="placeholder" placeholder="E.g. +234....." id="expenseamount" type="number"/>
                                </label></p>
                              <p> <label class="label">Product
                                <select name="" class="input form-control" id="make">
                                <option value="">-select-</option>
                                <option value="Cakes">Cakes</option>
                                <option value="Bread">Bread</option>
                                <option value="Donut">Donut</option>
                                <option value="Egg roll">Egg roll</option>
                                <option value="Chin-chin">Chin-chin</option>
                               </select>
                            </label></p>
                           
                                <article>
                       {'For Cakes'} 
                  <p><small>Please give us some imformation on the {'quantit'}</small></p>  
                    </article>
                    <p><label class="label">Type
                           <select name="" class="input form-control" id="make">
                                <option value="">-select-</option>
                                <option value="Big Size">Big Size</option>
                                <option value="Small Size">Small Size</option>
                            </select>
                                </label></p>
                   <p> <label class="label1">Decription:
                                    <input class="placeholder"  id="expense" type="textarea" />
                                </label></p>
                              <p>  <input type="submit" value="Send" id="submit"/>
                                </p>
                        </form>
                    </div>
                   
               

            </div>
        </div>
    
            </div>
        )
    }
}
