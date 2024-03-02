const express = require('express');
const  {connectDatabase, closeDatabase}= require('../db/index');
const tokenVerify = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/isAdmin');
const { route } = require('./cars');
const { ObjectId , Binary} = require('mongodb');
const multer = require('multer');
const fs = require('fs');

const router=express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/add-car', upload.single('image'),tokenVerify , isAdmin ,  async (req, res)=>{

    try {
        const data = req.body;

        console.log(data)

        data.email = req.user.email;

        const db = await connectDatabase();

        const imageData = fs.readFileSync(req.file.path);

        req.image=Binary(imageData);

        console.log(req.image);

        const car_info = await db.collection('cars').insertOne(data);

        await closeDatabase();

        return res.status(200).json({
            result: car_info
        })
    } catch (err) {

        return res.status(503).json({
            Error: "Error in Adding Cars"
        })
    }
})

router.post('/add-soldcar', tokenVerify, isAdmin , async(req, res)=>{

    try{
        
        const db = await connectDatabase();

        const data = req.body;

        data.email = req.user.email;

        const result = await db.collection('soldcar').insertOne(data);

        await closeDatabase();

        return res.json({result:result})

    }catch(err){

        return res.status(500).json({
            Error:"Error in Adding the Sold Cars"
        })

    }
})

router.get('/get-soldcar', tokenVerify, isAdmin, async(req, res)=>{
    
    try{

        const db= await connectDatabase();

        const result = await db.collection('soldcar').find({email:req.user.email}).toArray();


        const carIds = [];
        result.forEach( (val)=>{

            val.cars_id.forEach( (value)=>{
                carIds.push(new ObjectId(value));
            })
        })

        const car_info = await db.collection('cars').find({
            "_id":{$in:carIds}
        }).toArray();


        await closeDatabase();

        return res.json({
            result:car_info
        });

    }catch(err){

        console.log(err);

        return res.status(500).json({
            Error:"Error in SoldCar!"
        })
    }

})

router.get('/get-car', tokenVerify, isAdmin , async(req, res)=>{
    try{

        const db= await connectDatabase();

        const result = await db.collection('cars').find({email:req.user.email}).toArray();
        
        await closeDatabase();

        return res.json({
            result:result
        });

    }catch(err){

        console.log(err);

        return res.status(500).json({
            Error:"Error in Car!"
        })
    }
})
module.exports = router;