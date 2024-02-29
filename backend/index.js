require('dotenv').config({path:'./vars/.env'});
const register = require('./routes/user.js')
const cars = require('./routes/cars.js');
const dealer = require('./routes/dealership.js')
const express = require('express')

const app = express();
app.use(express.json());

app.use('/user' , register );

app.use('/cars', cars);

app.use('/dealer', dealer);

const port =  process.env.PORT

app.listen( port , ()=>{
    console.log(`Listening in PORT:${port}`)
})