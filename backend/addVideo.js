const mongoose = require("mongoose");
const { linkToObject } = require("./linkToObject.js");
const videoSchema = require("./schemas/videoSchema.js");
const playlistSchema = require("./schemas/playlistSchema.js");
const userSchema = require("./schemas/userSchema.js")

async function addVideo(link,playlist,username){ 
    
    const object = await linkToObject(link);

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeusersDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const Video = mongoose.model("Video",videoSchema);
    const Playlist = mongoose.model("Playlist",playlistSchema);
    
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

    mongoose.connection.close();

}

// addVideo("https://www.youtube.com/watch?v=FssULNGSZIA","Música","chel0per");

module.exports.addVideo = addVideo;