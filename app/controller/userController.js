const User =require('../models/user');
const bcrypt =require('bcrypt');
const saltRound = 10;

exports.store=async (req,res)=>{
    try{
        const hash = await bcrypt.hash(req.body.password,saltRound);
            req.body.password =hash;

            const user= new User(req.body);
            await user.save();
            res.send(user);
        }catch(err){
            res.send(err.message);
        }
};

exports.list=async (req,res)=>{
    try{
        const user= await User.find();
        res.send(user);
    }catch(err){
        console.log(err);
    }
};


exports.destroy=async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send('User Deleted');
    }catch(err){
        res.send(err.message);
    }
};