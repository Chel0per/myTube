const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

async function addUser(username,password) {

    const object = {
        user:username,
        password:password,
        adminUser:false,
        daylyInsertions:0,
        playlists:[]
    };

    const User = mongoose.model("user",userSchema,"users");
    const newUser = new User(object);

    await newUser.save();

}

module.exports.addUser = addUser;