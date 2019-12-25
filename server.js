const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT||4000;

app.use(bodyParser.json())
if(process.env.NODE_ENV ==='production'){
    app.use(express.static('react-client/build'));
    app.get('*',(req, res)=>{
      res.sendFile(path.resolve(__dirname, 'react-client', 'build', 'index.html'));
    })
}
let transport = nodemailer.createTransport({
    service : 'gmail',
    auth :{
user :process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.post('/post1',(req, res)=>{
  console.log(req.body.name)
  console.log(req.body.address)
  console.log(req.body.email)
  console.log(req.body.phone)
  console.log(req.body.learn)
  if(req.body.name===''||req.body.address ===''||req.body.email===''||req.body.phone===''||req.body.learn===''){
      res.send({
          error1:'All form field are required'
})
  }

else{ let mailOption = {
    from:'ugwuisaaciu@gmail.com',
    to:'uicsoft1@gmail.com',
    subject: `Enrollment from ${req.body.name}`,
    html : `<p><h1>${req.body.name}</h1></p>
            <p> ${req.body.address}</p>
            <p> ${req.body.email}</p>
            <p> ${req.body.phone}</p>
            <p> ${req.body.learn}</p> `
};
transport.sendMail(mailOption, (error,info)=>{
    if(info){
        console.log(info)
     res.send({
           info
        })
    }else{

        console.log(error)
        res.send({
        error
     })
    }
}) }
   
})
app.post('/post2', (req, res)=>{
    console.log(req.body.name)
  console.log(req.body.address)
  console.log(req.body.email)
  console.log(req.body.phone)
console.log(req.body.product )
console.log(req.body.type )
console.log(req.body.occasion )
console.log(req.body.description )
if(req.body.name===''||req.body.address ===''||req.body.email===''||req.body.phone===''||req.body.product===''){
    res.send({
        error1:'All form field are required'

})}
else{ let mailOption = {
    from:'uicsoft1@gmail.com',
    to:'ugwuisaaciu@gmail.com',
    subject: `Orders from ${req.body.name}`,
    html : `<p><h1>${req.body.name}</h1></p>
<p> ${req.body.address}</p>
            <p> ${req.body.email}</p>
            <p> ${req.body.phone}</p>
<p> ${req.body.product }</p>
<p> ${req.body.type }</p>
<p> ${req.body.occasion }</p>
<p> ${req.body.description }</p>`
};
transport.sendMail(mailOption, (error,info)=>{
    if(info){
        console.log(info)
     res.send({
           info
        })
    }else{

        console.log(error)
        res.send({
        error
     })
    }
}) 
}
})
app.listen(port, () => console.log(`Example app listening on port${port} !`))