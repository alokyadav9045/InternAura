const mongoose=require("mongoose")
require('dotenv').config()
DATABASE=process.env.DATABASEURL
const url="mongodb+srv://alokyadav83956:alok12345@cluster1.pp93h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Database is connected"))
}