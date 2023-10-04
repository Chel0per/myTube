const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

async function getUserHash(username){

    if (mongoose.connection.readyState === 0){
        mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB");
        console.log("Connected to database again");
    } 

    const User = mongoose.model("user", userSchema,"users");

    const foundUser = await User.findOne({user:username});

    return foundUser.password;

}

module.exports.getUserHash = getUserHash;