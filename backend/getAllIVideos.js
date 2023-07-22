const mongoose = require("mongoose");
const userSchema = require("./schemas/userSchema.js");

async function getAllVideos (username) {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const User = mongoose.model("user", userSchema,"users");

    const user = await User.findOne({user:username});

    const playlists = userData.playlists;
    
    await mongoose.connection.close();

    return playlists;

}

module.exports.getAllVideos = getAllVideos;