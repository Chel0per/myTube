const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema.js");

async function deletePlaylist(username,id){
    
    const User = mongoose.model("user", userSchema,"users");

    const user = await User.findOne({user:username});

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === id);
    
    user.playlists.splice(playlistIndex, 1);

    await user.save();

}

module.exports.deletePlaylist = deletePlaylist;