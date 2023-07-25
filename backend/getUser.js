const mongoose = require("mongoose");
const userSchema = require("./schemas/userSchema");

async function getUser(username){

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const User = mongoose.model("user", userSchema,"users");

    const foundUser = await User.findOne({user:username});

    // console.log(foundUser.playlists[0]);

    await mongoose.connection.close();

    return foundUser;

}

module.exports.getUser = getUser;

// getUser("chel0per");
