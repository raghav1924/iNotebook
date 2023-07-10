const express=require('express');
const routes=express.Router();
const {body,validationResult} =require('express-validator');

routes.get('/',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5})
    
],(req,res)=>{
    console.log(req.body);
    res.json([]);
})

module.exports=routes;