const mongoose= require('mongoose');
//userSchema
const bookSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
        embedded: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    stock:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});


//user model
module.exports= mongoose.model('Book',bookSchema);