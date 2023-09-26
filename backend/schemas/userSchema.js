const mongoose = require("mongoose");
const playlistSchema = require("./playlistSchema")

const userSchema = new mongoose.Schema({

    user:String,
    password:String,
    adminUser:Boolean,
    daylyInsertions:Number,
    image:String,
    playlists:[playlistSchema]

});

module.exports = userSchema;