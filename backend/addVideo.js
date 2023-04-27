const mongoose = require("mongoose");
const { linkToObject } = require("./linkToObject.js");
const videoSchema = require("./videoSchema.js");

async function addVideo(link,playlist){ 
    
    const object = await linkToObject(link);

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const Video = mongoose.model(playlist,videoSchema,playlist);
    
    const newVideo = new Video(object);

    await newVideo.save();

    mongoose.connection.close();

}

module.exports.addVideo = addVideo;