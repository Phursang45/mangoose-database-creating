const Author =require('../models/author');

exports.collect=async (req,res)=>{
    try{
            const author= new Author(req.body);
            await author.save();
            res.send(author);
        }catch(err){
            res.send(err.message);
        }
};

exports.show=async (req,res)=>{
    try{
        const author= await Author.find();
        res.send(author);
    }catch(err){
        console.log(err);
    }
};


exports.remove=async (req,res)=>{
    try{
        await Author.findByIdAndDelete(req.params.id);
        res.send('Author Deleted');
    }catch(err){
        res.send(err.message);
    }
};