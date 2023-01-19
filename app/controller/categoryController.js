const Category =require('../models/category');

exports.collect=async (req,res)=>{
    try{
            const category= new Category(req.body);
            await category.save();
            res.send(category);
        }catch(err){
            res.send(err.message);
        }
};

exports.show=async (req,res)=>{
    try{
        const category= await Category.find();
        res.send(category);
    }catch(err){
        console.log(err);
    }
};


exports.remove=async (req,res)=>{
    try{
        await Category.findByIdAndDelete(req.params.id);
        res.send('Category Deleted');
    }catch(err){
        res.send(err.message);
    }
};