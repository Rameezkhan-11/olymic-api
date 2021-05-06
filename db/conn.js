const mongoose = require("mongoose");


const conn = async ()=>{ 
await mongoose.connect("mongodb://localhost:27017/men-api",{
useCreateIndex : true,
useUnifiedTopology: true,
useNewUrlParser: true



})}
conn();
