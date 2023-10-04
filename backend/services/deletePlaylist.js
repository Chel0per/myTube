const mongoose = require("mongoose");
const { getUser } = require("./getUser.js");

async function deletePlaylist(username,id){
    
    const user = await getUser(username);

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === id);
    
    user.playlists.splice(playlistIndex, 1);

    await user.save();

}

module.exports.deletePlaylist = deletePlaylist;