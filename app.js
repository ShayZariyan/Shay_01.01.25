const express=require('express');
const app=express();
const morgan=require('morgan');
const prodrouter=require('./api/v1/routes/product');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
const secure=require('./api/v1/middlewares/secure');
app.use(secure);
app.use('/product',prodrouter);

module.exports=app;