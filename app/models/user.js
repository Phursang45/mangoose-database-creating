const mongoose= require('mongoose');
//userSchema
const userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"Email must be filled"],
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type: Boolean,
        default:false              
    }
});


//user model
module.exports= mongoose.model('User',userSchema);