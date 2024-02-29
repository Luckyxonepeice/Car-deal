const express = require('express');
const  {connectDatabase, closeDatabase}= require('../db/index');
const tokenVerify = require('../middlewares/tokenVerify');
const isAdmin = require('../middlewares/isAdmin');

const router=express.Router();


router.post('/add-car', tokenVerify , isAdmin ,  async (req, res)=>{

    try {
        const data = req.body;

        const db = await connectDatabase();

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

module.exports = router;