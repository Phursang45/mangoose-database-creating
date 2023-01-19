const mongoose= require('mongoose');
//userSchema
const categorySchema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
});


//user model
module.exports= mongoose.model('Category',categorySchema);