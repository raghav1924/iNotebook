const express=require('express');
const routes=express.Router();

routes.get('/',(req,res)=>{
    console.log(req.body);
    res.json([]);
})

module.exports=routes;