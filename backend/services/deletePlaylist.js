const mongoose = require("mongoose");
const { getUser } = require("./getUser.js");

async function deletePlaylist(username,id){
    
    const user = await getUser(username);

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === id);

    if(playlistIndex < 0) return false;
    
    user.playlists.splice(playlistIndex, 1);

    await user.save();

    return true;

}

module.exports.deletePlaylist = deletePlaylist;