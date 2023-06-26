const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/School",).then(()=>{
    console.log("DB connected successfully");
}).catch((err)=>console.log("No Connection"));