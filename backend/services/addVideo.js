const mongoose = require("mongoose");
const { idToObject } = require("./idToObject.js");
const videoSchema = require("../schemas/videoSchema.js");
const playlistSchema = require("../schemas/playlistSchema.js");
const userSchema = require("../schemas/userSchema.js")

async function addVideo(id,playlist,username){ 
    
    const object = await idToObject(id);

    const Video = mongoose.model("video",videoSchema,"videos");
    const Playlist = mongoose.model("playlist",playlistSchema,"playlists");
    
    const User = mongoose.model("user", userSchema,"users");

    const user = await User.findOne({user:username});

    const playlistNames = user.playlists.map((playlist) => playlist.name);
    
    if(playlistNames.indexOf(playlist) >= 0){       
        const newVideo = new Video(object);
        user.playlists[playlistNames.indexOf(playlist)].videos.push(newVideo);
        await user.save();
    }
    else{
        const newPlaylist = new Playlist({name:playlist,videos:[]});
        user.playlists.push(newPlaylist);
        const newVideo = new Video(object);
        user.playlists[user.playlists.length - 1].videos.push(newVideo);
        await user.save();
    }

    mongoose.connection.deleteModel("video");
    mongoose.connection.deleteModel("playlist");

}

// addVideo("https://www.youtube.com/watch?v=FssULNGSZIA","Música","chel0per");

module.exports.addVideo = addVideo;