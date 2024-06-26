const express= require("express");
const app = express();
require("dotenv").config();
const connection = require('./configuration/config')
const dishRouters=require('./src/Dishes/dishes.routes')
const cors = require('cors');
const compression = require("compression")
const port= 5000||process.env.port

app.use(express.json());

app.use(compression());

app.use(cors({ origin: '*' }))
app.use('/uploads',express.static('uploads'))
app.use(dishRouters);
connection()

app.get("/",(req,res)=>{
    res.json({message:"Hello it's Work successfully"})
})
app.listen(port,()=>{
    console.log(`success run on http://localhost:${port}/`);
})