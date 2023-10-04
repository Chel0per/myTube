const mongoose = require("mongoose");
const { getUser } = require("./getUser.js");

async function deleteVideo(username,playlistId,videoId) {

    const user = await getUser(username);

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === playlistId);
    let playlist = user.playlists[playlistIndex];

    let videoIndex = playlist.videos.findIndex((video) => video._id.toString() === videoId);
    user.playlists[playlistIndex].videos.splice(videoIndex, 1);

    if(user.playlists[playlistIndex].videos.length === 0) user.playlists.splice(playlistIndex, 1);

    await user.save();

}

module.exports.deleteVideo = deleteVideo;