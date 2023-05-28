const express = require('express');
const router = express.Router();
router.get('/',(req,res,next)=>{
    if(req.headers.authorization==='Bearer 0000-fake-jwt-token-0000'){
        res.status(200).json({
            id:123,
            username:'pradip',
            firstName: 'pradip',
            lastName: 'poudel'
        });
    }
    else{
        res.status(401).json({
            error:{
                message: "unauthorized"
            }
        });
    }
});
module.exports=router;