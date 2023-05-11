const express = require('express');
const router = express.Router();
router.get('/',(req,res,next)=>{
    res.status(200).json(
        [
            {
                name:"SmartPhone",
                price: "34000"
            },
            {
                name: "Laptop",
                price: "105000"
            },
            {
                name: "television",
                price: "165000"
            }

        ]
    );
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: "Handling POST Request on /products"
    });
});
router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id==='special'){
        res.status(200).json({
            'message': "Special product id received...",
            'productId': id
        });
    }
    else{
        res.status(200).json({
            'message': "Products Updated....",
            'productId': id
        });
    }
});

module.exports=router;