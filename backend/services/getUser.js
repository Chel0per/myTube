const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

async function getUser(username){

    const User = mongoose.model("user", userSchema,"users");

    const foundUser = await User.findOne({user:username});

    return foundUser;

}

module.exports.getUser = getUser;

