const Book =require('../models/book');

exports.collect=async (req,res)=>{
    try{
            const book= new Book(req.body);
            await book.save();
            res.send(book);
        }catch(err){
            res.send(err.message);
        }
};

exports.show=async (req,res)=>{
    try{
        const book= await Book.find();
        res.send(book);
    }catch(err){
        console.log(err);
    }
};


exports.remove=async (req,res)=>{
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.send('Book Deleted');
    }catch(err){
        res.send(err.message);
    }
};