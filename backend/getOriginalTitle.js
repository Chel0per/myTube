const mongoose = require("mongoose");
const userSchema = require("./schemas/userSchema.js");
const secret = require("./secret.json");

async function getOriginalTitle(username,playlistId,videoId) {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const User = mongoose.model("user", userSchema,"users");

    const user = await User.findOne({user:username});

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === playlistId);
    let playlist = user.playlists[playlistIndex];

    let videoIndex = playlist.videos.findIndex((video) => video._id.toString() === videoId);

    let videoLink = user.playlists[playlistIndex].videos[videoIndex].link;
    let apiId = videoLink.slice(videoLink.length -11,videoLink.length);
    let apiUrl = secret.api_part1 + apiId + secret.api_part2 + secret.api_key;

    let response = await fetch(apiUrl);
    let data = await response.json();
    let originalTitle = data.items[0].snippet.title;

    user.playlists[playlistIndex].videos[videoIndex].title = originalTitle;

    await user.save();

    mongoose.connection.close();

}

module.exports.getOriginalTitle = getOriginalTitle;