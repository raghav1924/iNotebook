const express=require('express');
const User = require('../models/User');
const routes=express.Router();


// Create a user using : POST "api/auth" doesnot require Auth
routes.post('/',(req,res)=>{
    const user=User(req.body);
    user.save();
    console.log(user);
    res.json(user);
})

module.exports=routes;