const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");
require("dotenv").config();

async function getUser(username){

    if (mongoose.connection.readyState === 0){
        await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB");
        console.log("Connected to database again");
    } 

    const User = mongoose.model("user", userSchema,"users");

    const foundUser = await User.findOne({user:username},{password:0});

    return foundUser;

}

module.exports.getUser = getUser;

