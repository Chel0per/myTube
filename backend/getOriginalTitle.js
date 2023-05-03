const mongoose = require("mongoose");
const videoSchema = require("./videoSchema.js");
const secret = require("./secret.json");

async function getOriginalTitle(collection,id,link) {

    await mongoose.connect("mongodb://127.0.0.1:27017/mytubeDB", { useNewUrlParser: true, useUnifiedTopology: true });

    const Video = mongoose.model(collection,videoSchema,collection);

    const videoId = link.slice(link.length -11,link.length);

    const apiUrl= secret.api_part1 + videoId + secret.api_part2 + secret.api_key;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    const newTitle = data.items[0].snippet.title;

    await Video.updateOne({_id:id},{title:newTitle});

    mongoose.connection.close();

}

module.exports.getOriginalTitle = getOriginalTitle;