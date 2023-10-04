const mongoose = require("mongoose");
const { getUser } = require("./getUser.js");
require("dotenv").config();

async function getOriginalTitle(username,playlistId,videoId) {

    const user = await getUser(username);

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === playlistId);
    let playlist = user.playlists[playlistIndex];

    let videoIndex = playlist.videos.findIndex((video) => video._id.toString() === videoId);

    let videoLink = user.playlists[playlistIndex].videos[videoIndex].link;
    let apiId = videoLink.slice(videoLink.length -11,videoLink.length);
    let apiUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + apiId + "&fields=items(id%2Csnippet)&key=" + process.env.API_URL_KEY;

    let response = await fetch(apiUrl);
    let data = await response.json();
    let originalTitle = data.items[0].snippet.title;

    user.playlists[playlistIndex].videos[videoIndex].title = originalTitle;

    await user.save();

}

module.exports.getOriginalTitle = getOriginalTitle;