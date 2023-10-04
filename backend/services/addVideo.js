const mongoose = require("mongoose");
const { idToObject } = require("./idToObject.js");
const videoSchema = require("../schemas/videoSchema.js");
const playlistSchema = require("../schemas/playlistSchema.js");

async function addVideo(id,playlist,user){ 
    
    const object = await idToObject(id);

    const Video = mongoose.model("video",videoSchema,"videos");
    const Playlist = mongoose.model("playlist",playlistSchema,"playlists");

    if(!user.adminUser) user.daylyInsertions++;

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
        user.playlists.sort((a, b) => {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }
            else if (nameA > nameB) {
                return 1;
            }
            else{
               return 0; 
            }      
        });
        await user.save();
    }

    mongoose.connection.deleteModel("video");
    mongoose.connection.deleteModel("playlist");

}

module.exports.addVideo = addVideo;