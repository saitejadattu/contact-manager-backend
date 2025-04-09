const mongoose = require("mongoose");

const connectToDB = () =>{
    mongoose.connect("mongodb+srv://killer:Dg1Z8DfSbQxm0b0t@cluster0.j1ccr.mongodb.net/contact-manager")
    .then(()=>console.log("mongoDB is connected"))
    .catch((err)=>console.log("database error", err.message))
}

module.exports = connectToDB
