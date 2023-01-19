const mongoose= require('mongoose');
//authorSchema
const bannerSchema =new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    expireDate:{
        type:Date,
        required:true
    }
});


//banner model
module.exports= mongoose.model('Banner',bannerSchema);