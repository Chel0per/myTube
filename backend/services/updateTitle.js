const mongoose = require("mongoose");
const { getUser } = require("./getUser");

async function updateTitle(username,playlistId,videoId,newTitle) {

    const user = await getUser(username);

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === playlistId);
    let playlist = user.playlists[playlistIndex];

    let videoIndex = playlist.videos.findIndex((video) => video._id.toString() === videoId);
    user.playlists[playlistIndex].videos[videoIndex].title = newTitle;

    await user.save();

}

module.exports.updateTitle = updateTitle;