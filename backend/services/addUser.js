const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

async function addUser(username,password) {

    const object = {
        username:username,
        password:password,
        adminUser:false,
        playlists:[]
    };

    const User = mongoose.model(user,userSchema);
    const newUser = new User(object);

    await newUser.save();

}

module.exports.addUser = addUser;