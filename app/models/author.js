const mongoose= require('mongoose');
//authorSchema
const authorSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    address:{
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
    }
});


//user model
module.exports= mongoose.model('Author',authorSchema);