const express = require("express");
const app = express();
require("../db/conn")
const port = process.env.PORT || 8000;
const MenRanking = require("../models/mens-api");


app.get("/",async(req,res)=>{

  const send = await  res.send("Hello world")


})

app.listen(port,()=>{

    console.log(`connection on port ${port}`);


})