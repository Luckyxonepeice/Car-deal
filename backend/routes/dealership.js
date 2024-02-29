const express = require('express');
const  {connectDatabase, closeDatabase}= require('../db/index');
const router=express.Router();


router.post('/add-dealer', async (req, res)=>{

    try {
        const data = req.body;

        const db = await connectDatabase();

        const result = await db.collection('dealer').insertOne(data);

        await closeDatabase();
        
        return res.status(200).json({
            result: result
        })

    } catch (err) {
        return res.status(500).json({
            Error:"Error While adding the dealer"
        })
    }

})
module.exports = router;