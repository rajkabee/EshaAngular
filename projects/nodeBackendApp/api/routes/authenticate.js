const express = require('express');
const router = express.Router();
router.post('/',(req,res,next)=>{
    console.log(req.query.username);
    console.log(req.query.password);
    if(req.query.username==="user" && req.query.password==="password"){
        let body={
            id:123,
            username: "user",
            token:"0000-fake-jwt-token-0000"
        }
        res.status(200).json(body);
    }
    else 
    res.status(400).json({
        error:{
            message: "User not Found!"
        }
    });
});
module.exports=router;