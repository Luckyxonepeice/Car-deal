const express = require('express');
const  {connectDatabase, closeDatabase}= require('../db/index');
const router=express.Router();
const tokenVerify = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/isAdmin');
const { ObjectId } = require('mongodb');


router.get('/get-dealer', tokenVerify , isAdmin , async(req, res)=>{
    
    try{

        const email = req.user.email;

        const db = await connectDatabase();

        const delear = await db.collection('dealer').findOne({email:email});

        const cars = await db.collection('cars').find({email:email});

        delear.cars = cars;

        const sold_car = await db.collection('soldcars').find({email:email}) 

        await closeDatabase();

        console.log(dealers_car);

        return res.json("h1")


    }catch (err){
        console.log(err);

        return res.status(500).json({
            Error:"Error in Getting Dealer"
        })
    }
})
module.exports = router;