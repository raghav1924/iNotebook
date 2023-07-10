const express=require('express');
const User = require('../models/User');
const {body,validationResult} =require('express-validator');
const routes=express.Router();


// Create a user using : POST "api/auth/createUser" doesnot require Auth
routes.post('/createUser',[
    body('name','Name should be more then 3 length').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Password Should be more then 5').isLength({min:5})
    
],async(req,res)=>{
  // IF THERE IS A ERROR , RETURN BAD REQUEST AND THE ERROR
    const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send({ errors: result.array() });
  }
  // CHECK WETHER THE USER WITH THIS EMAIL EXISTS ALREADY 
  try {
  
  let user = await User.findOne({email:req.body.email})
  console.log(user);
  if(user){
    return res.status(400).json({error:"SORRY THIS EMAIL ID ALREADY EXISTS!"})
  }  
    
  // CREATE A NEW USER
  user=await User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  })

  
  
  // .then(user=> res.json(user))
  // .catch(err=>{
  //   console.log(err);
  //   res.json({"error":"Enter a differnt Email ID ","message":err.message});
  // })
  
  res.send(user); 
    
} catch (error) {
    console.error(error.message);
    res.status(500).send("SOME ERROR OCCURED");
}


})

module.exports=routes;