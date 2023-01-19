const express=require('express');

const User=require('./app/models/user');
const Author=require('./app/models/author');
const Category=require('./app/models/category');
const Book=require('./app/models/book');
const Banner=require('./app/models/banner');

const mongoose= require('mongoose');
const app= express();
const port=3000;


const URL="mongodb://localhost/MY_DATABASE";


async function dbconnect (){
    try{
        await mongoose.connect(URL);
        console.log('Database Connected');
    }
    catch(error){
        console.log('Database Connection error', error.message);
    }
}

const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(fileUpload());
app.use(express.static('uploads'));

dbconnect();

app.use('/user', require('./app/routes/userRoute'));
app.use('/author', require('./app/routes/authorRoute'));
app.use('/category', require('./app/routes/categoryRoute'));
app.use('/book', require('./app/routes/bookRoute'));
app.use('/coupon', require('./app/routes/couponRoute'));
app.use('/banner',require('./app/routes/bannerRoute'));
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});