const mongoose = require("mongoose");

const connectToDB = () =>{
    mongoose.connect("mongodb+srv://killer:Ac1lU9xX0hr8trP6@cluster0.j1ccr.mongodb.net/contact-manager")
    .then(()=>console.log("mongoDB is connected"))
    .catch((err)=>console.log("database error", err.message))
}

module.exports = connectToDB