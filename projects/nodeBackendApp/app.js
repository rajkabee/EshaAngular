const express = require('express');
const productRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/orders');
const allowedOrigins = ['http://localhost:4200'];
const cors = require('cors');
const app = express();
// app.use('/',(req,res,next)=>{
//     res.status(200).json({
//         message: "Welcome to my first node rest api..."
//     });
// });
app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  
  }));
app.use('/products', productRoute);
app.use('/orders', orderRoute);

module.exports=app;
