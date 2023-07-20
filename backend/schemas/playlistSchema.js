const mongoose = require("mongoose");
const videoSchema = require("./videoSchema");

const playlistSchema = new mongoose.Schema({

    name:String,
    videos:[videoSchema]

});

module.exports = playlistSchema;