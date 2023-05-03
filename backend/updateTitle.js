const mongoose = require("mongoose");
const videoSchema = require("./videoSchema.js");

async function updateTitle(collection,id,newTitle) {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const Video = mongoose.model(collection,videoSchema,collection);

    await Video.updateOne({_id:id},{title:newTitle});

    mongoose.connection.close();

}

module.exports.updateTitle = updateTitle;