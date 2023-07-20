const mongoose = require("mongoose");
const playlistSchema = require("./playlistSchema")

const userSchema = new mongoose.Schema({

    user:String,
    password:String,
    adminUser:Boolean,
    playlists:[playlistSchema]

});

module.exports = userSchema;