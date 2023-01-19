const Coupon =require('../models/coupon');

exports.collect=async (req,res)=>{
    try{
            const coupon= new Coupon(req.body);
            await coupon.save();
            res.send(coupon);
        }catch(err){
            res.send(err.message);
        }
};

exports.show=async (req,res)=>{
    try{
        const coupon= await Coupon.find();
        res.send(coupon);
    }catch(err){
        console.log(err);
    }
};


exports.remove=async (req,res)=>{
    try{
        await Coupon.findByIdAndDelete(req.params.id);
        res.send('Category Deleted');
    }catch(err){
        res.send(err.message);
    }
};