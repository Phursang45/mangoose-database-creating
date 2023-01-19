const mongoose= require('mongoose');
//userSchema
const couponSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    code:{
        type:String,
        required: true
    },
    expireDate:{
        type:Date,
        required:true
    },
    discountPercent:{
        type: Number,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    maxAmount:{
        type: Number,
        required:true
    }
});


//user model
module.exports= mongoose.model('Coupon',couponSchema);