const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({

    link:String,
    thumb:String,
    title:String

});

module.exports = videoSchema;