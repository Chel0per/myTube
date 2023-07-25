const mongoose = require("mongoose");
const userSchema = require("./schemas/userSchema.js");

async function deletePlaylist(username,id){

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB", { useNewUrlParser: true, useUnifiedTopology: true });
    
    const User = mongoose.model("user", userSchema,"users");

    const user = await User.findOne({user:username});

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === id);
    
    user.playlists.splice(playlistIndex, 1);

    await user.save();

    mongoose.connection.close();

}

module.exports.deletePlaylist = deletePlaylist;