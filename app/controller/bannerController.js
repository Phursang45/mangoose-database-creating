const Banner =require('../models/banner');
const uuid=require('uuid').v4;

function getFileName(file,folder){
    return `/${folder}/${uuid()}.${file.name.split(".").pop()}`
};

exports.show=async (req, res)=> {
    const banner = await Banner.find({});
    res.send(banner);
};

exports.collect=async (req, res)=> {
    const fileName= getFileName(req.files.image,'images');

    console.log(req.body);
    const path = `./uploads/${fileName}`;
    req.files.image.mv(path, async (err) => {
        if(err) {
            res.send("Error");
        }
        req.body.image = fileName;
        const banner = new Banner(req.body);
        await banner.save();
        res.send(banner);
    });
};