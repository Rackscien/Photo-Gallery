const {Router} = require('express');
const uploadMiddleware = require('../middleware/MulterMiddleware');
const uploadModel = require('../models/UploadModels')

const router= Router();

router.get('/api/get',async (req,res)=>{
    const allPhotos = await uploadModel.find().sort({createdAt : "descending"});
    res.send(allPhotos);
})

router.post("/api/save",uploadMiddleware.single("photo"), (req,res)=>{
    const photo = req.file.fieldname;
    console.log(photo);

    uploadModel.create({photo})
    .then((data)=>{
        console.log("Uploaded Successfully...");
        console.log(data);
        res.send(data);
    })
    .catch((err)=> console.log(err));
    ;
})

module.exports= router;