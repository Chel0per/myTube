const mongoose = require("mongoose");
const userSchema = require("./schemas/userSchema");

async function updateTitle(username,playlistId,videoId,newTitle) {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const User = mongoose.model("user", userSchema,"users");

    const user = await User.findOne({user:username});

    let playlistIndex = user.playlists.findIndex((playlist) => playlist._id.toString() === playlistId);
    let playlist = user.playlists[playlistIndex];

    let videoIndex = playlist.videos.findIndex((video) => video._id.toString() === videoId);
    user.playlists[playlistIndex].videos[videoIndex].title = newTitle;

    await user.save();

    mongoose.connection.close();

}

module.exports.updateTitle = updateTitle;