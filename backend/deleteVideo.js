const mongoose = require("mongoose");
const videoSchema = require("./videoSchema.js");

async function deleteVideo(collection,id) {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const Video = mongoose.model(collection,videoSchema,collection);

    await Video.deleteOne({_id:id});

    mongoose.connection.close();

}

module.exports.deleteVideo = deleteVideo;